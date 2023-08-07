import React, { useState, useCallback, useEffect } from "react";
import {
  LogoWhite,
  ModalForm,
  Menu,
  MenuBtn,
  MsgBtn,
  FullLogo,
  BackButton,
} from "@/components";
import { useRouter } from "next/router";
import { getStaticPaths, makeStaticProps } from "@/lib/localize/getStatic";
import { useTranslation } from "next-i18next";

const Agreement: React.FC<{ title?: string }> = () => {
  const { t } = useTranslation("agreement-page");

  const router = useRouter();
  const [openMenu, setOpenMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      setOpenModal(false);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);
  return (
    <div className={"min-h-screen h-screen-safe"}>
      <Menu
        setOpenMenu={setOpenMenu}
        openMenu={openMenu}
        openModal={openModal}
        setOpenModal={setOpenModal}
      />
      <ModalForm
        openModal={openModal}
        setOpenModal={setOpenModal}
        setOpenMenu={setOpenMenu}
        openMenu={openMenu}
      />
      <div className={"flex flex-col justify-between min-h-screen"}>
        <div
          className={
            "bg-black relative md:h-[100px] h-[70px] w-full flex flex-row-reverse md:flex-row justify-between items-center lg:px-[72px] px-[28px]"
          }
        >
          <div
            className={
              "w-[300px] h-full flex items-center md:justify-start justify-end"
            }
          >
            <MenuBtn
              className={"cursor-pointer"}
              setOpenMenu={setOpenMenu}
              openMenu={openMenu}
            />
          </div>
          <div className={"w-full h-full flex items-center md:ml-[100px] ml-0"}>
            <LogoWhite />
          </div>
        </div>
        <div
          className={
            "relative lg:px-[72px] px-[28px] flex justify-start md:flex-nowrap flex-wrap-reverse flex-[1_1_100%]"
          }
        >
          <BackButton />
          <div
            className={
              "hidden md:flex md:w-[280px] w-full h-full flex-col justify-center md:mr-8 mr-0 md:py-[122px] py-[64px]"
            }
          ></div>
          <div
            className={
              "md:w-[70%] w-full h-full shrink md:pt-[48px] md:pb-[48px] pt-[100px] pb-[64px]"
            }
          >
            <div className={""}>
              <p className={"text-[#040404] text-[40px] leading-[40px] mb-6"}>
                {t("common:user_agreement")}
              </p>

              <div className={"bg-[#D4D3D2] h-[1px] w-full mb-6"}></div>
              <p
                className={
                  "text-[#212121] md:text-[24px] md:leading-[28px] text-[21px] leading-[30px] font-['PT-Root-UI'] font-medium mb-5"
                }
              >
                {t("common:user_agreement")}
              </p>
              <p
                className={
                  "text-[#212121] md:text-[24px] md:leading-[28px] text-[21px] leading-[30px] font-['PT-Root-UI'] font-medium mb-5"
                }
              >
                {t("user_agreement_info")}
              </p>
              <ul
                className={
                  "text-[#212121] md:text-[24px] md:leading-[28px] text-[21px] leading-[30px] font-['PT-Root-UI'] font-medium"
                }
              >
                <li className={"mb-5 flex gap-4"}>
                  <span>1.</span>
                  <span>{t("user_agreement_info-1")}</span>
                </li>
                <li className={"mb-5 flex gap-4"}>
                  <span>2.</span>
                  <span>{t("user_agreement_info-2")}</span>
                </li>
                <li className={"mb-5 flex gap-4"}>
                  <span>3.</span>
                  <span>{t("user_agreement_info-3")}</span>
                </li>
                <li className={"mb-5 flex gap-4"}>
                  <span>4.</span>
                  <span>{t("user_agreement_info-4")}</span>
                </li>
                <li className={"mb-5 flex gap-4"}>
                  <span>5.</span>
                  <span>{t("user_agreement_info-5")}</span>
                </li>
              </ul>
              <p
                className={
                  "text-[#212121] md:text-[24px] md:leading-[28px] text-[21px] leading-[30px] font-['PT-Root-UI'] font-medium mb-5"
                }
              >
                {t("review_conditions")}
              </p>
            </div>
          </div>
        </div>

        <footer
          className={
            "bg-black relative w-full h-[300px] flex md:flex-row flex-col md:justify-between justify-start gap-12 items-center lg:px-[72px] px-[28px] pt-[28px] md:pt-0"
          }
        >
          <FullLogo />
          <div>
            <p
              className={
                "text-white text-[16px] leading-[20px] font-['PT-Root-UI'] font-regular"
              }
            >
              {t("common:footer")}
            </p>
          </div>
          <div
            className={
              "fixed md:right-[32px] right-[24px] md:bottom-[32px] bottom-[32px] cursor-pointer"
            }
          >
            <MsgBtn />
          </div>
        </footer>
      </div>
    </div>
  );
};

const getStaticProps = makeStaticProps(["agreement-page", "common"]);

export { getStaticPaths, getStaticProps };
export default Agreement;