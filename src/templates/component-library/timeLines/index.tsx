import Button from "@/components/button";
import Checkbox from "@/components/checkbox";
import CodeSnippet from "@/components/codeSnippet";
import { AddSVG, TrashSVG } from "@/components/icons";
import Input from "@/components/input";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import TimeLine, { STEP_DIRECTION, STEP_STATUS } from "@/components/timeLine";
import { ChangeEvent, useState } from "react";

const success = [
  {
    title: "Order placed",
    placeholderBottom: "John Doe",
    placeholderRight: "2025-01-01",
    description: "Order placed by customer",
    status: STEP_STATUS.SUCCESS,
  },
  {
    title: "Printing cancelled",
    placeholderBottom: "Sonali Rodrigo",
    placeholderRight: "2021-01-02",
    description: "Customer requested changes",
    status: STEP_STATUS.FAILED,
  },
  {
    title: "Printing",
    placeholderBottom: "Nimesh Fonseka",
    placeholderRight: "2021-01-02",
    description: "Printing in progress",
    status: STEP_STATUS.SUCCESS,
  },
];

const statusOptions = [
  { value: STEP_STATUS.SUCCESS, label: "Success" },
  { value: STEP_STATUS.FAILED, label: "Failed" },
  { value: STEP_STATUS.FINISHED, label: "Finished" },
];

const directionOptions = [
  { value: STEP_DIRECTION.UPWARD, label: "upward" },
  { value: STEP_DIRECTION.DOWNWARD, label: "downward" },
];

const TimeLines = () => {
  const emptyLog = {
    title: "",
    placeholderBottom: "",
    placeholderRight: "",
    description: "",
    status: STEP_STATUS.SUCCESS,
  };

  const [playArray, setPlayArray] = useState([
    {
      title: "Start",
      placeholderBottom: "James Bond",
      placeholderRight: "2025-01-01",
      description: "Step on which the process starts",
      status: STEP_STATUS.SUCCESS,
    },
  ]);
  const [direction, setDirection] = useState<string>(STEP_DIRECTION.DOWNWARD);

  const codeExample = `import { TimeLine, STEP_STATUS } from "gwan-design-system"

const logs = [
  {
    title: "Printing",
    placeholderRight: "2021-01-02",
    placeholderBottom: "John Doe",
    description: "Printing in progress",
    status: STEP_STATUS.SUCCESS,
  },
  {
    title: "Printing cancelled",
    placeholderRight: "2021-01-02",
    placeholderBottom: "John Doe",
    description: "Customer requested changes",
    status: STEP_STATUS.FAILED,
  },
  {
    title: "Order placed",
    placeholderRight: "2021-01-02",
    placeholderBottom: "John Doe",
    description: "Order placed by customer",
    status: STEP_STATUS.SUCCESS,
  },
];

const Example = () => {
  return (
    <TimeLine logs={logs} />
  );
};`;

  const handleChange = (index: number, field: string, value: string) => {
    const updated = [...playArray];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };

    setPlayArray(updated);
  };

  const handleRemove = (index: number) => {
    const updated = [...playArray];
    updated.splice(index, 1);
    setPlayArray(updated);
  };
  console.log("direction", direction);
  const renderPlayground = () => {
    return (
      <div className="flex flex-col gap-8">
        <div className="flex flex-row gap-8 items-center justify-center">
          <div className="w-96">
            <TimeLine
              logs={playArray}
              direction={direction as STEP_DIRECTION}
            />
          </div>
        </div>
        <div className="flex flex-col gap-8 items-center justify-center">
          <div className="flex flex-row gap-8 items-center justify-center">
            <Button
              leftIcon={<AddSVG />}
              onClick={() => setPlayArray([...playArray, { ...emptyLog }])}
              label="Add a log"
            />
            <SelectDropdown
              // label="Direction"
              options={directionOptions}
              value={direction}
              onChange={(option) => setDirection(option)}
              className="w-48"
            />
          </div>
          {playArray.map((log, index) => {
            return (
              <div
                key={`log_${index + 1}`}
                className="flex flex-row gap-8 items-end justify-center"
              >
                <Button
                  leftIcon={<TrashSVG />}
                  onClick={() => handleRemove(index)}
                  disabled={index !== playArray.length - 1 || index === 0}
                />
                <SelectDropdown
                  label="Status"
                  options={statusOptions}
                  value={log.status}
                  onChange={(option) => handleChange(index, "status", option)}
                  className="w-48"
                />
                <Input
                  label="Log title"
                  value={log.title}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(index, "title", e.target.value)
                  }
                  className="w-48"
                />
                <Input
                  label="Placeholder right"
                  value={log.placeholderRight}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(index, "placeholderRight", e.target.value)
                  }
                  className="w-48"
                />
                <Input
                  label="Placeholder bottom"
                  value={log.placeholderBottom}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(index, "placeholderBottom", e.target.value)
                  }
                  className="w-48"
                />
                <Input
                  label="Description"
                  value={log.description}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    handleChange(index, "description", e.target.value)
                  }
                  className="w-48"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row gap-8 items-center justify-center">
        <div className="w-96">
          <TimeLine logs={success} />
        </div>
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default TimeLines;
