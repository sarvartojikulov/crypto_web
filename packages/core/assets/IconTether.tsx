import * as React from 'react';
import { SVGProps, memo } from 'react';

const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={27}
    height={23}
    viewBox="0 0 27 23"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g clipPath="url(#clip0_251_2047)">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.94399 0.112963L0.0209417 10.2393C0.00220804 10.277 -0.00372852 10.3195 0.00400013 10.3607C0.0117288 10.4019 0.0327172 10.4396 0.063896 10.4683L13.3599 22.9447C13.3976 22.9802 13.4479 23 13.5003 23C13.5526 23 13.6029 22.9802 13.6407 22.9447L26.9366 10.4691C26.9678 10.4404 26.9888 10.4027 26.9965 10.3615C27.0042 10.3203 26.9983 10.2777 26.9796 10.2401L22.0565 0.113741C22.0406 0.079733 22.0151 0.0509235 21.9829 0.0307561C21.9508 0.0105888 21.9134 -8.34244e-05 21.8752 1.50745e-05H5.12694C5.08857 -0.000452421 5.05088 0.00996268 5.01842 0.030004C4.98595 0.0500453 4.9601 0.0788567 4.94399 0.112963V0.112963V0.112963Z"
        fill="#50AF95"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.2082 11.2793C15.1128 11.2863 14.6196 11.3151 13.5195 11.3151C12.6445 11.3151 12.0232 11.2894 11.8053 11.2793C8.42383 11.1336 5.89986 10.5572 5.89986 9.86702C5.89986 9.17687 8.42383 8.60123 11.8053 8.45323V10.7052C12.0264 10.7207 12.6596 10.7574 13.5346 10.7574C14.5846 10.7574 15.1104 10.7145 15.2051 10.7059V8.45478C18.5794 8.602 21.0978 9.17843 21.0978 9.86702C21.0978 10.5556 18.5802 11.132 15.2051 11.2785L15.2082 11.2793ZM15.2082 8.22188V6.20674H19.9173V3.13379H7.09622V6.20674H11.8045V8.2211C7.97758 8.39325 5.09964 9.13558 5.09964 10.0251C5.09964 10.9147 7.97758 11.6563 11.8045 11.8292V18.2867H15.2074V11.8269C19.0256 11.6547 21.8988 10.9131 21.8988 10.0244C21.8988 9.13559 19.028 8.39403 15.2074 8.2211L15.2082 8.22188Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_251_2047">
        <rect width={27} height={23} fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const IconTether = memo(SvgComponent);
export default IconTether;