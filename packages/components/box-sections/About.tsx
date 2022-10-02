import React, { ReactElement, ReactNode } from 'react';

import { IconSecure, IconClock, IconLegal } from '@streact/core-assets';
import Box from '@streact/core-box';
import classNames from 'classnames';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

type BoxContent = {
  icon: ReactElement;
  className: string;
  title: string;
  body: string;
};

const BOXES: BoxContent[] = [
  {
    icon: <IconSecure />,
    className: 'col-span-full md:col-span-3',
    title: 'about.boxes.secure.title',
    body: 'about.boxes.secure.body',
  },
  {
    icon: <IconClock />,
    className: 'col-span-full md:col-span-3',
    title: 'about.boxes.fast.title',
    body: 'about.boxes.fast.body',
  },
  {
    icon: <IconLegal />,
    className:
      'col-span-full md:row-start-2 md:col-start-2 md:col-span-4 lg:row-start-1 lg:col-start-auto lg:col-span-3',
    title: 'about.boxes.legal.title',
    body: 'about.boxes.legal.body',
  },
];

const BoxSectionAbout: React.FC = () => {
  const { t } = useTranslation('main');
  return (
    <div className="col-span-full lg:col-start-2 lg:col-span-10 grid grid-cols-5 md:grid-cols-6 lg:grid-cols-9 gap-x-5 gap-y-6 justify-items-center">
      {BOXES.map(({ className, icon, title, body }) => {
        return (
          <Box
            className={classNames('pt-10 px-6 pb-6 max-w-[20rem]', className)}
            key={title}
          >
            <div className="mx-auto mb-6">{icon}</div>
            <h3 className="card-title mb-4">{t(title)}</h3>
            <p className="text-sm whitespace-normal mb-3">{t(body)}</p>
            <div className="card-actions justify-end mt-auto">
              <Link href="/about">
                <button className="btn btn-sm btn-primary">
                  {t('about.cta')}
                </button>
              </Link>
            </div>
          </Box>
        );
      })}
    </div>
  );
};
export default BoxSectionAbout;
