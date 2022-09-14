import React from 'react';

import Ticker from '@streact/components-ticker';
import { Button } from '@streact/core-button';
import { Input } from '@streact/core-form';
import { Layout } from '@streact/core-layout';
import { GetStaticProps } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';

const HomePage = () => {
  return (
    <>
      <Head>
        <title>Example react project in a monorepo</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <main className="container">
        <div className="grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-12">
          <div className="col-span-full md:col-span-3 lg:col-span-5">
            <Ticker />
          </div>
        </div>
      </main>
    </>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const locales = await serverSideTranslations(locale!, ['common']);
  return {
    props: {
      ...locales,
    },
  };
};

export default HomePage;
