import React from "react";
import Image from "next/image";

export interface IButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const PostButton: React.FC<IButton> = ({}) => {
  return (
    <>
      <div className="m-8">
        <button className="bg-sky-500 font-sans text-slate-50 rounded-full w-80 px-3 py-2 cursor-pointer hover:bg-sky-700">
          <div className="flex justify-center">
            <div className="m-[3px]">
              <p className="font-medium">포스트 발행</p>
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default PostButton;
