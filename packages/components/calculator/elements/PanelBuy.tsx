import React, { useState } from 'react';

import { Select } from '@streact/core-form';

const fiatCurrencies = [
  { name: 'USD', course: 1.1 },
  { name: 'PLN', course: 1.1 },
];
const cryptoCurrencies = [
  { name: 'BTC', course: 1.1 },
  { name: 'ETH', course: 1.1 },
];

const PanelBuy = () => {
  const [selectedBuy, setSelectedBuy] = useState(fiatCurrencies[0]);
  const [selectedSell, setSelectedSell] = useState(cryptoCurrencies[0]);

  return (
    <div className="grid grid-cols-8 auto-rows-min gap-y-6 py-8 md:py-4">
      <div className="col-span-full flex flex-col md:flex-row justify-center">
        <div className="w-full md:w-1/2 grid grid-cols-5 gap-x-5 md:flex md:flex-col items-start md:items-center px-6">
          <p className="uppercase text-accent mb-3 md:mb-5 text-sm md:text-base col-span-full">
            You pay
          </p>
          <Select
            style="accent"
            value={selectedBuy}
            currencies={fiatCurrencies}
            onChange={setSelectedBuy}
          />
          <input
            type="number"
            placeholder="0.000"
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
            value={selectedSell}
            currencies={cryptoCurrencies}
            onChange={setSelectedSell}
          />
          <input
            type="number"
            placeholder="0.000"
            className="input input-primary h-[42px] mt-1 w-full md:max-w-[200px] col-span-3"
          />
        </div>
      </div>

      <div className="col-span-full mx-5 md:mx-0 md:col-span-4 md:col-start-3 bg-base-200 text-sm shadow-lg rounded-xl py-2 px-4 flex flex-col">
        <span>Fees: </span>
        <div className="divider divider-vertical my-0"></div>
        <div className="flex justify-between">
          <span>3% fee:</span>
          <span>30 USD</span>
        </div>
        <div className="divider divider-vertical my-0"></div>
        <div className="flex justify-between">
          <span>Total</span>
          <span className="text-accent font-bold">330 USD</span>
        </div>
      </div>
      <button className="btn btn-primary col-span-full mx-5 md:mx-0 md:col-span-4 md:col-start-3">
        confirm
      </button>
    </div>
  );
};

export default PanelBuy;
