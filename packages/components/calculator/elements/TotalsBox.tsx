import React from 'react';

import { useTranslation } from 'next-i18next';

import { Totals } from '../types';

type TotalsProps = {
  totals: Totals | undefined;
  currency: string;
};
const TotalsBox: React.FC<TotalsProps> = ({ totals, currency }) => {
  const { t } = useTranslation(['main', 'common']);
  return (
    <>
      <div className="col-span-full mx-5 md:mx-0 md:col-span-4 md:col-start-3 bg-base-200 text-sm shadow-lg rounded-xl py-2 px-4 flex flex-col">
        <span className="text-center my-1 text-md">
          <span className="font-bold text-accent mr-1">
            {`${totals?.sum ? totals.sum.toFixed(2) : 0} ${currency}`}
          </span>
          {t('main:calculator.fees.header')}
        </span>
        <div className="divider divider-vertical my-0"></div>
        <div className="flex justify-between">
          <span className="font-bold capitalize">
            {' '}
            {t('main:calculator.fees.totals')}
          </span>
          <span className=" font-bold">
            {totals?.sum ? totals.fees.toFixed(2) : 0} {currency}
          </span>
        </div>
      </div>
    </>
  );
};

export default TotalsBox;
