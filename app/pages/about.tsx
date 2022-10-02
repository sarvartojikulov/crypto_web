import React from 'react';

import Layout from '@streact/core-layout';
import Section from '@streact/core-section';
import { GetServerSideProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

const About: NextPage = () => {
  const { locale } = useRouter();
  return (
    <Layout title="About | Crypto Asset Exchanger" description="About us">
      <Section className="pt-10 md:pt-20">
        <div className="col-span-full justify-self-center text-xl">
          <h1>About {locale}</h1>
        </div>
      </Section>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
};

export default About;
