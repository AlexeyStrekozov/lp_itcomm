import React from "react";
import { Button } from "@/components";
import { useTranslation } from "next-i18next";

export const ModalSuccess = ({ onOk }) => {
  const { t } = useTranslation("common");

  return (
    <div className={`lg:w-[500px] md:w-[400px] w-full`}>
      <div
        className={
          "relative lg:px-[72px] px-[28px] flex flex-col items-center justify-center"
        }
      >
        <div
          className={"bg-[url('/images/success.jpg')] h-[96px] w-[96px] mb-6"}
        ></div>
        <div className={"flex flex-col items-center mb-6"}>
          <p
            className={
              "text-[#030303] text-[31px] leading-[31px] font-medium font-['PT-Root-UI'] mb-6 text-center"
            }
          >
            {t("booking_confirmed")}
          </p>
          <p
            className={
              "text-[#030303] text-[18px] leading-[26px] md:w-[490px] w-full text-center font-regular font-['PT-Root-UI']"
            }
          >
            {t("awaiting_manager_contact")}
          </p>
        </div>
        <Button
          title="go_to_main"
          width="sm:w-[200px] w-full"
          bg="bg-black"
          text="text-white"
          stroke="white"
          className="mb-8"
          onClick={onOk}
        />
      </div>
    </div>
  );
};
