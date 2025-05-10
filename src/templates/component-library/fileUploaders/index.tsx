import FileUploader from "@/components/fileUploader";
import { useState } from "react";

const FileUploaders = () => {
  const [, setFile] = useState<File | null>(null);

  return (
    <div className="flex flex-col gap-4 items-center">
      <div className="w-[600px]">
        <FileUploader
          title="Upload your documents here"
          subTitle1="Please make sure the image is in better quality"
          subTitle2="Max file size 2 MB and we accept .jpg .jpeg .png files"
          handleAttachment={setFile}
        />
      </div>
    </div>
  );
};

export default FileUploaders;
