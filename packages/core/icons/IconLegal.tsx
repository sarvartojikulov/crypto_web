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
      d="m18.75 26.563 4.688 4.687 7.812-10.938M43.75 25a7.805 7.805 0 0 1-3.319 6.392 7.802 7.802 0 0 1-2.173 6.866 7.8 7.8 0 0 1-6.866 2.173A7.802 7.802 0 0 1 25 43.75a7.805 7.805 0 0 1-6.392-3.319 7.804 7.804 0 0 1-6.866-2.173 7.801 7.801 0 0 1-2.173-6.866A7.802 7.802 0 0 1 6.25 25a7.805 7.805 0 0 1 3.319-6.392 7.802 7.802 0 0 1 2.173-6.866 7.804 7.804 0 0 1 6.866-2.173A7.804 7.804 0 0 1 25 6.25a7.805 7.805 0 0 1 6.392 3.319 7.804 7.804 0 0 1 6.866 2.173 7.804 7.804 0 0 1 2.173 6.866A7.803 7.803 0 0 1 43.75 25v0Z"
      stroke="#fff"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Memo = memo(Icon);
export default Memo;
