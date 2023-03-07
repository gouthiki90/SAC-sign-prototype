import React from "react";

export interface IButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const CategoryButton: React.FC<IButton> = ({}) => {
  return (
    <>
      <div className="m-[5px]">
        <button className="bg-slate-400 font-sans text-slate-50 rounded-full px-3 py-1 cursor-pointer hover:bg-slate-600">
          채식
        </button>
      </div>
    </>
  );
};

export default CategoryButton;
