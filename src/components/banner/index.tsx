import React, { useRef } from "react";

import { LogoWhite, CityInfo, Button } from "@/components";
import { FadeInBox } from "@/components/FadeInBox";
import { Parallax } from "@/components/ScrollContainer";
import { isMobile } from "@/utils/helpers";
import { GoogleAppSvg } from "@/components/GoogleAppSvg";
import { AppleAppSvg } from "@/components/AppleAppSvg";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

type BannerProps = {
  index: number;
  title: string;
  cities?: string[];
  text: string;
  variant: string;
  imgUrl: string;
  id: string;
  openModal: boolean;
  video?: boolean;
  setOpenModal: (v: boolean) => void;
  activeCity?: string;
  setOpenMenu: (v: boolean) => void;
  subTitle: string;
  totalBanners: number;
  nextSlide?: () => void;
  address?: string;
};

export const Banner = ({
  index,
  title,
  text,
  cities,
  video,
  variant,
  imgUrl,
  id,
  openModal,
  setOpenModal,
  setOpenMenu,
  activeCity,
  subTitle,
  totalBanners,
  nextSlide,
  address
}: BannerProps) => {
  const router = useRouter();
  const { t } = useTranslation("main-page");
  const videoRef = useRef<HTMLVideoElement>(null);
  const renderVariant = (studioId) => {
    switch (variant) {
      case "btn":
        return (
          <Button
            title="signup"
            width="w-[175px]"
            bg="bg-white"
            text="text-[#030303]"
            stroke="black"
            onClick={() => {
              setOpenModal(!openModal);
              setOpenMenu(false);
              router.replace({
                hash: studioId,
              });
            }}
            children=""
          />
        );
      case "text":
        return (
          <p className="text-[18px] leading-[20px] font-['PT-Root-UI'] font-regular uppercase mb-4">
            {t("common:coming_soon")}
          </p>
        );
      case "block":
        return (
          <div className="px-[10px] py-[10px]  rounded-[18px] md:w-[388px] md:h-[68px] w-[160px] h-[110px] gap-[8px] text-black text-[18px] flex flex-col md:flex-row justify-between">
            <a
              className="cursor-pointer min-h-[40px] md:w-[180px] flex items-center hover:opacity-60 transition-opacity ease-in-out duration-500"
              href="#"
            >
              <AppleAppSvg />
            </a>
            <a
              className="cursor-pointer min-h-[40px] w-[140px] md:w-[180px] flex items-center hover:opacity-60 transition-opacity ease-in-out duration-500"
              href="#"
            >
              <GoogleAppSvg />
            </a>
          </div>
        );
      default:
        return null;
    }
  };
  const isOdd = index % 2 === 0;
  return (
    <div id={id} className={`w-full h-full`}>
      <div className={"w-full h-full inset-0 fixed"}>
        {video ? (
          <>
            <video
              ref={videoRef}
              loop={true}
              className={"object-cover w-full h-full "}
              muted={true}
              autoPlay={true}
              playsInline={true}
              src={imgUrl}
            />
          </>
        ) : (
          <div
            className={`h-full w-full scale-100`}
            style={{
              backgroundImage: !video ? `url('${imgUrl}')` : undefined,
              backgroundRepeat: "no-repeat",
              backgroundSize: id === "it_comm" ? "contain" : "cover",
              backgroundPosition: id === "it_comm" ? "right" : "center",
              backgroundAttachment: "fixed",
            }}
          ></div>
        )}
      </div>
      <div
        className={`h-full w-full
                    mobile__banner 
                    transition-all duration-300 
                    flex justify-start items-end 
                    before:absolute before:top-0 before:left-0
                    before:w-full before:h-full 
                    before:bg-gradient-to-b before:from-black/60 
                    before:to-black/60
                `}
      >
        <div
          className={
            "hidden md:block w-[300px] lg:pl-[56px] pl-[28px] relative h-screen mr-[50px]"
          }
        ></div>

        <div
          className={`relative h-full w-full flex ${index === 0 ? "md:justify-between" : "md:justify-end"
            } justify-end  md:items-start flex-col lg:ml-[135px] md:ml-[135px] ml-0`}
        >
          <div className={"mt-6 md:block hidden"}>
            {id === "it_comm" && (
              <FadeInBox>
                <LogoWhite />
              </FadeInBox>
            )}
          </div>
          <Parallax className={`${cities ? "pb-10 md:pb-16" : "pb-10 md:pb-16"}`} offset={isMobile() ? 10 : (index + 1) * 10}>
            <div className={"md:w-full w-full flex flex-col px-0 gap-[15px] md:gap-[20px]"} >
              <FadeInBox>
                <p className={"text-p2 font-['Wremena'] font-bold"}>
                  {subTitle}
                </p>
              </FadeInBox>

              <div className={""}>
                <FadeInBox>
                  <p className={"text-[42px]"}>
                    {id === "it_comm" ? (
                      <></>
                    ) : (
                      <>{title}</>
                    )}
                  </p>
                  {id === "it_comm" ? (
                    <>
                      <div className={"text-white text-[45px]"} dangerouslySetInnerHTML={{ __html: text }} />
                      <div className={"text-white flex items-center text-[20px] my-[10px]"}>
                        <img src="/images/main/point.png" className="mr-[8px]" />
                        <p className={"font-extralight "}>{t(address)}</p>
                      </div>
                    </>
                  ) : (
                    <></>
                  )}
                </FadeInBox>
              </div>
              <CityInfo active={activeCity} options={cities} />
              <div className={" max-w-[520px]"}>
                <FadeInBox>
                  <p className={"text-p4 font-['PT-Root-UI'] font-regular"}>
                    {id === "it_comm" ? <></> : <>{t(text)}</>}
                  </p>
                </FadeInBox>
              </div>
              {index === 0 && totalBanners > 1 ? (
                <button className="next-arrow" onClick={nextSlide}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 18L15 12L9 6"
                      stroke="#040404"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              ) : (
                <>
                  {id === "it_comm" ? (
                    <a href="#Main" className=" next-arrow">
                      <svg className={"mx-[49px] my-[15px]"} width="40" height="11" viewBox="0 0 40 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M39 1L19.855 10L0.999999 1" stroke="white" />
                      </svg>
                    </a>
                  ) : (
                    <>{renderVariant(id)}</>
                  )}
                </>
              )}
            </div>
          </Parallax>
        </div>
      </div>
    </div>
  );
};
