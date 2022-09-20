import React from 'react';

type SectionBackgroundProps = {
  className: string;
};

const SectionBackground: React.FC<SectionBackgroundProps> = (props) => {
  return (
    <div {...props} className={`bg-base-background ${props.className}`}></div>
  );
};

export default SectionBackground;
