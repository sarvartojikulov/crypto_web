import React, { ReactNode } from 'react';

type LayoutProps = {
  topBar: ReactNode;
  sidebar: ReactNode;
  page: ReactNode;
};

export const Layout = ({ topBar, sidebar, page }: LayoutProps) => {
  return (
    <div>
      {topBar}
      <div>
        {sidebar}
        <div>{page}</div>
      </div>
    </div>
  );
};
