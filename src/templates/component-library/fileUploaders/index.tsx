"use client";

import FileUploader from "@/components/fileUploader";
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import Input from "@/components/input";
import Checkbox from "@/components/checkbox";
import Switch from "@/components/switch";
import { useState, ChangeEvent } from "react";

const codeExample = `import { FileUploader } from "gwan-design-system";

// ── Basic (single file, backward-compatible) ──────────────────
const BasicExample = () => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <FileUploader
      title="Upload your document"
      subTitle1="or click to browse"
      subTitle2="Accepts .jpg .jpeg .png — max 2 MB"
      handleAttachment={(file) => setFile(file)}
      accept=".jpg,.jpeg,.png"
      maxSize={2 * 1024 * 1024}
    />
  );
};

// ── Multi-file with size limit ────────────────────────────────
const MultiFileExample = () => {
  const [files, setFiles] = useState<File[]>([]);

  return (
    <FileUploader
      title="Drag & drop files here"
      subTitle1="or click to browse"
      handleAttachment={(file) => console.log("latest:", file.name)}
      onFilesChange={(all) => setFiles(all)}
      accept=".pdf,.docx,.jpg,.png"
      multiple
      maxFiles={5}
      maxSize={5 * 1024 * 1024}
    />
  );
};`;

const FileUploaders = () => {
  const [title, setTitle]         = useState("Drag & drop files here");
  const [subTitle1, setSubTitle1] = useState("or click to browse");
  const [subTitle2, setSubTitle2] = useState("");
  const [multiple, setMultiple]   = useState(false);
  const [disabled, setDisabled]   = useState(false);
  const [sizeLimit, setSizeLimit] = useState(false);

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      {/* Preview */}
      <div className="flex flex-col items-center">
        <div className="w-full max-w-lg">
          <FileUploader
            title={title}
            subTitle1={subTitle1}
            subTitle2={subTitle2 || undefined}
            handleAttachment={() => {}}
            accept=".jpg,.jpeg,.png,.pdf,.docx"
            multiple={multiple}
            disabled={disabled}
            maxSize={sizeLimit ? 1 * 1024 * 1024 : undefined}
            maxFiles={multiple ? 4 : undefined}
          />
        </div>
      </div>

      {/* Controls */}
      <div className="flex flex-col gap-6 items-center">
        <div className="flex flex-row justify-center gap-4 flex-wrap">
          <Input
            label="Title"
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            className="w-full sm:w-64"
          />
          <Input
            label="Subtitle 1"
            value={subTitle1}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSubTitle1(e.target.value)}
            className="w-full sm:w-64"
          />
          <Input
            label="Subtitle 2"
            value={subTitle2}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSubTitle2(e.target.value)}
            className="w-full sm:w-64"
          />
        </div>
        <div className="flex flex-row flex-wrap justify-center gap-6">
          <Switch label="Multiple files" checked={multiple} onChange={setMultiple} />
          <Checkbox label="1 MB size limit" checked={sizeLimit} onChange={setSizeLimit} />
          <Checkbox label="Disabled" checked={disabled} onChange={setDisabled} />
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-8">
      <Playground template={renderPlayground()} />
      <CodeSnippet code={codeExample} />
    </div>
  );
};

export default FileUploaders;
