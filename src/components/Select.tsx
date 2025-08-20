export const Select = ({
  options,
  label,
  value,
  onChange,
  hasError = { status: false, message: "" },
  required = false,
  disabled = false,
  ...rest
}: React.ComponentProps<"select"> & {
  options: { value: string; label: string }[];
  label?: string;
  hasError?: { status: boolean; message: string };
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  required?: boolean;
  disabled?: boolean;
}) => {
  return (
    <div className="flex flex-col items-start w-full">
      <label className="font-bold text-[0.875rem]">
        {label && label}
        <small className="text-red-base text-[0.8rem]">{required && "*"}</small>
      </label>

      <div
        className={`flex items-center gap-2 overflow-hidden px-3 py-2 rounded w-full transition-colors 
          ${hasError?.status ? "border-red-base ring-2 ring-red-300" : "border border-gray-300 focus-within:border-primary focus-within:ring-2 focus-within:ring-primary"}
          ${disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed" : ""}
        `}
      >
        <select
          className={`flex-1 min-w-0 outline-none text-[1rem] bg-transparent
            ${disabled ? "bg-gray-100 text-gray-400 cursor-not-allowed" : ""}
          `}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...rest}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {hasError?.status && (
        <span className="text-red-base text-[0.8rem] mt-1">{hasError.message}</span>
      )}
    </div>
  );
}