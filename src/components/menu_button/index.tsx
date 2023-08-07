import React, { FC } from "react";
import Link from "@/components/AppLink";

export const MenuBtn = ({ className = "", setOpenMenu, openMenu }) => {
  return (
    <div
      className={`mobileBtn cursor-pointer absolute ${className} transition-all duration-150 ease-in
             hover:opacity-60 focus-visible:opacity-60`}
      onClick={() => {
        setOpenMenu(!openMenu);
      }}
    >
      <svg
        width="56"
        height="40"
        viewBox="0 0 56 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M19 20H37"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 14H37"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M19 26H37"
          stroke="white"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <rect x="0.5" y="0.5" width="55" height="39" rx="19.5" stroke="white" />
      </svg>
    </div>
  );
};
