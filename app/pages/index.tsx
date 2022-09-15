import React from 'react';

import Calculator from '@streact/components-calculator';
import Ticker from '@streact/components-ticker';
import Layout from '@streact/core-layout';
import Section from '@streact/core-section';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const HomePage: NextPage = () => {
  return (
    <Layout title="" description="">
      <Section>
        <div className="col-span-full md:col-span-3 lg:col-span-5 h-20"></div>
        <div className="grid grid-cols-12 gap-x-5 bg-base-300 col-span-full py-12">
          <div className="col-span-8 col-start-3">
            <Calculator />
          </div>
        </div>
      </Section>
    </Layout>
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
