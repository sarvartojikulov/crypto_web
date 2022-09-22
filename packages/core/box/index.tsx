import React, { ReactNode } from 'react';

import cn from 'classnames';

type BoxProps = {
  children: ReactNode;
  className: string;
};

const Box: React.FC<BoxProps> = ({ children, className }) => {
  return (
    <div className={cn('card bg-base-300 shadow-xl', className)}>
      {children}
    </div>
  );
};

export default Box;
