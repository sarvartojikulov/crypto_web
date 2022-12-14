import axios from 'axios';
import { setupCache } from 'axios-cache-adapter';

import {
  BinanceData,
  Currency,
  FiatAssetResponse,
  TickerAssetsResponse,
} from './types';

const FIAT_ASSETS_URL =
  'https://www.binance.com/bapi/asset/v1/public/asset-service/product/currency';

const CRYPTO_ASSETS_URL = 'https://api.binance.com/api/v3/ticker/price';

const SUPPORTED_FIAT_ASSETS: Record<string, string> = {
  PLN_USD: 'PLN',
};

const SUPPORTED_CRYPTO_ASSETS: Record<string, string> = {
  BTCUSDT: 'BTC',
  ETHUSDT: 'ETH',
  SOLUSDT: 'SOL',
};

const SUPPORTED_STABLE_CRYPTO_ASSETS = ['USDT', 'USDC', 'BUSD'];

const MS_PER_SECOND = 1000;
const UPDATE_LIMIT_IN_SECONDS = 30;

const cache = setupCache({
  maxAge: UPDATE_LIMIT_IN_SECONDS * MS_PER_SECOND,
});

const api = axios.create({
  adapter: cache.adapter,
});

export async function getFiatAssets(): Promise<FiatAssetResponse> {
  const { data } = await api.get(FIAT_ASSETS_URL);
  return data;
}

export async function getCryptoAssets(): Promise<TickerAssetsResponse> {
  const { data } = await api.get(CRYPTO_ASSETS_URL);
  return data;
}

export async function getBinanceData(): Promise<BinanceData> {
  const [fiatAssets, cryptoAssets] = await Promise.all([
    getFiatAssets(),
    getCryptoAssets(),
  ]);
  const filteredCryptoAssets = cryptoAssets.filter(
    ({ symbol }) => SUPPORTED_CRYPTO_ASSETS[symbol]
  );

  const filteredFiatAssets = fiatAssets.data
    .filter(({ pair }) => SUPPORTED_FIAT_ASSETS[pair])
    .map(({ pair, rate }) => ({ pair, rate }));

  const result: Currency[] = filteredCryptoAssets.map(({ symbol, price }) => {
    const usdPrice = Number(price);
    const values: Record<string, number> = filteredFiatAssets.reduce(
      (acc, { pair, rate }) => {
        const name = pair.split('_')[0];
        const converted = rate * usdPrice;
        return { ...acc, [name]: converted };
      },
      {}
    );
    values['USD'] = usdPrice;

    return {
      asset: SUPPORTED_CRYPTO_ASSETS[symbol],
      type: 'unstable',
      prices: {
        ...values,
      },
    };
  });

  SUPPORTED_STABLE_CRYPTO_ASSETS.forEach((asset) => {
    const prices: Record<string, number> = filteredFiatAssets.reduce(
      (acc, { pair, rate }) => {
        const name = pair.split('_')[0];
        return { ...acc, [name]: rate };
      },
      {}
    );
    prices['USD'] = 1;

    result.push({
      asset: asset,
      type: 'stable',
      prices,
    });
  });

  return { currencies: result, fiatRates: filteredFiatAssets };
}
