import { CircleSVG } from "@/components/icons";
import Snackbar, { SNACK_BAR_TYPE } from "@/components/snackBar";
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Input from "@/components/input";
import { useState, ChangeEvent } from "react";

const codeExample = `import { Snackbar, SNACK_BAR_TYPE } from "gwan-design-system";
import { CircleSVG } from "gwan-design-system/icons";

const Example = () => {
  return (
    <div className="flex flex-col gap-3">
      <Snackbar message="Default notification" icon={<CircleSVG />} />
      <Snackbar
        message="Informational message"
        type={SNACK_BAR_TYPE.INFO}
        icon={<CircleSVG />}
      />
      <Snackbar
        message="Action completed successfully"
        type={SNACK_BAR_TYPE.SUCCESS}
        icon={<CircleSVG />}
      />
      <Snackbar
        message="Proceed with caution"
        type={SNACK_BAR_TYPE.WARNING}
        icon={<CircleSVG />}
      />
      <Snackbar
        message="Something went wrong"
        type={SNACK_BAR_TYPE.DANGER}
        icon={<CircleSVG />}
      />
    </div>
  );
};`;

const typeOptions = [
  { value: "", label: "default" },
  { value: SNACK_BAR_TYPE.INFO, label: "info" },
  { value: SNACK_BAR_TYPE.SUCCESS, label: "success" },
  { value: SNACK_BAR_TYPE.WARNING, label: "warning" },
  { value: SNACK_BAR_TYPE.DANGER, label: "danger" },
];

const SnackBars = () => {
  const [message, setMessage] = useState("Some text here");
  const [type, setType] = useState<string>("");

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center">
        <div className="w-full max-w-sm">
          <Snackbar
            message={message}
            type={type as SNACK_BAR_TYPE}
            icon={<CircleSVG />}
          />
        </div>
      </div>

      <div className="flex flex-row justify-center gap-4 flex-wrap items-end">
        <Input
          label="Message"
          value={message}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setMessage(e.target.value)}
          className="w-full sm:w-64"
        />
        <SelectDropdown
          label="Type"
          options={typeOptions}
          value={type}
          onChange={(val) => setType(val)}
          className="w-full sm:w-48"
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      {/* All variants display */}
      <div className="flex items-center justify-center">
        <div className="w-full sm:w-3/4 md:w-1/2 flex flex-col gap-4">
          <Snackbar message="Default notification" icon={<CircleSVG />} />
          <Snackbar message="Informational message" type={SNACK_BAR_TYPE.INFO} icon={<CircleSVG />} />
          <Snackbar message="Action completed successfully" type={SNACK_BAR_TYPE.SUCCESS} icon={<CircleSVG />} />
          <Snackbar message="Proceed with caution" type={SNACK_BAR_TYPE.WARNING} icon={<CircleSVG />} />
          <Snackbar message="Something went wrong" type={SNACK_BAR_TYPE.DANGER} icon={<CircleSVG />} />
        </div>
      </div>

      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default SnackBars;
