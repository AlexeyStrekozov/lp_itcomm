import React from "react";

import { Button } from "@/components";
import { useTranslation } from "next-i18next";

import CustomSelect from "../custom_select";
import { useGlobalAppContext } from "@/providers/app-context";
import { optionsCity } from "@/enums";
import { LocaleSwitcher } from "@/components/LocaleSwitcher";
import Link from "@/components/AppLink";
import { CityService } from "@/services/CityService";

export const Menu = ({ setOpenMenu, openMenu, openModal, setOpenModal }) => {
  const { appState: AppState, updateState: setAppState } =
    useGlobalAppContext();

  const handleCityChange = (selectedCity: string) => {
    setAppState({ currentCity: selectedCity });
    CityService.setSelectedCity(selectedCity);
  };

  const { t } = useTranslation("common");

  return (
    <div
      className={`fixed transform ${
        openMenu ? "translate-x-0" : "-translate-x-[200%]"
      } top-0 h-screen w-full z-40`}
    >
      <div
        className={`absolute ${
          openMenu
            ? "opacity-100 translate-x-0"
            : "opacity-0 -translate-x-[200%]"
        }
                 inset-0 z-40 lg:w-[367px] md:w-[305px] 
                w-screen h-full bg-white px-6 pt-6 
                transition-all duration-500 
                cubic-bezier(0.175, 0.885, 0.32, 1.275)
                `}
      >
        <div className={"flex justify-between w-full mb-8"}>
          <div>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M38.898 36.1365L20.449 4.13647L15.3475 12.985L28.6951 36.1365H38.898Z"
                fill="black"
              />
              <path
                d="M18.5294 29.9498L7.59658 32.6165V26.96L2 36.1365L18.5294 29.9498Z"
                fill="black"
              />
            </svg>
          </div>
          <button
            type={"button"}
            className={"cursor-pointer"}
            onClick={() => {
              setOpenMenu(!openMenu);
            }}
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
                stroke="#030303"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
        <div
          className={
            "flex justify-between w-full h-12 mb-8 border-[#D4D3D2] border-[1px] rounded-[8px] px-2 py-2 hover:border-[#000000] transition-all ease-in-out duration-500 relative"
          }
        >
          <div className={"flex justify-start w-full items-center"}>
            <div className={""}>
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
              <div className="w-[1px] bg-[#D4D3D2] h-[30px]  "></div>
            </div>
          </div>
          <LocaleSwitcher />
        </div>
        <Button
          title="signup"
          width=""
          bg="bg-black"
          text="text-white"
          stroke="white"
          className="mb-8"
          onClick={() => {
            setOpenModal(!openModal);
            setOpenMenu(!openMenu);
          }}
          children=""
        />
        <div>
          <ul
            className={
              "text-black font-['PT-Root-UI'] font-medium text-[24px] leading-[28px]"
            }
          >
            <Link href="/about/">
              <li
                className={
                  "mb-8 transition-all duration-150 ease-in hover:opacity-60 focus-visible:opacity-60 cursor-pointer"
                }
              >
                {t("about_academy")}
              </li>
            </Link>
            <Link href="/offer/">
              <li
                className={
                  "mb-8 transition-all duration-150 ease-in hover:opacity-60 focus-visible:opacity-60 cursor-pointer"
                }
              >
                {t("offer")}
              </li>
            </Link>
            <Link href="/agreement/">
              <li
                className={
                  "mb-8 transition-all duration-150 ease-in hover:opacity-60 focus-visible:opacity-60 cursor-pointer"
                }
              >
                {t("user_agreement")}
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <div
        className={` transition-opacity duration-150
                    absolute transform z-20 top-0 left-0 ${
                      openMenu
                        ? "translate-x-[0%] opacity-100"
                        : "-translate-x-[1000%] opacity-0"
                    }
                    h-screen w-screen bg-black/[.3]  
                `}
        onClick={() => {
          setOpenMenu(!openMenu);
        }}
      ></div>
    </div>
  );
};
