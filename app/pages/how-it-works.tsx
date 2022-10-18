import React, { useMemo } from 'react';

import Accordion from '@streact/components-accordion';
import Layout from '@streact/core-layout';
import Section from '@streact/core-section';
import { GetServerSideProps, NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

const HowItWorks: NextPage = () => {
  const { locale } = useRouter();
  const { t } = useTranslation('howItWorks');

  const contents = useMemo(() => {
    const accordion = t('faq', { returnObjects: true }) as Array<{
      header: string;
      body: string;
    }>;
    const infos = t('content', { returnObjects: true }) as Array<{
      title: string;
      body: string[];
    }>;

    return { accordion, infos };
  }, [locale]);

  return (
    <Layout
      title="How It Works? | Crypto Asset Exchanger"
      description="How It Works? "
    >
      <Section className="container pt-10 pb-10 md:pt-20 gap-y-10 auto-rows-max">
        <h1 className="col-span-full text-center">{t('mainTitle')}</h1>
        {contents.infos.map(({ title, body }) => {
          return (
            <React.Fragment key={title}>
              <h2 className="col-span-full lg:col-span-10 lg:col-start-2">
                {title}
              </h2>
              <ul className="steps steps-vertical col-span-full md:col-span-8 lg:col-span-8 lg:col-start-3">
                {body.map((text) => {
                  return (
                    <li className="step step-primary first:mb-5" key={text}>
                      <div className="card w-full bg-base-300 shadow-md justify-center items-start text-left p-6">
                        <p>{text}</p>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </React.Fragment>
          );
        })}
        <div className="col-span-full md:col-span-8 lg:col-start-3">
          <Accordion content={contents.accordion} />
        </div>
      </Section>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        'common',
        'howItWorks',
      ])),
    },
  };
};

export default HowItWorks;
