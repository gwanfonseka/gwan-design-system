import { ReactNode } from "react";

const Circle = (): ReactNode => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="-3 -3 30 30">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm0-16c-2.757,0-5,2.243-5,5s2.243,5,5,5,5-2.243,5-5-2.243-5-5-5Zm0,9c-2.206,0-4-1.794-4-4s1.794-4,4-4,4,1.794,4,4-1.794,4-4,4Z"
        fill="currentColor"
      />
    </svg>
  );
};

export { Circle };
