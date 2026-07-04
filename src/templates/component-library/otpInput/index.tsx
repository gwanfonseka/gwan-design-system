"use client";

import { useState } from "react";
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import SelectDropdown from "@/components/selectDropdown";
import Switch from "@/components/switch";
import OtpInput, { OTP_SIZE } from "@/components/otpInput";

const sizeOptions = Object.values(OTP_SIZE).map((v) => ({ value: v, label: v }));

const codeExample = `import { OtpInput, OTP_SIZE } from "gwan-design-system";
import { useState } from "react";

const Example = () => {
  const [otp, setOtp] = useState("");

  return (
    <OtpInput
      value={otp}
      onChange={setOtp}
      length={6}              // number of digit cells, default 6
      mask={false}            // hides digits like a password field
      size={OTP_SIZE.MD}      // SM | MD | LG
      label="Verification code"
      isError={false}
      errorMessage="Invalid code"
      onComplete={(val) => console.log("Complete:", val)}
    />
  );
};`;

const OtpInputTemplate = () => {
  const [otp, setOtp] = useState("");
  const [size, setSize] = useState<string>(OTP_SIZE.MD);
  const [mask, setMask] = useState(false);
  const [isError, setIsError] = useState(false);
  const [length, setLength] = useState("6");

  const lengthOptions = ["4", "5", "6", "8"].map((v) => ({ value: v, label: v }));

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center">
        <OtpInput
          value={otp}
          onChange={setOtp}
          length={parseInt(length)}
          mask={mask}
          size={size as OTP_SIZE}
          label="Verification code"
          isError={isError}
          errorMessage="Invalid verification code"
          onComplete={(val) => console.log("OTP complete:", val)}
        />
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-4 items-center">
        <SelectDropdown
          label="Size"
          options={sizeOptions}
          value={size}
          onChange={setSize}
          className="w-full sm:w-40"
        />
        <SelectDropdown
          label="Length"
          options={lengthOptions}
          value={length}
          onChange={(v) => { setLength(v); setOtp(""); }}
          className="w-full sm:w-40"
        />
        <Switch
          label="Mask"
          checked={mask}
          onChange={setMask}
        />
        <Switch
          label="Error state"
          checked={isError}
          onChange={setIsError}
        />
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex justify-center py-4">
        <OtpInput value="3" onChange={() => {}} label="Verification code" />
      </div>
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default OtpInputTemplate;
