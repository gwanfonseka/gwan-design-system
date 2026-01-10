import { ReactNode } from "react";

const Eclipse = (): ReactNode => {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 550 600"
        width="40"
        height="40"
        fill="currentColor"
      >
        <g>
          <circle cx="256" cy="42.667" r="42.667" />
          <circle cx="256" cy="256" r="42.667" />
          <circle cx="256" cy="469.333" r="42.667" />
        </g>
      </svg>
    </>
  );
};

export { Eclipse };
