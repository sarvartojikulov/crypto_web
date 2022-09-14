import React, { PropsWithChildren, ReactNode } from 'react';

type ButtonProps = PropsWithChildren<{
  type: 'btn-info' | 'btn-primary' | 'btn-warning' | 'btn-accent';
  onClick: () => void;
  className?: string;
}>;

export const Button = ({ children, onClick, className, type }: ButtonProps) => {
  return (
    <button
      className={`btn btn-outline ${type} ${className}`}
      onClick={onClick}
    >
      <span>{children}</span>
    </button>
  );
};
