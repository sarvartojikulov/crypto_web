import React from 'react';

import { BoxSectionContact } from '@streact/components-box-sections';
import Layout from '@streact/core-layout';
import Section from '@streact/core-section';
import { useRouter } from 'next/router';
import { NextPage } from 'next/types';

const Contact: NextPage = () => {
  const { locale } = useRouter();
  return (
    <Layout title="" description="">
      <Section className="container">
        <BoxSectionContact />
      </Section>
    </Layout>
  );
};

export default Contact;
