import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  function changeLocale(locale: string) {
    router.push(router.route, router.asPath, {
      locale: locale,
    });
  }

  return (
    <div className="navbar bg-base-300 shadow-md rounded-box">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost btn-circle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h7"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-300 rounded-box w-52"
          >
            <li>
              <Link href="/">
                <a>Homepage</a>
              </Link>
            </li>
            <li>
              <Link href="/about">
                <a>About</a>
              </Link>
            </li>

            <li>
              <Link href="/about">
                <a>How it works?</a>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <a>Contact</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="navbar-center">
        <a className="btn btn-ghost normal-case text-xl">Krypto Swap</a>
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
