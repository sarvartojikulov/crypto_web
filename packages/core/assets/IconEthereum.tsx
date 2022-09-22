import * as React from 'react';
import { SVGProps, memo } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={25}
    height={31}
    viewBox="0 0 20 31"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_251_2028)">
      <path
        d="M9.49721 0L9.28923 0.706448V21.2041L9.49721 21.4116L19.0118 15.7875L9.49721 0Z"
        fill="#343434"
      />
      <path
        d="M9.49721 0L-0.0176392 15.7875L9.49721 21.4116V11.4626V0Z"
        fill="#8C8C8C"
      />
      <path
        d="M9.49721 23.213L9.37999 23.356V30.6576L9.49721 30.9998L19.0176 17.5918L9.49721 23.213Z"
        fill="#3C3C3B"
      />
      <path
        d="M9.49721 30.9998V23.213L-0.0176392 17.5918L9.49721 30.9998Z"
        fill="#8C8C8C"
      />
      <path
        d="M9.49721 21.4117L19.0118 15.7875L9.49721 11.4626V21.4117Z"
        fill="#141414"
      />
      <path
        d="M-0.0176392 15.7875L9.49721 21.4117V11.4626L-0.0176392 15.7875Z"
        fill="#393939"
      />
    </g>
    <defs>
      <clipPath id="clip0_251_2028">
        <rect width={31} height={31} fill="white" transform="translate(-6)" />
      </clipPath>
    </defs>
  </svg>
);

const IconEthereum = memo(SvgComponent);
export default IconEthereum;
