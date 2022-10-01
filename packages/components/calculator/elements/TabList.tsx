import React from 'react';

import { Tab } from '@headlessui/react';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';

const TabList = () => {
  const { t } = useTranslation('main');
  return (
    <Tab.List className="flex space-x-1 rounded-xl bg-base-100 p-1 col-span-full lg:col-start-3 lg:col-span-8 h-12">
      {['calculator.tabs.buy', 'calculator.tabs.sell'].map((category) => (
        <Tab
          key={category}
          className={({ selected }) =>
            cn(
              'w-full rounded-lg py-2.5 text-lg uppercase font-medium leading-5 text-white',
              'ring-primary ring-offset-2 ring-offset-base-100 focus:outline-none',
              selected
                ? 'bg-primary shadow text-black ring-2'
                : 'text-white hover:bg-white/[0.12] hover:text-white'
            )
          }
        >
          {t(category)}
        </Tab>
      ))}
    </Tab.List>
  );
};

export default TabList;
