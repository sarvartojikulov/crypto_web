import React from 'react';

import { NextPage } from 'next';
import { useRouter } from 'next/router';

const About: NextPage = () => {
  const { locale } = useRouter();
  return <div className="text-base-content">About {locale}</div>;
};

export default About;
