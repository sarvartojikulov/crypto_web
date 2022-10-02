import React from 'react';

import { IconInstagram, IconTelegram, Logo } from '@streact/core-assets';
import Link from 'next/link';

// TODO: add links

const Footer = () => {
  return (
    <footer className="container mt-12 md:mt-auto pt-4 pb-8 grid grid-cols-4 md:grid-cols-8 lg:grid-cols-8 grid-rows-3 md:grid-rows-1 gap-x-5 gap-y-5 border-t border-gray-500">
      <div className="col-span-full row-start-3 md:row-start-1 md:col-span-3 mt-auto mx-auto md:mx-0 text-xs">
        © Krypto Swap. All rights reserved
      </div>
      <div className="col-span-full row-start-1 md:row-start-1 md:col-span-2 md:col-start-4 mx-auto">
        <Link href="/" className="cursor-pointer">
          <Logo width={200} />
        </Link>
      </div>
      <div className="col-span-full md:col-span-2 md:col-start-7 mt-auto mx-auto md:mx-0">
        <ul className="flex space-x-6 justify-end h-full">
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/krypto.swap/"
              className="cursor-pointer"
            >
              <IconTelegram />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/krypto.swap/"
              className="cursor-pointer"
            >
              <IconInstagram />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
