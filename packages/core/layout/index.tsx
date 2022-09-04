import React from 'react';

import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';

export const Layout = () => {
  const { t } = useTranslation('common');
  const { locale } = useRouter();
  return (
    <div className="min-h-screen bg-base-100">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold">{t('test')}</h1>
          <h1 className="text-5xl font-bold">Home {locale}</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};
