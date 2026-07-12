import { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { HiOutlineLockClosed } from "react-icons/hi";

export default function FormField({
  type,
  name,
  placeholder,
  label,
  Icon,
  errors,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);
  const hasError = Object.entries(errors).length > 0;

  const isPassword = type === "password";
  return (
    <>
      <label htmlFor={name} className="block font-medium text-sm">
        {label}
      </label>
      <div className={`relative flex items-center`}>
        <div className="absolute left-3 token-icon pointer-events-none z-10 text-brand">
          <Icon
            className={hasError && errors[name] ? "text-error" : "text-brand"}
            size={18}
          />
        </div>
        <input
          id={name}
          name={name}
          type={isPassword && showPassword ? "text" : type}
          value={props.value}
          placeholder={placeholder}
          className={`w-full h-12.5 px-9 border outline-none rounded-[10px] overflow-hidden ${hasError && errors[name] ? "border-error" : "border-brand"} focus:border-2 focus:border-brand active:border-brand`}
          onChange={props.onChange}
        />
        {isPassword && (
          <button
            onClick={() => setShowPassword(!showPassword)}
            type="button"
            className={`absolute right-3 text-brand ${hasError && errors[name]}`}
          >
            {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
          </button>
        )}
      </div>
      <span className="text-error text-[12px]">{errors[name]}</span>
    </>
  );
}
