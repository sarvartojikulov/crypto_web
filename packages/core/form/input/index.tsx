import React from 'react';

import cn from 'classnames';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  color: 'input-primary' | 'input-secondary';
  label?: string;
  error: string;
}

const Input: React.FC<InputProps> = ({
  color,
  label,
  error,
  ...rest
}: InputProps) => {
  return (
    <div>
      {label && <label className="label">{label}</label>}
      <input className={cn('input w-full', color)} {...rest} />
      {error && <label className="label">{error}</label>}
    </div>
  );
};

export default Input;
