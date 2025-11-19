import { ReactNode } from "react";

const SquareFill = (): ReactNode => {
  return (
    <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5,19h-5c-2.48,0-4.5-2.02-4.5-4.5v-5c0-2.48,2.02-4.5,4.5-4.5h5c2.48,0,4.5,2.02,4.5,4.5v5c0,2.48-2.02,4.5-4.5,4.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export { SquareFill };
