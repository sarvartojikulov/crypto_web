import React, { useEffect, useState } from 'react';

import { Select } from '@streact/core-form';
import { useAppData } from '@streact/services-context';

const PanelSell = () => {
  const { currencies, admin } = useAppData();
  const { available, courses } = currencies;

  const [sellWith, setSellWith] = useState<string>(available.crypto[0]);
  const [getIn, setGetIn] = useState<string>(available.fiat[0]);

  const [input, setInput] = useState<number>(0);
  const [totals, setTotals] = useState<Record<string, number>>({
    converted: 0,
    fees: 0,
    total: 0,
  });

  useEffect(() => {
    const coin = courses.find((item) => item.asset === sellWith);
    const converted = input * Number(coin?.prices[getIn]);
    const fees = input * admin.calculator.percent;
    const total = input + fees;
    setTotals({ converted, fees, total });
  }, [input, sellWith, getIn]);

  return (
    <div className="grid grid-cols-8 auto-rows-min gap-y-6 py-8 md:py-4">
      <div className="col-span-full flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/2 grid grid-cols-5 gap-x-5 md:flex md:flex-col items-start md:items-center px-6">
          <p className="uppercase text-accent mb-3 md:mb-5 text-sm md:text-base col-span-full">
            You pay
          </p>
          <Select
            style="accent"
            value={sellWith}
            currencies={currencies.available.crypto}
            onChange={setSellWith}
          />
          <input
            type="tel"
            placeholder="0.000000"
            onChange={(e) => setInput(Number(e.target.value))}
            className="input input-accent h-[42px] mt-1 w-full md:max-w-[200px] col-span-3"
          />
        </div>
        <div className="h-0.5 w-2/3 mx-auto my-8 md:my-0 md:h-full md:w-0.5 bg-gray-500 rounded-md"></div>
        <div className="w-full md:w-1/2 grid grid-cols-5 gap-x-5 md:flex md:flex-col items-start md:items-center px-6">
          <p className="uppercase text-primary mb-3 md:mb-5 text-sm md:text-base col-span-full">
            You get
          </p>
          <Select
            style="primary"
            value={getIn}
            currencies={available.fiat}
            onChange={setGetIn}
          />
          <input
            type="text"
            onChange={() => ({})}
            value={totals.converted.toFixed(2)}
            className="input input-primary h-[42px] mt-1 w-full md:max-w-[200px] col-span-3"
          />
        </div>
      </div>

      <div className="col-span-full mx-5 md:mx-0 md:col-span-4 md:col-start-3 bg-base-200 text-sm shadow-lg rounded-xl py-2 px-4 flex flex-col">
        <span>Fees:</span>
        <div className="divider divider-vertical my-0"></div>
        <div className="flex justify-between">
          <span>{admin.calculator.percent * 100}% fee</span>
          <span>
            {totals.fees.toFixed(6)} {sellWith}
          </span>
        </div>
        <div className="divider divider-vertical my-0"></div>
        <div className="flex justify-between">
          <span className="font-bold">Total</span>
          <span className="text-accent font-bold">
            {totals.total.toFixed(6)} {sellWith}
          </span>
        </div>
      </div>
      <button className="btn btn-primary col-span-full mx-5 md:mx-0 md:col-span-4 md:col-start-3">
        confirm
      </button>
    </div>
  );
};

export default PanelSell;
