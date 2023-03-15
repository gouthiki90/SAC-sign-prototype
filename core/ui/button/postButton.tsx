import React from "react";
import Image from "next/image";

export interface IButton
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const PostButton: React.FC<IButton> = ({}) => {
  return (
    <>
      <div className="m-8">
        <button className="bg-purple-500 font-sans text-slate-50 rounded-full w-80 px-3 py-2 cursor-pointer hover:bg-purple-600">
          <div className="flex justify-center justify-items-center">
            <div className="flex justify-center justify-items-center">
              <Image
                width={30}
                height={30}
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAeklEQVR4nO3WwQmFMBAG4S1Psf8GEvsYEZEHubxLdBOZr4Isc/gTIUmSpO6ADdiBCqwxG66H30rMhkbMBg9IZoFsFsg2bAF+C9tbfWWxm4XtrXjAP2fmhyoUYIlRtK+L2eABySyQzQLZvlCgvvpFeHCxx1pYSZKkDzkAyLy17RfLVLQAAAAASUVORK5CYII="
                alt={""}
              />
            </div>
            <div className="mx-[4px] my-1">
              <p className="font-medium">포스트 발행</p>
            </div>
          </div>
        </button>
      </div>
    </>
  );
};

export default PostButton;
