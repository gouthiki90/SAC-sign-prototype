import React from "react";

/** input 속성 필수값 */
export interface Input
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label?: string;
  wrapperClasses?: string;
  inputClassName?: string;
  inputWapperClassName?: string;
  labelClassName?: string;
  required?: boolean;
}

const CustomInput: React.FC<Input> = ({
  label,
  className,
  type,
  name,
  wrapperClasses,
  inputWapperClassName,
  inputClassName,
  labelClassName,
  value,
  id,
  required = false,
  ...props
}) => {
  return (
    <div className={wrapperClasses}>
      {label && (
        <label className={labelClassName} htmlFor={id}>
          {label}
        </label>
      )}
      {required && (
        <span className="text-danger text-xs ml-2">
          {"( 필수로 입력해야 하는 값입니다. )"}
        </span>
      )}
      <div className={inputWapperClassName}>
        <input
          {...props}
          value={typeof value === "string" ? value.trim() : value}
          id={id}
          className={inputClassName}
          type={type}
          name={name}
        />
      </div>
    </div>
  );
};

export default CustomInput;
