import { FC, ReactNode } from "react";
import React from "react";

export const Container: FC<{ className?: string; children: ReactNode }> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={` lg:max-w-[1920px] mx-auto
             ${className}`}
    >
      {children}
    </div>
  );
};
