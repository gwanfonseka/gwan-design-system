import Checkbox from "@/components/checkbox";
import { useState } from "react";

const Checkboxes = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="flex flex-col gap-4 items-center">
      <Checkbox
        label="Accept Terms & Conditions"
        checked={isChecked}
        onChange={(checked) => setIsChecked(checked)}
      />
      <p>Checkbox is {isChecked ? "Checked" : "Unchecked"}</p>
    </div>
  );
};

export default Checkboxes;
