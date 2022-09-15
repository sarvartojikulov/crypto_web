import React from 'react';

import { Tab } from '@headlessui/react';
import cn from 'classnames';

const TabList = () => {
  return (
    <Tab.List className="flex space-x-1 rounded-xl bg-base-100 p-1">
      {['buy', 'sell'].map((category, i) => (
        <Tab
          key={category}
          className={({ selected }) =>
            cn(
              'w-full rounded-lg py-2.5 text-lg uppercase font-medium leading-5 text-white',
              'ring-primary ring-opacity-60 ring-offset-2 ring-offset-base-100 focus:outline-none focus:ring-2',
              selected
                ? 'bg-primary shadow text-black'
                : 'text-white hover:bg-white/[0.12] hover:text-white'
            )
          }
        >
          {category}
        </Tab>
      ))}
    </Tab.List>
  );
};

export default TabList;
