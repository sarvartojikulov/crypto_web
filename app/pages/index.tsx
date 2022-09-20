import React from 'react';

import Accordion from '@streact/components-accordion';
import { BoxSectionAbout } from '@streact/components-box-sections';
import SectionBackground from '@streact/components-section-background';
import Ticker from '@streact/components-ticker';
import Box from '@streact/core-box';
import Layout from '@streact/core-layout';
import Section from '@streact/core-section';
import { GetStaticProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const HomePage: NextPage = () => {
  return (
    <Layout title="" description="">
      <Section className="relative pb-24">
        <div className="col-span-full h-20"></div>
        <Section className="col-span-full container">
          <BoxSectionAbout />
        </Section>
        <SectionBackground className="-z-10 absolute h-[600px] md:h-80 lg:h-56 w-full bottom-40 md:top-40 lg:bottom-0" />
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
