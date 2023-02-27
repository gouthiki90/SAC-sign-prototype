import CustomInput from "@/core/ui/index/input";
import CustomSelectBox from "@/core/ui/index/selectBox";
import React from "react";

const LoginForm: React.FC = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center flex-1">
        <div className="flex flex-col justify-center items-center w-full max-w-[560px] min-[320px] pt-[72px] px-10 pb-20 bg-white rounded-lg backdrop-blur-[5px]">
          <div className="flex flex-col items-center">
            <p className="text-[32px] font-extrabold uppercase">
              {"Wellcome to SAC!"}
            </p>
            <p className="text-[32px] uppercase">{"회원가입"}</p>
          </div>
          <div className="mt-[72px] w-full">
            <form className="flex flex-col">
              <div className="mt-4">
                <CustomInput
                  id="phone"
                  label="휴대폰 번호"
                  name="phoneNubmer"
                  wrapperClasses="mt-4"
                  className="mt-1"
                  placeholder="010-****-****"
                  inputClassName="border border-gray-400 rounded-lg px-4 py-2 w-full"
                  key={1}
                  type="tel"
                  labelClassName="font-semibold"
                />
                <CustomSelectBox
                  id="sexsuallity"
                  label="성정체성(자유롭게 기입해주세요)"
                  name="sexsuallity"
                  wrapperClasses="mt-4"
                  className="mt-1"
                  labelClasses="font-semibold"
                  selecBoxClasses="border border-gray-400 rounded-lg px-4 py-2 w-full"
                  optionValue={[
                    "gay(게이)",
                    "pan-sexsuall(팬섹슈얼)",
                    "bi-sexsaull(바이섹슈얼)",
                  ]}
                />
                <CustomInput
                  id="blah"
                  label="example color input"
                  name="example_01"
                  wrapperClasses="mt-4"
                  className="mt-1"
                  inputClassName="border border-gray-400 rounded-lg px-4 py-2 w-full"
                  key={1}
                  type="color"
                  labelClassName="font-semibold"
                />
                <CustomInput
                  id="blah"
                  label="example date input"
                  name="example_02"
                  wrapperClasses="mt-4"
                  className="mt-1"
                  inputClassName="border border-gray-400 rounded-lg px-4 py-2 w-full"
                  key={1}
                  type="date"
                  labelClassName="font-semibold"
                />
                <CustomInput
                  id="blah"
                  label="example date local input"
                  name="example_03"
                  wrapperClasses="mt-4"
                  className="mt-1"
                  inputClassName="border border-gray-400 rounded-lg px-4 py-2 w-full"
                  key={1}
                  type="datetime-local"
                  labelClassName="font-semibold"
                />
                <CustomInput
                  id="blah"
                  label="example search input"
                  name="example_04"
                  wrapperClasses="mt-4"
                  className="mt-1"
                  inputClassName="border border-gray-400 rounded-lg px-4 py-2 w-full"
                  key={1}
                  type="search"
                  labelClassName="font-semibold"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
