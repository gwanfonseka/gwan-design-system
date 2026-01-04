import { ReactNode } from "react";

const DotFill = (): ReactNode => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5,5,2.24,5,5-2.24,5-5,5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export { DotFill };
