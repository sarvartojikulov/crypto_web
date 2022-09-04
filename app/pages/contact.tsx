import React from 'react';

import { useRouter } from 'next/router';
import { NextPage } from 'next/types';

const Contact: NextPage = () => {
  const { locale } = useRouter();
  return <div className="text-base-content">Contact {locale}</div>;
};

export default Contact;
