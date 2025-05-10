import RadioButton from "@/components/radioButton";
import { useState } from "react";

const RadioButtons = () => {
  const [selectedOption, setSelectedOption] = useState("option1");

  return (
    <div className="flex flex-col gap-4 items-center">
      <RadioButton
        label="Option 1"
        value="option1"
        selectedValue={selectedOption}
        onChange={setSelectedOption}
      />
      <RadioButton
        label="Option 2"
        value="option2"
        selectedValue={selectedOption}
        onChange={setSelectedOption}
      />
      <RadioButton
        label="Option 3"
        value="option3"
        selectedValue={selectedOption}
        onChange={setSelectedOption}
      />

      <p>Selected option: {selectedOption}</p>
    </div>
  );
};

export default RadioButtons;
