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

  const accordionContent = useMemo(
    () =>
      t('faq', { returnObjects: true }) as Array<{
        header: string;
        body: string;
      }>,
    [locale]
  );
  return (
    <Layout
      title="How It Works? | Crypto Asset Exchanger"
      description="How It Works? "
    >
      <Section className="container pt-10 pb-10 md:pt-20">
        <article className="col-span-full lg:col-span-10 lg:col-start-2 prose max-w-full prose-h1:mb-6 md:prose-h1:mb-8 prose-h2:mb-6 md:prose-h2:mb-8 prose-h2:text-xl md:prose-h2:text-3xl">
          <h1 className="">How It Works?</h1>
          <p className="">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
            lacus at dui vestibulum convallis. Sed id consequat eros. Proin ut
            accumsan mauris, id pharetra elit. Etiam porttitor dapibus eros, nec
            imperdiet erat pellentesque ac. Vestibulum dapibus neque eu nunc
            malesuada feugiat. Etiam nec dictum neque. Pellentesque vehicula ac
            nulla vitae rutrum. Proin ultricies posuere sagittis. Suspendisse
            lobortis diam ut eleifend tempus.
          </p>
          <h2 className="">Security</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
            lacus at dui vestibulum convallis. Sed id consequat eros. Proin ut
            accumsan mauris, id pharetra elit. Etiam porttitor dapibus eros, nec
            imperdiet erat pellentesque ac. Vestibulum dapibus neque eu nunc
            malesuada feugiat. Etiam nec dictum neque. Pellentesque vehicula ac
            nulla vitae rutrum. Proin ultricies posuere sagittis. Suspendisse
            lobortis diam ut eleifend tempus.
          </p>
          <h2 className="">Legal</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
            lacus at dui vestibulum convallis. Sed id consequat eros. Proin ut
            accumsan mauris, id pharetra elit. Etiam porttitor dapibus eros, nec
            imperdiet erat pellentesque ac. Vestibulum dapibus neque eu nunc
            malesuada feugiat. Etiam nec dictum neque. Pellentesque vehicula ac
            nulla vitae rutrum. Proin ultricies posuere sagittis. Suspendisse
            lobortis diam ut eleifend tempus.
          </p>
          <h2 className="">Fast</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce non
            lacus at dui vestibulum convallis. Sed id consequat eros. Proin ut
            accumsan mauris, id pharetra elit. Etiam porttitor dapibus eros, nec
            imperdiet erat pellentesque ac. Vestibulum dapibus neque eu nunc
            malesuada feugiat. Etiam nec dictum neque. Pellentesque vehicula ac
            nulla vitae rutrum. Proin ultricies posuere sagittis. Suspendisse
            lobortis diam ut eleifend tempus.
          </p>
          <div className="col-span-full md:col-span-8 lg:col-start-2">
            <Accordion content={accordionContent} />
          </div>
        </article>
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
