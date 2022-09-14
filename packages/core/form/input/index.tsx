import React from 'react';

import cn from 'classnames';

type InputProps = {
  color: 'input-primary' | 'input-secondary';
};

const Input: React.FC<InputProps> = ({ color }) => {
  return <input className={cn('input w-full max-w-xs', color)} type="text" />;
};

export default Input;
