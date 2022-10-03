import React from 'react';

import { BoxSectionAbout } from '@streact/components-box-sections';
import SectionBackground from '@streact/components-section-background';
import Layout from '@streact/core-layout';
import Section from '@streact/core-section';
import { GetServerSideProps, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useRouter } from 'next/router';

const About: NextPage = () => {
  const { locale } = useRouter();
  return (
    <Layout title="About | Crypto Asset Exchanger" description="About us">
      <Section className="container pt-10 md:pt-20">
        <article className="col-span-full lg:col-span-10 lg:col-start-2 prose max-w-full prose-h1:mb-6 md:prose-h1:mb-8 prose-h2:mb-6 md:prose-h2:mb-8 prose-h2:text-xl md:prose-h2:text-3xl">
          <h1>What makes us different?</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
            lacus at dui vestibulum convallis. Sed id consequat eros. Proin ut
            accumsan mauris, id pharetra elit. Etiam porttitor dapibus eros, nec
            imperdiet erat pellentesque ac. Vestibulum dapibus neque eu nunc
            malesuada feugiat. Etiam nec dictum neque. Pellentesque vehicula ac
            nulla vitae rutrum. Proin ultricies posuere sagittis. Suspendisse
            lobortis diam ut eleifend tempus.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
            lacus at dui vestibulum convallis. Sed id consequat eros. Proin ut
            accumsan mauris, id pharetra elit. Etiam porttitor dapibus eros, nec
            imperdiet erat pellentesque ac. Vestibulum dapibus neque eu nunc
            malesuada feugiat. Etiam nec dictum neque. Pellentesque vehicula ac
            nulla vitae rutrum. Proin ultricies posuere sagittis. Suspendisse
            lobortis diam ut eleifend tempus.
          </p>
        </article>
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
      ...(await serverSideTranslations(locale as string, ['common', 'main'])),
    },
  };
};

export default About;
