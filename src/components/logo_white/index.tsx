import { FC } from "react";
import React from "react";
import Link from "@/components/AppLink";

export const LogoWhite: FC<{ className?: string }> = ({ className = "" }) => {
  return (
    <Link href={"/"} legacyBehavior>
      <button
        type={"button"}
        className={`md:w-[266px] md:h-[56px] w-[78px] h-[22px] ${className} flex items-center`}
      >
        <img src="/images/main/it_comm.png" className={"mr-[36px]"} />
        <img src="/images/main/planet.png" />
      </button>
    </Link>
  );
};
