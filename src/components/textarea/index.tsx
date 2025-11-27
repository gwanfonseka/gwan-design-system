import { FC, useState, ChangeEvent, useEffect } from "react";

export interface ITextArea {
    label?: string;
    value?: string;
    onChange: (value: string) => void;
    placeholder?: string;
    className?: string;
    disabled?: boolean;
    rows?: number;
    maxLength?: number;
    showCharacterCount?: boolean;
    required?: boolean;
    error?: string;
    helperText?: string;
    resize?: "none" | "both" | "horizontal" | "vertical";
}

const TextArea: FC<ITextArea> = ({
    label,
    value = "",
    onChange,
    placeholder = "",
    className = "",
    disabled = false,
    rows = 3,
    maxLength,
    showCharacterCount = false,
    required = false,
    error,
    helperText,
    resize = "vertical",
}) => {
    const [internalValue, setInternalValue] = useState(value)
    const [isFocused, setIsFocused] = useState(false)

    useEffect(() => {
        setInternalValue(value)
    }, [value])

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value

        if (maxLength && newValue.length > maxLength) {
            return
        }

        setInternalValue(newValue)
        onChange(newValue)
    }

    const resizeClass = {
        none: "resize-none",
        both: "resize",
        horizontal: "resize-x",
        vertical: "resize-y",
    }[resize];

    const borderColor = error
        ? "border-red-500 focus:border-red-600"
        : isFocused
            ? "border-primary-400 focus:border-primary-500"
            : "border-neutral-300";

    return (
        <div className={`flex flex-col gap-1 ${className}`}>
            {label && (
                <label className="text-sm font-medium text-black">
                    {label}
                    {required && <span className="text-red-500 ml-1">*</span>}
                </label>
            )}
            <div className="relative">
                <textarea
                    value={internalValue}
                    onChange={handleChange}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    placeholder={placeholder}
                    disabled={disabled}
                    rows={rows}
                    maxLength={maxLength}
                    required={required}
                    className={`
            w-full px-3 py-2 rounded-md border-2 transition-all
            text-black placeholder:text-neutral-400
            focus:outline-none focus:ring-2 focus:ring-primary-200
            ${borderColor}
            ${resizeClass}
            ${disabled ? "bg-neutral-100 cursor-not-allowed opacity-50" : "bg-white"}
            ${error ? "focus:ring-red-200" : ""}
          `}
                />
                {showCharacterCount && maxLength && (
                    <div className="absolute bottom-2 right-2 text-xs text-neutral-500 bg-white px-1 rounded">
                        {internalValue.length}/{maxLength}
                    </div>
                )}
            </div>
            {(error || helperText) && (
                <div className={`text-xs ${error ? "text-red-500" : "text-neutral-500"}`}>
                    {error || helperText}
                </div>
            )}
            {showCharacterCount && !maxLength && (
                <div className="text-xs text-neutral-500">
                    {internalValue.length} characters
                </div>
            )}
        </div>
    )
}
export default TextArea;