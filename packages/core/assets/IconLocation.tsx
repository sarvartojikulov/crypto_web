import * as React from 'react';
import { SVGProps, memo } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={50}
    height={50}
    viewBox="0 0 50 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M31.25 21.875C31.25 23.5326 30.5915 25.1223 29.4194 26.2944C28.2473 27.4665 26.6576 28.125 25 28.125C23.3424 28.125 21.7527 27.4665 20.5806 26.2944C19.4085 25.1223 18.75 23.5326 18.75 21.875C18.75 20.2174 19.4085 18.6277 20.5806 17.4556C21.7527 16.2835 23.3424 15.625 25 15.625C26.6576 15.625 28.2473 16.2835 29.4194 17.4556C30.5915 18.6277 31.25 20.2174 31.25 21.875V21.875Z"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M40.625 21.875C40.625 36.7542 25 45.3125 25 45.3125C25 45.3125 9.375 36.7542 9.375 21.875C9.375 17.731 11.0212 13.7567 13.9515 10.8265C16.8817 7.8962 20.856 6.25 25 6.25C29.144 6.25 33.1183 7.8962 36.0485 10.8265C38.9788 13.7567 40.625 17.731 40.625 21.875V21.875Z"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const IconLocation = memo(SvgComponent);
export default IconLocation;
