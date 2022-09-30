import React, { ReactNode } from 'react';

import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';
import Head from 'next/head';

type Props = {
  children: ReactNode;
  title: string;
  description: string;
};
const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0 },
};

const Layout = ({ children, title, description }: Props): JSX.Element => (
  <>
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1.00001, viewport-fit=cover"
      />
    </Head>
    <NextSeo
      title={title}
      description={description}
      openGraph={{ title, description }}
    />
    <motion.main
      key={title + description}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="flex flex-col"
    >
      {children}
    </motion.main>
  </>
);

export default Layout;
