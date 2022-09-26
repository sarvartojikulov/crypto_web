import React from 'react';

import { BoxSectionAbout } from '@streact/components-box-sections';
import Calculator from '@streact/components-calculator';
import SectionBackground from '@streact/components-section-background';
import Ticker from '@streact/components-ticker';
import Layout from '@streact/core-layout';
import Section from '@streact/core-section';
import { GetStaticProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const LandingSection: React.FC = () => {
  return (
    <Section className="container py-20 md:py-32 lg:py-60 gap-y-3 md:gap-y-6">
      <h1 className="uppercase w-full col-span-full md:col-span-5 lg:col-span-7">
        Crypto asset exchange
      </h1>
      <p className="row-start-2 col-span-full md:col-span-4 lg:col-span-5 text-sm md:text-md lg:text-lg mb-8 md:mb-0">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
        excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a
        id nisi.
      </p>
      <button className="col-span-2 row-start-3 btn btn-active btn-primary h-14">
        Contact
      </button>
      <button className="col-span-2 row-start-3 btn btn-outline btn-primary h-14">
        Calculator
      </button>
      <div className="col-span-full md:row-span-3 md:col-span-3 lg:col-span-5 px-10 md:px-0 lg:px-12 mt-8 md:mt-0">
        <Ticker />
      </div>
    </Section>
  );
};

const CalculatorSection: React.FC = () => {
  return (
    <Section className="bg-base-300">
      <Section className="col-span-full container py-12 gap-y-4 auto-rows-min">
        <Calculator />
      </Section>
    </Section>
  );
};

const AboutSection: React.FC = () => {
  const { t } = useTranslation('main');

  return (
    <Section className="relative mt-24 pb-24">
      <Section className="col-span-full container">
        <h2 className="col-span-full mb-6 text-4xl">{t('about.title')}</h2>
        <p className="col-span-full mb-20 md:mb-14 lg:mb-20">
          {t('about.titleBody')}
        </p>
        <BoxSectionAbout />
      </Section>
      <SectionBackground className="-z-10 absolute h-[600px] md:h-80 lg:h-56 w-full bottom-40 md:bottom-52 lg:bottom-20" />
    </Section>
  );
};

const HomePage: NextPage = () => {
  return (
    <Layout title="" description="">
      <LandingSection />
      <CalculatorSection />
      <AboutSection />
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
