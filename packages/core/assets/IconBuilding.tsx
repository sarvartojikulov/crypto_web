import * as React from 'react';
import { SVGProps, memo } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={51}
    height={50}
    viewBox="0 0 51 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.3125 43.75H42.6875M9.875 6.25H41.125M11.4375 6.25V43.75M39.5625 6.25V43.75M19.25 14.0625H22.375M19.25 20.3125H22.375M19.25 26.5625H22.375M28.625 14.0625H31.75M28.625 20.3125H31.75M28.625 26.5625H31.75M19.25 43.75V36.7187C19.25 35.425 20.3 34.375 21.5937 34.375H29.4062C30.7 34.375 31.75 35.425 31.75 36.7187V43.75"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconBuilding = memo(SvgComponent);
export default IconBuilding;
