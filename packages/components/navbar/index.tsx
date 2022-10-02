import React from 'react';

import { IconHamburger, Logo } from '@streact/core-assets';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  function changeLocale(locale: string) {
    router.push(router.route, router.asPath, {
      locale: locale,
    });
  }

  return (
    <div className="container mt-2 navbar bg-base-300 shadow-md rounded-box">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <IconHamburger className="h-5 w-5" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
          >
            <li>
              <Link href="/">{t('navbar.links.home')}</Link>
            </li>
            <li>
              <Link href="/about">{t('navbar.links.about')}</Link>
            </li>

            <li>
              <Link href="/how-it-works">{t('navbar.links.howItWorks')}</Link>
            </li>
            <li>
              <Link href="/contact">{t('navbar.links.contact')}</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center w-44 cursor-pointer">
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            {router.locale?.toUpperCase()}
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
          >
            <li>
              <span onClick={() => changeLocale('en')}>English</span>
            </li>
            <li>
              <span onClick={() => changeLocale('pl')}>Poland</span>
            </li>
            <li>
              <span onClick={() => changeLocale('ru')}>Russian</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
