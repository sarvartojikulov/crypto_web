import React, { useMemo, useState } from 'react';

import { IconBitcoin, IconEthereum, IconTether } from '@streact/core-assets';
import { Currency } from '@streact/lib-binance/types';
import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

const COINS = [
  {
    name: 'Bitcoin',
    icon: <IconBitcoin />,
  },
  {
    name: 'Ethereum',
    icon: <IconEthereum />,
  },
  {
    name: 'Solana',
    icon: <IconTether />,
  },
];

type TickerProps = {
  currencies: Currency[];
};

const Ticker: React.FC<TickerProps> = ({ currencies }) => {
  const units = Object.keys(currencies[0].prices);
  const [activeUnit, setActiveUnit] = useState<number>(0);

  const price_list = useMemo(() => {
    const activeCurrency = units[activeUnit];
    return currencies.map((item) => {
      const price = item.prices[activeCurrency];
      const coinData = COINS.find(({ name }) => name == item.asset);
      return { ...coinData, price };
    });
  }, [activeUnit, currencies, units]);

  return (
    <div className="card w-full bg-base-200 shadow-xl text-sm md:text-mg lg:text-lg">
      <ul className="flex w-full pt-4">
        {units.map((item, i) => (
          <li
            key={i}
            className={cn(
              'w-1/2 text-center pb-2 border-b-2 cursor-pointer font-semibold',
              {
                'border-gray-600': activeUnit !== i,
                'border-primary text-primary': activeUnit === i,
              }
            )}
            onClick={() => setActiveUnit(i)}
          >
            {item.toUpperCase()}
          </li>
        ))}
      </ul>
      <div className="card-body pt-2 pb-4 px-7">
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {price_list.map(({ price, name, icon }, i) => (
              <li className="flex w-full justify-between py-2" key={price * i}>
                <div className="flex items-center space-x-2">
                  <span className="min-w-[30px] flex justify-center">
                    {icon}
                  </span>
                  <span>{name}</span>
                </div>
                <div>
                  {price.toFixed(2)}
                  <span className="ml-2 uppercase text-primary">
                    {units[activeUnit]}
                  </span>
                </div>
              </li>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Ticker;
