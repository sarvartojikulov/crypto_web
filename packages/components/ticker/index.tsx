import React, { useMemo, useState } from 'react';

import { IconBitcoin, IconEthereum, IconTether } from '@streact/core-assets';
import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';

type unit_type = 'usd' | 'pln';

const COINS = [
  {
    name: 'Bitcoin',
    icon: <IconBitcoin />,
    pln: '95249,58',
    usd: '21213,00',
  },
  {
    name: 'Ethereum',
    icon: <IconEthereum />,
    pln: '7680,58',
    usd: '1513,00',
  },
  {
    name: 'USDT',
    icon: <IconTether />,
    pln: '148.79',
    usd: '35.70',
  },
];

const CURRENCIES: unit_type[] = ['usd', 'pln'];

const Ticker = () => {
  const [unit, set_unit] = useState<unit_type>('pln');

  //TODO: Fetch price list
  const price_list = useMemo(() => {
    return COINS.map(({ name, pln, icon, usd }) => ({ name, pln, icon, usd }));
  }, []);

  return (
    <div className="card w-full bg-base-200 shadow-xl text-sm md:text-mg lg:text-lg">
      <ul className="flex w-full pt-4">
        {CURRENCIES.map((item, i) => (
          <li
            key={i}
            className={cn(
              'w-1/2 text-center pb-2 border-b-2 cursor-pointer font-semibold',
              {
                'border-gray-600': unit !== item,
                'border-primary text-primary': unit === item,
              }
            )}
            onClick={() => set_unit(item)}
          >
            {item.toUpperCase()}
          </li>
        ))}
      </ul>
      <div className="card-body pt-2 pb-4 px-7">
        <AnimatePresence mode="wait">
          <motion.div
            key={unit}
            initial={{ y: 5, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -5, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {price_list.map((price) => (
              <li className="flex w-full justify-between py-2" key={price.name}>
                <div className="flex items-center space-x-2">
                  <span className="min-w-[30px] flex justify-center">
                    {price.icon}
                  </span>
                  <span>{price.name}</span>
                </div>
                <div>
                  {price[unit]}
                  <span className="ml-2 uppercase text-primary">{unit}</span>
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
