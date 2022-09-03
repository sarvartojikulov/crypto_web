import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

const IssuePage = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Head>
        <title>Issue page</title>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <main>Content</main>
    </>
  );
};

export default IssuePage;
