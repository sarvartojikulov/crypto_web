import React from 'react';

const PanelBuy = () => {
  return (
    <div className="grid grid-cols-8 auto-rows-min gap-y-6 py-3 px-4">
      <div className="col-span-3 flex flex-col justify-start items-end">
        <p className="uppercase text-accent mr-14 mb-5">You pay</p>
        <input type="text" className="input input-accent h-9 mb-4" />
        <input type="tel" className="input input-accent h-9" />
      </div>
      <div className="col-span-2 flex justify-center items-start">
        <div className="h-full divider divider-horizontal"></div>
      </div>
      <div className="col-span-3 flex flex-col justify-end items-start ">
        <p className="uppercase text-primary ml-14 mb-5">You get</p>
        <input type="text" className="input input-primary h-9 mb-4" />
        <input type="tel" className="input input-primary h-9" />
      </div>
      <div className="col-span-4 col-start-3 bg-base-200 shadow-lg rounded-xl py-2 px-4 flex flex-col">
        <span>Fees: </span>
        <div className="divider divider-vertical my-0"></div>
        <div className="flex justify-between">
          <span>3% fee:</span>
          <span>330 USD</span>
        </div>
        <div className="flex justify-between">
          <span>3% fee:</span>
          <span>330 USD</span>
        </div>
        <div className="divider divider-vertical my-0"></div>
        <div className="flex justify-between">
          <span>Total</span>
          <span className="text-accent font-bold">330 USD</span>
        </div>
      </div>
      <button className="btn btn-primary col-span-4 col-start-3">
        confirm
      </button>
    </div>
  );
};

export default PanelBuy;
