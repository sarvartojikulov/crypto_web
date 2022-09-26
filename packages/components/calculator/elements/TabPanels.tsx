import React from 'react';

import { Tab } from '@headlessui/react';
import cn from 'classnames';
import { motion as m, AnimatePresence } from 'framer-motion';

import PanelBuy from './PanelBuy';

const tab_animation = {
  hide: {
    opacity: 0,
    transition: {
      duration: 0.2,
      ease: 'linear',
      when: 'beforeChildren',
    },
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'linear',
      when: 'beforeChildren',
    },
  },
};

const TabPanels = () => {
  return (
    <Tab.Panels className="col-span-full lg:col-start-3 lg:col-span-8">
      <AnimatePresence mode="sync">
        <Tab.Panel
          key={0}
          as={m.div}
          initial="hide"
          animate="show"
          exit="hide"
          variants={tab_animation}
          static
          className={cn(
            'rounded-xl bg-base-100 p-3',
            'ring-base-100 shadow-xl focus:outline-none focus:ring-2'
          )}
        >
          <PanelBuy />
        </Tab.Panel>
        <Tab.Panel
          key={1}
          as={m.div}
          initial="hide"
          animate="show"
          exit="hide"
          variants={tab_animation}
          static
          className={cn(
            'rounded-xl bg-base-100 p-3',
            'ring-base-100 shadow-xl focus:outline-none focus:ring-2'
          )}
        >
          <PanelBuy />
        </Tab.Panel>
      </AnimatePresence>
    </Tab.Panels>
  );
};

export default TabPanels;
