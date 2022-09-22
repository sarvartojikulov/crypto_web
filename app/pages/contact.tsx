import React from 'react';

import { BoxSectionContact } from '@streact/components-box-sections';
import FormContacts from '@streact/components-form-contacts';
import Map from '@streact/components-map';
import Layout from '@streact/core-layout';
import Section from '@streact/core-section';
import { useRouter } from 'next/router';
import { NextPage } from 'next/types';

const Contact: NextPage = () => {
  const { locale } = useRouter();
  return (
    <Layout title="" description="">
      <Section className="container mt-20 gap-y-10">
        <h1 className="col-span-full">Contact us</h1>
        <BoxSectionContact />
      </Section>
      <Section className="container mt-12 mb-12 gap-y-6">
        <Map />
        <FormContacts />
      </Section>
    </Layout>
  );
};

export default Contact;
