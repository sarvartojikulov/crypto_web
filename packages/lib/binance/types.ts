export type FiatAssetResponse = {
  data: {
    pair: string;
    rate: number;
    symbol: string;
    fullName: string;
    imageUrl: string;
  }[];
};

export type TickerAssetsResponse = {
  symbol: string;
  price: string;
}[];

export type Currency = {
  asset: string;
  prices: Record<string, number>;
};
