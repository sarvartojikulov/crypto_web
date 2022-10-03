/* eslint-disable no-console */
import React, { useEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';

import { zodResolver } from '@hookform/resolvers/zod';
import { Select } from '@streact/core-form';
import { useAppData } from '@streact/services-context';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import { z } from 'zod';

const panelSchema = z.object({
  inputPay: z.number(),
  inputGet: z.number(),
});

const PanelBuy: React.FC = () => {
  const { t } = useTranslation(['main', 'common']);
  const { currencies, admin } = useAppData();
  const { available, courses } = currencies;

  const [buyWith, setBuyWith] = useState<string>(available.fiat[0]);
  const [getIn, setGetIn] = useState<string>(available.crypto[0]);
  const [totals, setTotals] = useState<Record<string, number>>({
    fees: 0,
    sum: 0,
  });

  const {
    register,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: zodResolver(panelSchema),
  });

  const activeInput = useRef('');

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      const coin = courses.find((item) => item.asset === getIn);
      const price = Number(coin?.prices[buyWith]);
      const totals = { fees: 0, sum: 0 };
      if (name === 'inputPay' && activeInput.current === 'pay') {
        const input = value['inputPay'];
        const converted = input / price;
        setValue('inputGet', converted ? converted.toFixed(6) : 0);
        totals.fees = input * admin.calculator.percent;
        totals.sum = input + totals.fees;
      }
      if (name === 'inputGet' && activeInput.current === 'get') {
        const converted = value['inputGet'] * price;
        setValue('inputPay', converted ? converted.toFixed(2) : 0);
        totals.fees = converted * admin.calculator.percent;
        totals.sum = converted + totals.fees;
      }
      setTotals(totals);
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div className="grid grid-cols-8 auto-rows-min gap-y-6 py-8 md:py-4">
      <div className="col-span-full flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/2 grid grid-cols-5 gap-x-5 md:flex md:flex-col items-start md:items-center px-6">
          <p className="uppercase text-accent mb-3 md:mb-5 text-sm md:text-base col-span-full">
            {t('main:calculator.panels.youPay')}
          </p>
          <Select
            style="accent"
            value={buyWith}
            currencies={currencies.available.fiat}
            onChange={setBuyWith}
          />
          <input
            type="tel"
            placeholder="0.000"
            {...register('inputPay', {
              valueAsNumber: true,
              onChange: () => (activeInput.current = 'pay'),
            })}
            className={classNames(
              'input input-accent h-[42px] mt-1 w-full md:max-w-[200px] col-span-3'
            )}
          />
          {errors.inputPay?.message && (
            <label className="label">
              <span className="label-text-alt text-red-400">
                {errors.inputPay?.message}
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
              onChange: () => (activeInput.current = 'get'),
            })}
          />
          {errors.inputGet?.message && (
            <label className="label">
              <span className="label-text-alt text-red-400">
                {errors.inputGet?.message}
              </span>
            </label>
          )}
        </div>
      </div>

      <div className="col-span-full mx-5 md:mx-0 md:col-span-4 md:col-start-3 bg-base-200 text-sm shadow-lg rounded-xl py-2 px-4 flex flex-col">
        <span className="capitalize">{t('main:calculator.fees.fees')}</span>
        <div className="divider divider-vertical my-0"></div>
        <div className="flex justify-between">
          <span>
            {t('main:calculator.fees.serviceFees')} -{' '}
            {admin.calculator.percent * 100}%
          </span>
          <span>
            {totals.fees ? totals.fees.toFixed(2) : 0} {buyWith}
          </span>
        </div>
        <div className="divider divider-vertical my-0"></div>
        <div className="flex justify-between">
          <span className="font-bold capitalize">
            {t('main:calculator.fees.total')}
          </span>
          <span className="text-accent font-bold">
            {totals.sum ? totals.sum.toFixed(2) : 0} {buyWith}
          </span>
        </div>
      </div>
      <button className="btn btn-primary col-span-full mx-5 md:mx-0 md:col-span-4 md:col-start-3">
        {t('common:button.confirm')}
      </button>
    </div>
  );
};

export default PanelBuy;
