import React from 'react';

import {
  IconBuilding,
  IconLocation,
  IconMail,
  IconPhone,
} from '@streact/core-assets';
import Box from '@streact/core-box';

//TODO: i18n

const BoxSectionContact = () => {
  return (
    <>
      <Box className="col-span-full sm:col-span-2 md:col-span-4 lg:col-span-3 py-10">
        <div className="card-body space-y-3">
          <div className="mx-auto">
            <IconPhone className="w-14 h-14 lg:w-18 lg:h-18" />
          </div>
          <h2 className="card-title mx-auto">Phone</h2>
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
          <h2 className="card-title mx-auto">Work time</h2>
          <div className="mx-auto text-center">
            <p>Пн-Пт 11:00-19:00</p>
            <p>Суббота 12:00-18:00</p>
            <p>Воскресенье 12:00-15:00</p>
          </div>
        </div>
      </Box>
      <Box className="col-span-full sm:col-span-2 md:col-span-4 lg:col-span-3 py-10">
        <div className="card-body space-y-3">
          <div className="mx-auto">
            <IconLocation className="w-14 h-14 lg:w-18 lg:h-18" />
          </div>
          <h2 className="card-title mx-auto">Address</h2>
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
          <h2 className="card-title mx-auto">Email</h2>
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
