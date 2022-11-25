/* eslint-disable no-console */
import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Select } from '@streact/core-form';
import { useAppData } from '@streact/services-context';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import { z } from 'zod';

import { Totals, DataToSend } from '../types';
import { roundToDecimal } from '../utils/number';
import { fiatMinimal, isPositiveNumber } from '../utils/validation';

import CalculatorModal from './CalculatorModal';
import TotalsBox from './TotalsBox';

type InputKeys = 'inputGet' | 'inputPay';
type FormInputs = Record<InputKeys, number>;

const panelSchema = z.object({
  inputPay: z.number().positive().min(0),
  inputGet: z.number().positive().min(0),
});

const PanelBuy: React.FC = () => {
  const { t } = useTranslation(['main', 'common']);
  const {
    currencies: { available, courses, fiatRates },
    admin,
  } = useAppData();
  const [buyWith, setBuyWith] = useState<string>(available.fiat[0]);
  const [getIn, setGetIn] = useState<string>(available.crypto[0]);
  const [totals, setTotals] = useState<Totals>();
  const activeInput = useRef('');
  const [data, setData] = useState<DataToSend>();
  const [openModal, setOpenModal] = useState<boolean>(false);

  const {
    register,
    watch,
    setValue,
    getValues,
    setError,
    clearErrors,
    formState: { errors },
    handleSubmit,
  } = useForm<FormInputs>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      inputGet: 0,
      inputPay: 0,
    },
    resolver: zodResolver(panelSchema),
  });

  const setActiveInput = (input: 'pay' | 'get' | '') => {
    activeInput.current = input;
  };

  const price = useMemo(() => {
    const coin = courses.find((item) => item.asset === getIn);
    const price = Number(coin?.prices[buyWith]);
    return price;
  }, [getIn, buyWith, courses]);

  const actualRate = useMemo(() => {
    const fiat = fiatRates.find(({ pair }) =>
      pair.toLowerCase().includes(buyWith.toLowerCase())
    )!;
    return fiat.rate;
  }, [buyWith, fiatRates]);

  const getFees = useCallback(
    (num: number) => {
      if (num <= 0) {
        return 0;
      }
      let fees;
      if (buyWith.toLowerCase() === 'usd') {
        fees = num > 1000 ? num * admin.calculator.percent : 30;
      } else {
        const inputInUsd = num / actualRate;
        fees =
          inputInUsd > 1000 ? num * admin.calculator.percent : 30 * actualRate;
      }
      return fees;
    },
    [actualRate, admin.calculator.percent, buyWith]
  );

  const calculateInputGet = useCallback(() => {
    const { inputPay } = getValues();
    const fees = getFees(inputPay);
    const converted = (inputPay - fees) / price;
    setValue('inputGet', converted ? roundToDecimal(converted, 6) : 0);
    setTotals({ fees, sum: inputPay });
  }, [price, getValues, setValue, getFees]);

  const calculateInputPay = useCallback(() => {
    const { inputGet } = getValues();
    const converted = inputGet * price;
    const fees = getFees(converted);
    const sum = converted + fees;
    setValue('inputPay', converted ? roundToDecimal(sum, 2) : 0);
    setTotals({ fees, sum });
  }, [price, getValues, setValue, getFees]);

  const validation = useCallback(
    (input: number, inputKey: 'inputGet' | 'inputPay') => {
      if (!isPositiveNumber(input)) {
        setError(inputKey, { message: 'main:calculator.errors.input' });
        return false;
      }
      if (inputKey === 'inputGet' && !fiatMinimal(input * price)) {
        setError(inputKey, { message: 'main:calculator.errors.minValue' });
        return false;
      }
      if (
        buyWith.toLowerCase() === 'usd' &&
        inputKey === 'inputPay' &&
        !fiatMinimal(input)
      ) {
        setError(inputKey, { message: 'main:calculator.errors.minValue' });
        return false;
      }
      if (buyWith.toLowerCase() !== 'usd' && inputKey === 'inputPay') {
        const inputInUsd = input / actualRate;
        if (!fiatMinimal(inputInUsd)) {
          setError(inputKey, { message: 'main:calculator.errors.minValue' });
          return false;
        }
      }
      return true;
    },
    [actualRate, buyWith, price, setError]
  );
  useEffect(() => {
    const subscription = watch((values, { name }) => {
      if (name === 'inputPay' && activeInput.current === 'pay') {
        const isValid = validation(values[name]!, name);
        if (!isValid) {
          return;
        }
        if (errors.inputPay) {
          clearErrors(name);
        }
        calculateInputGet();
      }
      if (name === 'inputGet' && activeInput.current === 'get') {
        const isValid = validation(values[name]!, name);
        if (!isValid) {
          return;
        }
        if (errors.inputGet) {
          clearErrors(name);
        }
        calculateInputPay();
      }
    });
    return () => subscription.unsubscribe();
  }, [
    watch,
    calculateInputGet,
    calculateInputPay,
    price,
    errors,
    clearErrors,
    validation,
    setError,
  ]);

  useEffect(() => {
    calculateInputPay();
  }, [getIn, calculateInputPay]);

  useEffect(() => {
    calculateInputGet();
  }, [buyWith, calculateInputGet]);

  function confirmForm() {
    return handleSubmit(({ inputGet, inputPay }) => {
      setData({
        action: 'buy',
        buyWith,
        getIn,
        pay: inputPay,
        get: inputGet,
        totals,
      });
      setOpenModal(true);
    });
  }

  return (
    <>
      <CalculatorModal open={openModal} setOpen={setOpenModal} data={data!} />
      <div className="grid grid-cols-8 auto-rows-min gap-y-6 py-8 md:py-4">
        <div className="col-span-full flex flex-col md:flex-row justify-center">
          <div className="w-full md:w-1/2 grid grid-cols-5 gap-x-5 md:flex md:flex-col items-start md:items-center px-6">
            <p className="uppercase text-accent mb-3 md:mb-5 text-sm md:text-base col-span-full">
              {t('main:calculator.panels.youPay')}
            </p>
            <Select
              style="accent"
              value={buyWith}
              currencies={available.fiat}
              onChange={setBuyWith}
            />
            <input
              type="text"
              placeholder="0.000"
              {...register('inputPay', {
                valueAsNumber: true,
                onChange: () => setActiveInput('pay'),
              })}
              className={classNames(
                'input input-accent h-[42px] mt-1 w-full md:max-w-[200px] col-span-3'
              )}
            />
            {errors.inputPay?.message && (
              <label className="label text-center col-span-full md:max-w-[200px]">
                <span className="label-text-alt text-red-400 mx-auto">
                  {t(errors.inputPay.message as string)}
                </span>
              </label>
            )}
          </div>
          <div className="h-0.5 w-2/3 mx-auto my-8 md:my-0 md:h-full md:w-0.5 bg-gray-500 rounded-md"></div>
          <div className="w-full md:w-1/2 grid grid-cols-5 gap-x-5 md:flex md:flex-col items-start md:items-center px-6">
            <p className="uppercase text-primary mb-3 md:mb-5 text-sm md:text-base col-span-full">
              {t('main:calculator.panels.youGet')}
            </p>
            <Select
              style="primary"
              value={getIn}
              currencies={available.crypto}
              onChange={setGetIn}
            />
            <input
              type="text"
              className="input input-primary h-[42px] mt-1 w-full md:max-w-[200px] col-span-3"
              placeholder="0.000"
              {...register('inputGet', {
                valueAsNumber: true,
                onChange: () => setActiveInput('get'),
              })}
            />
            {errors.inputGet?.message && (
              <label className="label text-center col-span-full md:max-w-[200px]">
                <span className="label-text-alt text-red-400 mx-auto">
                  {t(errors.inputGet.message)}
                </span>
              </label>
            )}
          </div>
        </div>
        <p className="col-span-2 col-start-4 text-center">
          {`1 ${getIn} = ${price.toFixed(4)} ${buyWith}`}
        </p>
        <TotalsBox totals={totals} currency={buyWith} />
        <button
          className="btn btn-primary col-span-full mx-5 md:mx-0 md:col-span-4 md:col-start-3"
          onClick={confirmForm()}
        >
          {`${t('common:button.confirm')} - ${
            totals?.sum ? totals.sum.toFixed(2) : 0
          }`}
        </button>
      </div>
    </>
  );
};

export default PanelBuy;
