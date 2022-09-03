import React, { PropsWithChildren, ReactNode } from 'react';

type ButtonProps = PropsWithChildren<{
  onClick: () => void;
  iconBefore?: ReactNode;
}>;

export const Button = ({ children, onClick, iconBefore }: ButtonProps) => {
  return (
    <button onClick={onClick}>
      {iconBefore && <span></span>}
      <span>{children}</span>
    </button>
  );
};
