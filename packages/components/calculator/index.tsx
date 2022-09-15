import React from 'react';

import { Tab } from '@headlessui/react';

import TabList from './elements/TabList';
import TabPanels from './elements/TabPanels';

const Calculator = () => {
  const [tabIndex, setTabIndex] = React.useState(0);
  return (
    <Tab.Group
      selectedIndex={tabIndex}
      onChange={(index) => setTabIndex(index)}
      manual
    >
      <TabList />
      <TabPanels />
    </Tab.Group>
  );
};

export default Calculator;
