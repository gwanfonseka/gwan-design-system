import { FC, useState } from "react";
import Button, { BUTTON_VARIANTS } from "../button";
import { ChevLeft } from "../icons/chevLeftSVG";
import { ChevRight } from "../icons/chevRightSVG";
import SelectDropdown, { ISelectDropdownOption } from "../selectDropdown";

export interface IPaging {
  total: number;
  page: number;
  size: number;
}

export interface IPagination extends IPaging {
  options: ISelectDropdownOption[];
  onChange: (paging: IPaging) => void;
  className?: string;
}

const Pagination: FC<IPagination> = ({
  total,
  page,
  size,
  options,
  onChange,
  className = "",
}: IPagination) => {
  const [optionDropdown, setOptionDropdown] = useState<string>(size.toString());

  const onLeft = () => {
    if (page > 1) {
      onChange({ total, page: page - 1, size });
    }
  };

  const onRight = () => {
    if (page < Math.ceil(total / size)) {
      onChange({ total, page: page + 1, size });
    }
  };

  const handlePageSize = (size: string) => {
    setOptionDropdown(size);
    onChange({ total, page: 1, size: parseInt(size) });
  };

  return (
    <div
      className={`bg-neutral-50 flex flex-row gap-4 items-center px-4 py-2 rounded-lg ${className}`}
    >
      <div className="flex-1">
        {page} of {Math.ceil(total / size)} pages
      </div>
      <div className="w-20">
        <SelectDropdown
          options={options}
          value={optionDropdown}
          onChange={(option) => handlePageSize(option)}
        />
      </div>
      <div>items per page</div>
      <div className="flex flex-row gap-4 items-center">
        <Button
          onClick={onLeft}
          icon={<ChevLeft />}
          variant={BUTTON_VARIANTS.TERTIARY}
          disabled={page === 1}
        />
        <Button
          onClick={onRight}
          icon={<ChevRight />}
          variant={BUTTON_VARIANTS.TERTIARY}
          disabled={page === Math.ceil(total / size)}
        />
      </div>
    </div>
  );
};

export default Pagination;
