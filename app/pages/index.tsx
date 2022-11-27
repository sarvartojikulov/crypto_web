import React from 'react';

import { BoxSectionAbout } from '@streact/components-box-sections';
import Calculator from '@streact/components-calculator';
import SectionBackground from '@streact/components-section-background';
import Ticker from '@streact/components-ticker';
import { IconRingPhone } from '@streact/core-assets';
import Layout from '@streact/core-layout';
import Section from '@streact/core-section';
import { AppData, getAppData } from '@streact/services-app-data';
import { AppDataProvider } from '@streact/services-context';
import { GetServerSideProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const LandingSection: React.FC = () => {
  const { t } = useTranslation('main');
  return (
    <Section className="container py-20 md:py-32 lg:py-60 gap-y-3 md:gap-y-6">
      <h1 className="uppercase w-full col-span-full md:col-span-5 lg:col-span-7">
        {t('landing.title')}
      </h1>
      <p className="row-start-2 col-span-full md:col-span-4 lg:col-span-5 text-sm md:text-md lg:text-lg mb-8 md:mb-0">
        {t('landing.description')}
      </p>
      <a
        target="_blank"
        rel="noreferrer"
        href="https://t.me/kryptoswappp"
        className="col-span-2 md:col-span-3 row-start-3"
      >
        <button className="btn btn-active btn-primary w-full">
          {t('landing.links.writeUs')}
        </button>
      </a>
      <a className="col-span-2 row-start-3 " href="tel:+48 574 483 909">
        <button className="group btn btn-primary btn-outline space-x-3 md:space-x-2 w-full justify-center items-center md:justify-start md:w-auto">
          <IconRingPhone className="w-3 fill-primary group-hover:fill-base-300 h-auto sm:py-3 md:py-3.5" />
          <span>{t('landing.links.call')}</span>
        </button>
      </a>
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

type HomePageProps = {
  appData: AppData;
};

const HomePage: NextPage<HomePageProps> = ({ appData }) => {
  return (
    <Layout title="Crypto Asset Exchanger" description="Some description">
      <AppDataProvider value={appData}>
        <LandingSection />
        <CalculatorSection />
      </AppDataProvider>
      <AboutSection />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const appData = await getAppData();
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common', 'main'])),
      appData,
    },
  };
};

export default HomePage;
