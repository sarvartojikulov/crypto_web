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
      d="M25 12.5V25h9.375m9.375 0a18.75 18.75 0 1 1-37.499 0 18.75 18.75 0 0 1 37.499 0Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Memo = memo(Icon);
export default Memo;
