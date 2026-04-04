import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import ColorPicker from "@/components/colorPicker";
import { useState } from "react";

const ColorPickerTemplate = () => {
  const [color1, setColor1] = useState("#3b82f6");
  const [color2, setColor2] = useState("#22c55e");
  const [color3, setColor3] = useState("#ec4899");

  const codeExample = `import { ColorPicker } from "gwan-design-system";
import { useState } from "react";

const Example = () => {
  const [color, setColor] = useState("#3b82f6");

  return (
    <>
      {/* Basic */}
      <ColorPicker value={color} onChange={setColor} label="Pick a colour" />

      {/* Custom presets */}
      <ColorPicker
        value={color}
        onChange={setColor}
        presets={["#ef4444", "#22c55e", "#3b82f6", "#8b5cf6"]}
      />

      {/* Disabled */}
      <ColorPicker value="#3b82f6" onChange={() => {}} disabled />
    </>
  );
};`;

  const renderPlayground = () => (
    <div className="flex flex-col gap-8 py-4">
      <div className="mx-auto">
        <ColorPicker value={color1} onChange={setColor1} label="Primary colour" />
      </div>
      <div
        className="w-full max-w-xs h-16 rounded-lg border border-border transition-colors duration-200 mx-auto"
        style={{ backgroundColor: color1 }}
      />
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-row flex-wrap gap-6 items-end justify-center">
        <ColorPicker value={color1} onChange={setColor1} label="Primary" />
        <ColorPicker value={color2} onChange={setColor2} label="Secondary" />
        <ColorPicker value={color3} onChange={setColor3} label="Accent" />
        <ColorPicker value="#3b82f6" onChange={() => {}} label="Disabled" disabled />
      </div>
      <div
        className="w-full h-16 rounded-lg border border-border transition-colors duration-200"
        style={{
          background: `linear-gradient(135deg, ${color1}, ${color2}, ${color3})`,
        }}
      />
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default ColorPickerTemplate;
