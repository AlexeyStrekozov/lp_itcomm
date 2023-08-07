import React from "react";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export const Button = ({
  className = "",
  title = "",
  width = "",
  bg = "",
  text = "",
  onClick = undefined,
  type = "button" as "button" | "submit" | "reset",
  ...rest
}) => {
  const router = useRouter();
  const { t } = useTranslation("common");

  return (
    <button
      {...rest}
      type={type}
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick();
        }
      }}
      className={`px-[24px] py-[14px] ${bg} rounded-[36px] w-full ${width} ${text} text-[18px] 
            flex justify-center items-center gap-2 cursor-pointer
             disabled:opacity-70 disabled:cursor-not-allowed  transition-all duration-150 ease-in
             hover:opacity-60 focus-visible:opacity-60 z-50
             ${className} 
             `}
    >
      <span className={"select-none font-medium"}>{t(title)}</span>
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        className={"stroke-current"}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5 16L16.5 12M16.5 12L12.5 8M16.5 12H8.5M22.5 12C22.5 17.5228 18.0228 22 12.5 22C6.97715 22 2.5 17.5228 2.5 12C2.5 6.47715 6.97715 2 12.5 2C18.0228 2 22.5 6.47715 22.5 12Z"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};
