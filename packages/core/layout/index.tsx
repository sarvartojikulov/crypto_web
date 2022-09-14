import React, { ReactNode } from 'react';

import { motion } from 'framer-motion';
import { NextSeo } from 'next-seo';

type Props = {
  children: ReactNode;
  title: string;
  description: string;
};

const variants = {
  hidden: { opacity: 0, y: 5 },
  enter: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -5 },
  anim: { y: 0, opacity: 1 },
};

const Layout = ({ children, title, description }: Props): JSX.Element => (
  <>
    <NextSeo
      title={title}
      description={description}
      openGraph={{ title, description }}
    />
    <motion.main
      initial="hidden"
      animate="anim"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
      className="container flex flex-col"
    >
      {children}
    </motion.main>
  </>
);

export default Layout;
