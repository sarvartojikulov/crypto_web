import React from 'react';

import { Layout } from '@streact/core-layout';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Example react project in a monorepo</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <Layout />
      </main>
    </>
  );
};

export default HomePage;
