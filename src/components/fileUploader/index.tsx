import { FC, useRef } from "react";
import { UploadSVG } from "../icons";

export interface IFileUploader {
  title: string;
  subTitle1?: string;
  subTitle2?: string;
  handleAttachment: (file: File) => void;
  accept?: string;
  className?: string;
}

const FileUploader: FC<IFileUploader> = ({
  title,
  subTitle1 = "",
  subTitle2 = "",
  handleAttachment,
  accept = ".jpg,.jpeg,.png",
  className = "",
}: IFileUploader) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files && files.length > 0) {
      handleAttachment(files[0]);
    }
  };

  return (
    <div
      className={`flex flex-row gap-4 items-start border border-dashed border-border p-4 rounded-lg ${className}`}
    >
      <div
        className="bg-primary-500 hover:bg-primary-600 text-primary-default-fg px-6 py-8 rounded-lg cursor-pointer"
        onClick={() => fileInputRef.current?.click()}
      >
        <div className="size-10">
          <UploadSVG />
        </div>
      </div>
      <input
        type="file"
        ref={fileInputRef}
        accept={accept}
        className="hidden"
        onChange={handleFileUpload}
      />
      <div className="flex-1 flex flex-col">
        <p className="text-lg text-foreground">{title}</p>
        <p className="text-sm text-muted-fg">{subTitle1}</p>
        <p className="text-sm text-muted-fg">{subTitle2}</p>
      </div>
    </div>
  );
};

export default FileUploader;
