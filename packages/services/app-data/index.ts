import { AdminData, getAdminDataForApp } from '@streact/lib-admin';
import { getBinanceData } from '@streact/lib-binance';
import { Currency } from '@streact/lib-binance/types';

type Currencies = {
  available: {
    fiat: string[];
    crypto: string[];
  };
  courses: Currency[];
};

export type AppData = {
  currencies: Currencies;
  admin: AdminData['admin'];
};

export async function getAppData(): Promise<AppData> {
  const [currencies, { admin }] = await Promise.all([
    getBinanceData(),
    getAdminDataForApp(),
  ]);
  const availableFiat = Object.keys(currencies[0].prices);
  const availableCrypto = currencies.map(({ asset }) => asset);

  return {
    currencies: {
      available: { fiat: availableFiat, crypto: availableCrypto },
      courses: currencies,
    },
    admin,
  };
}
