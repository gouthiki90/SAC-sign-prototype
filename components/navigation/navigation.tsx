import SearchInput from "@/core/ui/searchInput/searchInput";
import React from "react";

export const Navigation: React.FC = () => {
  return (
    <>
      <header className="bg-gray-900 h-screen w-1/3 flex">
        <nav className="flex w-full min-w-xs max-w-screen-base mx-auto px-4">
          <div className="w-full flex flex-col">
            <div className="flex justify-center">
              <SearchInput />
              <div className="md:block">
                <ul className="flex flex-col justify-items-center">
                  <li className="bg-inherit text-slate-50 font-semibold font-sans border-0 rounded-lg">
                    홈 피드
                  </li>
                  <li className="bg-inherit text-slate-50 font-semibold font-sans border-0 rounded-lg">
                    오픈 채팅
                  </li>
                  <li className="bg-inherit text-slate-50 font-semibold font-sans border-0 rounded-lg">
                    행사
                  </li>
                  <li className="bg-inherit text-slate-50 font-semibold font-sans border-0 rounded-lg">
                    내 피드
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
