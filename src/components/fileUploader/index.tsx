"use client";

import { FC, useRef, useState, DragEvent, ChangeEvent } from "react";
import { UploadSVG, CrossSVG } from "../icons";

export interface IFileUploader {
  // ── Existing props (unchanged) ─────────────────────────────────
  title?: string;
  subTitle1?: string;
  subTitle2?: string;
  handleAttachment: (file: File) => void;
  accept?: string;
  className?: string;
  // ── New optional props ─────────────────────────────────────────
  multiple?: boolean;
  onFilesChange?: (files: File[]) => void;
  maxSize?: number;        // bytes — e.g. 2 * 1024 * 1024 for 2 MB
  maxFiles?: number;
  disabled?: boolean;
}

const formatSize = (bytes: number): string => {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
};

const getFileType = (name: string): { label: string; bg: string; text: string } => {
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  if (["jpg", "jpeg", "png", "gif", "webp", "svg", "avif"].includes(ext))
    return { label: "IMG",  bg: "bg-accent/15",   text: "text-accent" };
  if (ext === "pdf")
    return { label: "PDF",  bg: "bg-danger/15",   text: "text-danger" };
  if (["doc", "docx"].includes(ext))
    return { label: "DOC",  bg: "bg-primary-default/15", text: "text-primary-default" };
  if (["xls", "xlsx", "csv"].includes(ext))
    return { label: "XLS",  bg: "bg-success/15",  text: "text-success" };
  if (["zip", "rar", "gz", "tar"].includes(ext))
    return { label: "ZIP",  bg: "bg-warning/15",  text: "text-warning" };
  if (["mp4", "mov", "avi", "mkv"].includes(ext))
    return { label: "VID",  bg: "bg-accent/15",   text: "text-accent" };
  if (["mp3", "wav", "flac", "aac"].includes(ext))
    return { label: "AUD",  bg: "bg-success/15",  text: "text-success" };
  return { label: ext.toUpperCase().slice(0, 3) || "FILE", bg: "bg-surface-raised", text: "text-muted-fg" };
};

const FileUploader: FC<IFileUploader> = ({
  title      = "Drag & drop files here",
  subTitle1  = "or click to browse",
  subTitle2  = "",
  handleAttachment,
  accept     = ".jpg,.jpeg,.png",
  className  = "",
  multiple   = false,
  onFilesChange,
  maxSize,
  maxFiles,
  disabled   = false,
}) => {
  const inputRef           = useRef<HTMLInputElement>(null);
  const [files, setFiles]  = useState<File[]>([]);
  const [dragging, setDragging] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const addFiles = (incoming: FileList | File[]) => {
    if (disabled) return;
    const list  = Array.from(incoming);
    const errs: string[] = [];
    const valid: File[]  = [];

    list.forEach((f) => {
      if (maxSize && f.size > maxSize) {
        errs.push(`"${f.name}" exceeds the ${formatSize(maxSize)} limit`);
        return;
      }
      valid.push(f);
    });

    setErrors(errs);
    if (!valid.length) return;

    setFiles((prev) => {
      const next = multiple ? [...prev, ...valid] : [valid[valid.length - 1]];
      const capped = maxFiles ? next.slice(0, maxFiles) : next;
      onFilesChange?.(capped);
      handleAttachment(valid[0]);
      return capped;
    });
  };

  const removeFile = (index: number) => {
    setFiles((prev) => {
      const next = prev.filter((_, i) => i !== index);
      onFilesChange?.(next);
      return next;
    });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) addFiles(e.target.files);
    e.target.value = "";
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragging(false);
    if (e.dataTransfer.files) addFiles(e.dataTransfer.files);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (!disabled) setDragging(true);
  };

  const handleDragLeave = () => setDragging(false);

  const atLimit = !!maxFiles && files.length >= maxFiles;
  const canAdd  = !disabled && !atLimit;

  return (
    <div className={`flex flex-col gap-3 ${className}`}>
      {/* Drop zone */}
      <div
        role="button"
        tabIndex={canAdd ? 0 : -1}
        aria-label="File upload area"
        onClick={() => canAdd && inputRef.current?.click()}
        onKeyDown={(e) => e.key === "Enter" && canAdd && inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`relative flex flex-col items-center justify-center gap-3 rounded-xl border-2 border-dashed px-6 py-10 text-center transition-colors duration-200 ${
          disabled
            ? "border-border bg-surface-raised opacity-50 cursor-not-allowed"
            : dragging
            ? "border-primary-default bg-primary-default/5 cursor-copy"
            : canAdd
            ? "border-border hover:border-primary-default hover:bg-primary-default/5 cursor-pointer"
            : "border-border bg-surface-raised cursor-not-allowed opacity-60"
        }`}
      >
        <div className={`size-10 transition-colors duration-200 ${dragging ? "text-primary-default" : "text-muted-fg"}`}>
          <UploadSVG />
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-sm font-semibold text-foreground">{title}</p>
          {subTitle1 && <p className="text-xs text-muted-fg">{subTitle1}</p>}
          {subTitle2 && <p className="text-xs text-muted-fg">{subTitle2}</p>}
        </div>
        {accept && (
          <p className="text-[11px] text-muted-fg/70">
            {accept.replaceAll(",", " · ")}
            {maxSize && ` · Max ${formatSize(maxSize)}`}
            {maxFiles && multiple && ` · Up to ${maxFiles} files`}
          </p>
        )}
        <input
          ref={inputRef}
          type="file"
          accept={accept}
          multiple={multiple}
          className="hidden"
          onChange={handleChange}
          disabled={disabled}
        />
      </div>

      {/* Validation errors */}
      {errors.length > 0 && (
        <div className="flex flex-col gap-1">
          {errors.map((err, i) => (
            <p key={i} role="alert" className="text-xs text-danger">{err}</p>
          ))}
        </div>
      )}

      {/* File list */}
      {files.length > 0 && (
        <ul className="flex flex-col gap-2">
          {files.map((file, i) => {
            const { label, bg, text } = getFileType(file.name);
            return (
              <li
                key={`${file.name}-${i}`}
                className="flex items-center gap-3 rounded-lg border border-border bg-surface px-3 py-2.5"
              >
                {/* Type badge */}
                <span className={`shrink-0 ${bg} ${text} text-[10px] font-bold rounded px-1.5 py-0.5 tracking-wide`}>
                  {label}
                </span>

                {/* Name + size */}
                <span className="flex-1 min-w-0">
                  <span className="block text-sm font-medium text-foreground truncate">{file.name}</span>
                  <span className="block text-xs text-muted-fg">{formatSize(file.size)}</span>
                </span>

                {/* Remove */}
                {!disabled && (
                  <button
                    type="button"
                    aria-label={`Remove ${file.name}`}
                    onClick={() => removeFile(i)}
                    className="shrink-0 size-4 text-muted-fg hover:text-danger transition-colors duration-150"
                  >
                    <CrossSVG />
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default FileUploader;
