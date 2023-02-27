import React from "react";

/** input 속성 필수값 */
export interface SelectBox
  extends React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLSelectElement>,
    HTMLSelectElement
  > {
  name?: string;
  value?: string;
  label?: string;
  labelClasses?: string;
  selecBoxClasses?: string;
  optionClasses?: string;
  wrapperClasses?: string;
  optionValue?: Array<string>;
}

const CustomSelectBox: React.FC<SelectBox> = ({
  label,
  className,
  name,
  wrapperClasses,
  labelClasses,
  optionClasses,
  selecBoxClasses,
  optionValue,
  value,
  id,
  ...props
}) => {
  return (
    <div className={wrapperClasses}>
      {label && (
        <label className={labelClasses} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={wrapperClasses}>
        <select
          {...props}
          value={typeof value === "string" ? value.trim() : value}
          id={id}
          className={selecBoxClasses}
          name={name}
        >
          {optionValue?.map((value, index) => {
            return (
              <option key={index} className={optionClasses}>
                {value}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default CustomSelectBox;
