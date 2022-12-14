import React from 'react';

import Footer from '@streact/components-footer';
import Navbar from '@streact/components-navbar';
import { AnimatePresence } from 'framer-motion';
import '../styles/globals.css';
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Component {...pageProps} />
      </AnimatePresence>
      <Footer />
    </>
  );
}

export default appWithTranslation(MyApp);
