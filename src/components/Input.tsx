import type { InputProps } from "../util/userTypes";

export default function Input({
  name,
  type,
  placeholder,
  value,
  children,
  onChange,
  ...rest
}: InputProps) {
  return (
    <>
      {children && (
        <label htmlFor={name} className="mb-1">
          {children}
        </label>
      )}
      <input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        className="border border-slate-700 mb-2 rounded pl-2 bg-slate-100"
        placeholder={placeholder}
        {...rest}
      />
    </>
  );
}
