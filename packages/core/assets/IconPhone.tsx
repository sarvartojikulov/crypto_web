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
      d="M22.375 3.125H17.6875C16.4443 3.125 15.252 3.61886 14.3729 4.49794C13.4939 5.37701 13 6.5693 13 7.8125V42.1875C13 43.4307 13.4939 44.623 14.3729 45.5021C15.252 46.3811 16.4443 46.875 17.6875 46.875H33.3125C34.5557 46.875 35.748 46.3811 36.6271 45.5021C37.5061 44.623 38 43.4307 38 42.1875V7.8125C38 6.5693 37.5061 5.37701 36.6271 4.49794C35.748 3.61886 34.5557 3.125 33.3125 3.125H28.625M22.375 3.125V6.25H28.625V3.125M22.375 3.125H28.625M22.375 42.1875H28.625"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconPhone = memo(SvgComponent);
export default IconPhone;
