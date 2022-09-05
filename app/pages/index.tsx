import React from 'react';

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
        <Layout />
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
