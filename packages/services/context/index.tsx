import React, { ReactNode } from 'react';

import { AppData } from '@streact/services-app-data';

export const AppDataContext = React.createContext<AppData>({
  currencies: {
    available: {
      fiat: [],
      crypto: [],
    },
    courses: [],
  },
  admin: {
    calculator: {
      percent: 0.3,
    },
  },
});

export const useAppData = () => React.useContext(AppDataContext);

type AppDataProviderProps = {
  children: ReactNode;
  value: AppData;
};

export const AppDataProvider: React.FC<AppDataProviderProps> = ({
  children,
  value,
}) => {
  return (
    <AppDataContext.Provider value={value}>{children}</AppDataContext.Provider>
  );
};
