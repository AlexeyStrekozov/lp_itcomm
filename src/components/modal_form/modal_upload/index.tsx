import React from "react";
import { useRouter } from "next/router";
import Lottie from "lottie-react";
import DataAnimation from "@/public/lottie-preloader.json";

export const ModalUpload = ({
  setOpenModal,
  openModal,
  openMenu,
  setOpenMenu,
  currentModal,
  setCurrentModal,
}) => {
  const router = useRouter();
  return (
    <div className={`lg:w-[500px] md:w-[400px] w-full`}>
      <div
        className={
          "relative lg:px-[72px] px-[28px] flex flex-col items-center justify-center"
        }
      >
        <div className={"w-[225px] h-[177px] mt-[200px]"}>
          <Lottie animationData={DataAnimation} />;
        </div>
      </div>
    </div>
  );
};
