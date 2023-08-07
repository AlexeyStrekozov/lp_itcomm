import React from "react";
import { useRouter } from "next/router";

import { getStaticPaths, makeStaticProps } from "@/lib/localize/getStatic";
import { useTranslation } from "next-i18next";
export const BackButton = ({ className = "" }) => {
  const { t } = useTranslation("common");

  const router = useRouter();

  return (
    <button
      className={`absolute cursor-pointer z-30 lg:left-[72px] left-[28px] md:top-[32px] top-[30px] ${className}`}
      onClick={() => router.push("/")}
    >
      <div
        className={
          "md:w-[120px] w-[110px] h-[50px] flex justify-center items-center  bg-[#D4D4D4] hover:opacity-60 transition-opacity ease-in-out duration-500 text-black rounded-[44px] text-[16px] leading-[22px] font-['PT-Root-UI'] font-regular"
        }
      >
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 18L9 12L15 6"
            stroke="#030303"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <p>{t("go_back")}</p>
      </div>
    </button>
  );
};
