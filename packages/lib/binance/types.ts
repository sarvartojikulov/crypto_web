type FiatAsset = {
  pair: string;
  rate: number;
  symbol: string;
  fullName: string;
  imageUrl: string;
};

export type FiatAssetResponse = {
  data: FiatAsset[];
};

export type TickerAssetsResponse = {
  symbol: string;
  price: string;
}[];

export type Currency = {
  asset: string;
  prices: Record<string, number>;
};
export type FiatRate = Pick<FiatAsset, 'pair' | 'rate'>;

export type BinanceData = {
  currencies: Currency[];
  fiatRates: FiatRate[];
};
