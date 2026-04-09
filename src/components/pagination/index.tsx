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
      className={`bg-surface border border-border flex flex-row flex-wrap gap-3 items-center p-3 rounded-lg ${className}`}
    >
      <div className="flex-1 text-foreground hidden sm:block">
        {page} of {Math.ceil(total / size)} pages
      </div>
      <div className="flex flex-row gap-2 items-center sm:w-auto sm:order-0 flex-1 sm:flex-initial">
        <div className="w-20">
          <SelectDropdown
            options={options}
            value={optionDropdown}
            onChange={(option) => handlePageSize(option)}
            className=""
          />
        </div>
        <div className="text-muted-fg text-sm">items per page</div>
      </div>
      <div className="flex flex-row gap-2 items-center">
        <Button
          onClick={onLeft}
          leftIcon={<ChevLeft />}
          variant={BUTTON_VARIANTS.TERTIARY}
          disabled={page === 1}
          className="py-2!"
        />
        <Button
          onClick={onRight}
          leftIcon={<ChevRight />}
          variant={BUTTON_VARIANTS.TERTIARY}
          disabled={page === Math.ceil(total / size)}
          className="py-2!"
        />
      </div>
    </div>
  );
};

export default Pagination;
