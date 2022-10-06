import React, { useMemo } from 'react';

import {
  IconBuilding,
  IconLocation,
  IconMail,
  IconPhone,
} from '@streact/core-assets';
import Box from '@streact/core-box';
import { useTranslation } from 'next-i18next';

//TODO: i18n

const BoxSectionContact = () => {
  const { t } = useTranslation('contact');

  return (
    <>
      <Box className="col-span-full sm:col-span-2 md:col-span-4 lg:col-span-3 py-10">
        <div className="card-body space-y-3">
          <div className="mx-auto">
            <IconPhone className="w-14 h-14 lg:w-18 lg:h-18" />
          </div>
          <h2 className="card-title mx-auto">{t('boxes.phone.title')}</h2>
          <p className="mx-auto underline">
            <a href="tel:+48 574 483 909">+48 574 483 909</a>
          </p>
        </div>
      </Box>
      <Box className="col-span-full sm:col-span-2 md:col-span-4 lg:col-span-3 py-10">
        <div className="card-body space-y-3">
          <div className="mx-auto">
            <IconBuilding className="w-14 h-14 lg:w-18 lg:h-18" />
          </div>
          <h2 className="card-title mx-auto">{t('boxes.workTime.title')}</h2>
          <div className="mx-auto text-center">
            {(
              t('boxes.workTime.body', { returnObjects: true }) as Array<string>
            ).map((item) => (
              <p key={item}>{item}</p>
            ))}
          </div>
        </div>
      </Box>
      <Box className="col-span-full sm:col-span-2 md:col-span-4 lg:col-span-3 py-10">
        <div className="card-body space-y-3">
          <div className="mx-auto">
            <IconLocation className="w-14 h-14 lg:w-18 lg:h-18" />
          </div>
          <h2 className="card-title mx-auto">{t('boxes.address.title')}</h2>
          <p className="mx-auto text-center">
            Aleja Solidarności 117 lokal 316 Warsaw, Poland
          </p>
        </div>
      </Box>
      <Box className="col-span-full sm:col-span-2 md:col-span-4 lg:col-span-3 py-10">
        <div className="card-body space-y-3">
          <div className="mx-auto">
            <IconMail className="w-14 h-14 lg:w-18 lg:h-18" />
          </div>
          <h2 className="card-title mx-auto">{t('boxes.email.title')}</h2>
          <p className="mx-auto underline">
            <a href="mailto:biuro.kryptoswap@gmail.com">
              biuro.kryptoswap@gmail.com
            </a>
          </p>
        </div>
      </Box>
    </>
  );
};

export default BoxSectionContact;
