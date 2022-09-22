import React, { PropsWithChildren, ReactNode } from 'react';

import cn from 'classnames';

type SectionProps = {
  children: ReactNode;
  className?: string;
};

const Section: React.FC<SectionProps> = ({ children, className }) => {
  return (
    <div
      className={cn(
        'w-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-5',
        className
      )}
    >
      {children}
    </div>
  );
};

export default Section;
