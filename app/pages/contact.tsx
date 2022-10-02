import React from 'react';

import { BoxSectionContact } from '@streact/components-box-sections';
import { FormContacts } from '@streact/components-form-contacts';
import Map from '@streact/components-map';
import Layout from '@streact/core-layout';
import Section from '@streact/core-section';
import { GetServerSideProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

const Contact: NextPage = () => {
  const { locale } = useRouter();
  return (
    <Layout title="Contact | Crypto Asset Exchanger" description="Contact us">
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

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['common'])),
    },
  };
};

export default Contact;
