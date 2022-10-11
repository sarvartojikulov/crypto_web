/* eslint-disable no-console */
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Select } from '@streact/core-form';
import { useAppData } from '@streact/services-context';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import { z } from 'zod';

import { Totals, DataToSend } from '../types';
import { validateInputs } from '../utils/validation';

import CalculatorModal from './CalculatorModal';

const panelSchema = z.object({
  inputPay: z.number().positive().min(1),
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
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: zodResolver(panelSchema),
  });

  const generateTotals = (num: number) => {
    let fees: number;
    if (!num) {
      return { fees: 0, sum: 0 };
    }
    if (buyWith.toLowerCase() === 'usd') {
      fees = num > 1000 ? num * admin.calculator.percent : 30;
    } else {
      const { rate } = fiatRates.find(({ pair }) =>
        pair.toLowerCase().includes(buyWith.toLowerCase())
      )!;

      const inputInUsd = num / rate;
      fees = inputInUsd > 1000 ? num * admin.calculator.percent : 30 * rate;
    }
    const sum = num + fees;
    return { fees, sum };
  };

  const setActiveInput = (input: 'pay' | 'get' | '') => {
    activeInput.current = input;
  };

  const price = useCallback(() => {
    const coin = courses.find((item) => item.asset === getIn);
    const price = Number(coin?.prices[buyWith]);
    return price;
  }, [getIn, buyWith, courses]);

  const calculateInputGet = useCallback(() => {
    const { inputPay } = getValues();
    const converted = inputPay / price();
    setValue('inputGet', converted ? converted.toFixed(6) : 0);
    const totals = generateTotals(inputPay);
    setTotals(totals);
  }, [price, getValues, setValue, admin.calculator.percent]);

  const calculateInputPay = useCallback(() => {
    const { inputGet } = getValues();
    const converted = inputGet * price();
    setValue('inputPay', converted ? converted.toFixed(2) : 0);
    const totals = generateTotals(converted);
    setTotals(totals);
  }, [price, getValues, setValue, admin.calculator.percent]);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === 'inputPay' && activeInput.current === 'pay') {
        const inValid = validateInputs(value.inputPay);
        if (inValid) return setError(name, { message: 'invalid' });
        if (errors.inputPay) {
          clearErrors(name);
        }
        calculateInputGet();
      }
      if (name === 'inputGet' && activeInput.current === 'get') {
        const inValid = validateInputs(value.inputGet);
        if (inValid) return setError(name, { message: 'invalid' });
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
    setError,
  ]);

  useEffect(() => {
    calculateInputGet();
  }, [getIn, calculateInputGet]);

  useEffect(() => {
    calculateInputPay();
  }, [buyWith, calculateInputPay]);

  function confirmForm() {
    console.log(errors);

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
              type="tel"
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
                  {t('main:calculator.errors.input')}
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
                  {t('main:calculator.errors.input')}
                </span>
              </label>
            )}
          </div>
        </div>

        <div className="col-span-full mx-5 md:mx-0 md:col-span-4 md:col-start-3 bg-base-200 text-sm shadow-lg rounded-xl py-2 px-4 flex flex-col">
          <span className="capitalize">{t('main:calculator.fees.fees')}</span>
          <div className="divider divider-vertical my-0"></div>
          <div className="flex justify-between">
            <span>{t('main:calculator.fees.serviceFees')}</span>
            <span>
              {totals ? totals.fees.toFixed(2) : 0} {buyWith}
            </span>
          </div>
          <div className="divider divider-vertical my-0"></div>
          <div className="flex justify-between">
            <span className="font-bold capitalize">
              {t('main:calculator.fees.total')}
            </span>
            <span className="text-accent font-bold">
              {totals ? totals.sum.toFixed(2) : 0} {buyWith}
            </span>
          </div>
        </div>
        <button
          className="btn btn-primary col-span-full mx-5 md:mx-0 md:col-span-4 md:col-start-3"
          onClick={confirmForm()}
        >
          {t('common:button.confirm')}
        </button>
      </div>
    </>
  );
};

export default PanelBuy;
