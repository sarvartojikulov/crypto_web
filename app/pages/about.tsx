import React, { useEffect } from 'react';

import Layout from '@streact/core-layout';
import Section from '@streact/core-section';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const About: NextPage = () => {
  const { locale } = useRouter();
  return (
    <Layout title="About | Crypto Asset Exchanger" description="About us">
      <Section>
        <div className="col-span-full justify-self-center text-xl">
          <h1>About {locale}</h1>
        </div>
      </Section>
    </Layout>
  );
};

export default About;
