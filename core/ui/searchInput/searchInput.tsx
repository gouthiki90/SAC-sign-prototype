import React from "react";

/** input 속성 필수값 */
export interface Input
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {}

const SearchInput: React.FC<Input> = ({
  className,
  type,
  name,
  value,
  id,
  ...props
}) => {
  return (
    <>
      <div className="flex flex-col justify-center">
        <div className="flex flex-col justify-center">
          <input
            id={id}
            value={value}
            name={name}
            type="text"
            {...props}
            className="rounded focus:outline-none border-0 bg-gray-300 px-4 py-2 w-1/4 h-9"
          />
        </div>
      </div>
    </>
  );
};

export default SearchInput;
