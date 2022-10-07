type Totals = {
  fees: number;
  sum: number;
};

type DataToSend = {
  action: string;
  buyWith: string;
  getIn: string;
  pay: number;
  get: number;
  totals?: Totals;
};

export type { Totals, DataToSend };
