import * as React from 'react';
import { SVGProps, memo } from 'react';

const Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="w-14 h-14"
    {...props}
  >
    <path
      d="M19.25 29.75 23.938 35l7.812-12.25M25.5 6.333C20.783 11.35 14.5 14.102 7.996 14a31.06 31.06 0 0 0-1.246 8.748c0 13.048 7.967 24.01 18.75 27.12 10.783-3.108 18.75-14.07 18.75-27.118 0-3.057-.438-5.999-1.246-8.752h-.316c-6.659 0-12.709-2.912-17.188-7.665Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Memo = memo(Icon);
export default Memo;
