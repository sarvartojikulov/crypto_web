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
            <a href="tel:123-456-7890">123-456-7890</a>
          </p>
        </div>
      </Box>
      <Box className="col-span-full sm:col-span-2 md:col-span-4 lg:col-span-3 py-10">
        <div className="card-body space-y-3">
          <div className="mx-auto">
            <IconBuilding className="w-14 h-14 lg:w-18 lg:h-18" />
          </div>
          <h2 className="card-title mx-auto">Work time</h2>
          <p className="mx-auto">Mon-Fri 10am-05pm</p>
        </div>
      </Box>
      <Box className="col-span-full sm:col-span-2 md:col-span-4 lg:col-span-3 py-10">
        <div className="card-body space-y-3">
          <div className="mx-auto">
            <IconLocation className="w-14 h-14 lg:w-18 lg:h-18" />
          </div>
          <h2 className="card-title mx-auto">Address</h2>
          <p className="mx-auto text-center">
            Hoheluftchaussee 69, 04734 Waldheim
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
            <a href="mailto:solomon@warsawa.net">solomon@warsawa.net</a>
          </p>
        </div>
      </Box>
    </>
  );
};

export default BoxSectionContact;
