import Button from "@/components/button";
import Chip from "@/components/chip";
import { useState } from "react";

const chipsArray = [
  { label: "Chip 1" },
  { label: "Chip 2" },
  { label: "Chip 3" },
  { label: "Chip 4" },
  { label: "Chip 5" },
  { label: "Chip 6" },
  { label: "Chip 7" },
  { label: "Chip 8" },
  { label: "Chip 9" },
  { label: "Chip 10" },
];

const Chips = () => {
  const [chipList, setChipList] = useState<{ label: string }[]>([
    chipsArray[0],
  ]);

  const handleAddChip = () => {
    const nextChip = chipsArray.filter((chip) => !chipList.includes(chip))[0];
    setChipList([...chipList, nextChip]);
  };

  const onClear = (chip: { label: string }) => {
    const newChipList = chipList.filter((c) => c.label !== chip.label);
    setChipList(newChipList);
  };

  return (
    <div className="flex flex-row gap-2 items-center justify-center">
      <Button
        label="Add a chip"
        onClick={handleAddChip}
        disabled={chipList.length === chipsArray.length}
      />
      {chipList.map((chip) => (
        <div key={`${chip.label}`}>
          <Chip label={chip.label} onClear={() => onClear(chip)} />
        </div>
      ))}
    </div>
  );
};

export default Chips;
