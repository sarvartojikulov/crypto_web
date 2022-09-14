import React, { PropsWithChildren, ReactNode } from 'react';

const Section: React.FC = ({ children }) => {
  return (
    <div className="w-full grid grid-cols-4 md:grid-cols-8 lg:grid-cols-12 gap-x-5">
      {children}
    </div>
  );
};

export default Section;
