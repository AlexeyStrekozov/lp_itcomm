import React, { useState, useEffect } from "react";

import { useGlobalAppContext } from "@/providers/app-context";
import CustomSelect from "../custom_select";
import { optionsCity } from "@/enums";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import { CityService } from "@/services/CityService";
import { useTranslation } from "next-i18next";

export const MainPopUp = ({ onApply }) => {
  const { appState: AppState, updateState: setAppState } =
    useGlobalAppContext();
  const [visible, setVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(AppState.currentCity);

  const handleClose = () => {
    setVisible(false);
  };

  const handleCityChange = (selectedCity: string) => {
    setInputValue(selectedCity);
  };

  const handleApply = () => {
    setAppState({
      currentCity: inputValue,
    });

    CityService.setSelectedCity(inputValue);

    onApply(inputValue);
    setVisible(false);
  };

  useEffect(() => {
    const city = CityService.getSelectedCity();
    setVisible(!city);
  }, []);

  const { t } = useTranslation("form-page");

  return (
    <div
      className={`
                lg:w-[367px]  md:w-[305px] 
                transition-all duration-300 
                w-screen h-[201px] bg-white p-[24px] 
                fixed top-0 left-0 z-50 mainPopupMobile
                ${!visible ? "hidden" : "block"}`}
    >
      <button
        type={"button"}
        className="close absolute top-[8px] right-[8px] cursor-pointer"
        onClick={handleClose}
      >
        <svg
          className={
            "transition-transform transform-gpu  hover:opacity-60 focus-visible:opacity-60"
          }
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 6L18 18M18 6L6 18"
            stroke="black"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <p className="text-black font-['PT-Root-UI'] font-medium text-[24px] leading-[28px] mb-[16px]">
        Где вы находитесь?
      </p>
      <div className="flex justify-between w-full h-12 mb-[16px] border-[#D4D3D2] border-[1px] rounded-[8px] px-2 py-2">
        <div className={"flex justify-start w-full items-center"}>
          <div className={"mr-3 cursor-pointer"}>
            <svg
              className={"w-[24px] h-[24px]"}
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 256 256"
              enableBackground="new 0 0 256 256"
            >
              <g>
                <g>
                  <path
                    fill="#000000"
                    d="M128,10c-48.8,0-88.5,39.8-88.5,88.7c0,73.2,82.6,143.5,86.1,146.5c0.7,0.6,1.5,0.9,2.4,0.9s1.7-0.3,2.3-0.8c3.5-2.9,86.2-72,86.2-146.5C216.5,49.8,176.8,10,128,10z M128,237.4c-13.6-12.1-81.2-75.7-81.2-138.8c0-44.8,36.4-81.3,81.1-81.3s81.1,36.5,81.1,81.3C209.1,162.8,141.6,225.5,128,237.4z"
                  />
                  <path
                    fill="#000000"
                    d="M128,54.3c-24.4,0-44.3,19.8-44.3,44.3c0,24.4,19.8,44.3,44.3,44.3s44.3-19.8,44.3-44.3C172.3,74.1,152.4,54.3,128,54.3z M128,135.4c-20.3,0-36.9-16.5-36.9-36.9c0-20.3,16.5-36.9,36.9-36.9s36.9,16.5,36.9,36.9C164.9,118.8,148.3,135.4,128,135.4z"
                  />
                </g>
              </g>
            </svg>
          </div>
          <CustomSelect
            className={"w-full"}
            options={optionsCity}
            onChange={handleCityChange}
            showArrow={false}
            defaultValue={AppState.currentCity}
          />
          <div>
            <div className="w-[1px] bg-[#D4D3D2] h-[30px] "></div>
          </div>
        </div>
        <LocaleSwitcher />
      </div>
      <button
        className="px-[24px] py-[14px] bg-black rounded-[36px] w-full max-w-[500px] text-white text-[18px] flex justify-center items-center gap-2 cursor-pointer transition-all duration-150 ease-in hover:opacity-60"
        onClick={handleApply}
      >
        Применить
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.5 16L16.5 12M16.5 12L12.5 8M16.5 12H8.5M22.5 12C22.5 17.5228 18.0228 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12C2.5 6.47715 6.97715 2 12.5 2C18.0228 2 22.5 6.47715 22.5 12Z"
            stroke="white"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
};
