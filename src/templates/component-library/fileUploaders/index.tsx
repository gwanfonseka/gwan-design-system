import FileUploader from "@/components/fileUploader";
import CodeSnippet from "@/components/codeSnippet";
import Playground from "@/components/playground";
import Input from "@/components/input";
import { useState, ChangeEvent } from "react";

const codeExample = `import { FileUploader } from "gwan-design-system";

const Example = () => {
  const [file, setFile] = useState<File | null>(null);

  return (
    <FileUploader
      title="Upload your documents here"
      subTitle1="Please make sure the image is in better quality"
      subTitle2="Max file size 2 MB and we accept .jpg .jpeg .png files"
      handleAttachment={(file) => setFile(file)}
    />
  );
};`;

const FileUploaders = () => {
  const [, setFile] = useState<File | null>(null);
  const [title, setTitle] = useState("Upload your documents here");
  const [subTitle1, setSubTitle1] = useState("Please make sure the image is in better quality");
  const [subTitle2, setSubTitle2] = useState("Max file size 2 MB and we accept .jpg .jpeg .png files");

  const renderPlayground = () => (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-4 items-center">
        <div className="w-full max-w-150">
          <FileUploader
            title={title}
            subTitle1={subTitle1}
            subTitle2={subTitle2}
            handleAttachment={setFile}
          />
        </div>
      </div>

      <div className="flex flex-col gap-4 items-center">
        <div className="flex flex-row justify-center gap-4 flex-wrap">
          <Input
            label="Title"
            value={title}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
            className="w-72"
          />
          <Input
            label="Subtitle 1"
            value={subTitle1}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSubTitle1(e.target.value)}
            className="w-72"
          />
          <Input
            label="Subtitle 2"
            value={subTitle2}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setSubTitle2(e.target.value)}
            className="w-72"
          />
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
