import React from 'react';

import Accordion from '@streact/components-accordion';
import { BoxSectionAbout } from '@streact/components-box-sections';
import Ticker from '@streact/components-ticker';
import Box from '@streact/core-box';
import Layout from '@streact/core-layout';
import Section from '@streact/core-section';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const HomePage: NextPage = () => {
  return (
    <Layout title="" description="">
      <Section>
        <div className="col-span-full h-20"></div>
        <BoxSectionAbout />
      </Section>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const locales = await serverSideTranslations(locale!, ['common', 'main']);
  return {
    props: {
      ...locales,
    },
  };
};

export default HomePage;
