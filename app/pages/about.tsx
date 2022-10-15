import React from 'react';

import { BoxSectionAbout } from '@streact/components-box-sections';
import SectionBackground from '@streact/components-section-background';
import { Logo } from '@streact/core-assets';
import Layout from '@streact/core-layout';
import Section from '@streact/core-section';
import { GetServerSideProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

const About: NextPage = () => {
  const { t } = useTranslation('about');
  const { locale } = useRouter();

  const steps = React.useMemo(() => {
    return t('steps', { returnObjects: true }) as Array<
      { emoji: string; text: string }[]
    >;
  }, [locale]);

  return (
    <Layout title="About | Crypto Asset Exchanger" description="About us">
      <Section className="container pt-10 md:pt-20">
        <h1 className="col-span-full text-center">{t('title')}</h1>
        <div className="col-span-4 col-start-5 h-40">
          <Logo className="h-full w-full" />
        </div>
        <h2 className="col-span-full text-4xl text-center">{t('subtitle')}</h2>
        <ul className="steps steps-vertical col-span-5 col-start-2 mt-8">
          {steps[0].map(({ emoji, text }) => (
            <li
              data-content=""
              className="step step-primary first:mb-5"
              key={text}
            >
              <div className="card w-full bg-base-300 shadow-xl text-left p-6 flex flex-row items-center space-x-2">
                <span>{emoji}</span>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>
        <ul className="steps steps-vertical col-span-5 col-start-7 mt-8">
          {steps[1].map(({ emoji, text }) => (
            <li
              data-content=""
              className="step step-primary first:mb-5"
              key={text}
            >
              <div className="card w-full bg-base-300 shadow-xl text-left p-6 flex flex-row items-center space-x-2">
                <span>{emoji}</span>
                <p>{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </Section>
      <Section className="relative mt-24 pb-24">
        <Section className="col-span-full container">
          <BoxSectionAbout />
        </Section>
        <SectionBackground className="-z-10 absolute h-[600px] md:h-80 lg:h-56 w-full bottom-40 md:bottom-52 lg:bottom-20" />
      </Section>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        'common',
        'main',
        'about',
      ])),
    },
  };
};

export default About;
