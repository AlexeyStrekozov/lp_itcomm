import React, { useEffect, useState, useCallback } from "react";
import {
  LogoWhite,
  Menu,
  MobMenuBtn,
  Sidebar,
  ModalForm,
  Banner,
  MsgBtn,
} from "@/components";

import { MainPopUp } from "@/components/main-pop-up";

import { useSpring, motion, useScroll } from "framer-motion";
import { bannersInfo } from "@/bannersInfo";
import { bannersInfoSlider } from "@/bannersInfo_slider";
import BannerSlider from "@/components/bannerSlider";
import { useTranslation } from "next-i18next";
import { getStaticPaths, makeStaticProps } from "@/lib/localize/getStatic";
const Home = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  // const [banners, setBanners] = useState(bannersInfo);
  const [banners, setBanners] = useState(bannersInfoSlider);

  const sidebarLinks = [
    "Клубы",
    "Услуги",
    "Персональный тренер",
    "Мероприятия",
    "Обучение на тренера",
    "Корп. клиентам",
    "Онлайн-тренировки",
    "Интернет-магазин",
    "Academy+ app",
  ];

  // const sidebarBlocks = banners.map((banner, i) => ({
  //   id: banner.id,
  //   link: `#${banner.id}`,
  //   title: sidebarLinks[i],
  // }));
  const sidebarBlocks = bannersInfoSlider.map((sectionBanners) => ({
    id: sectionBanners[0].id,
    link: `#${sectionBanners[0].id}`,
    title: sectionBanners[0].title,
  }));

  const handleApply = (inputValue) => {
    const updatedBanners = banners.map((banner) => ({
      ...banner,
      activeCity: inputValue,
    }));
    setBanners(updatedBanners);
  };

  const escFunction = useCallback((event) => {
    if (event.key === "Escape") {
      setOpenModal(false);
    }
  }, []);

  useEffect(() => {
    if (openModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [openModal]);

  useEffect(() => {
    document.addEventListener("keydown", escFunction, false);

    return () => {
      document.removeEventListener("keydown", escFunction, false);
    };
  }, []);

  useEffect(() => {
    if (openModal) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [openModal]);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className={"bg-header "}>
      <motion.div
        className="fixed z-50 top-0 right-0 left-0 h-[2px] bg-primary"
        style={{ scaleX }}
      />
      <div className="">
        <MainPopUp onApply={handleApply} />
        <Sidebar
          blocks={sidebarBlocks}
          setOpenMenu={setOpenMenu}
          openMenu={openMenu}
          className={"left-[16px] top-[32px]"}
        />

        <ModalForm
          openModal={openModal}
          setOpenModal={setOpenModal}
          setOpenMenu={setOpenMenu}
          openMenu={openMenu}
        />
        <Menu
          setOpenMenu={setOpenMenu}
          openMenu={openMenu}
          openModal={openModal}
          setOpenModal={setOpenModal}
        />
        <div
          className={
            "fixed md:right-[32px] right-[22px] md:bottom-[32px] bottom-[32px] cursor-pointer z-40"
          }
        >
          <MsgBtn />
        </div>
        <div
          className={
            "relative landscape:hidden top-[70px] left-0 z-20 md:hidden bg-black h-[70px] w-full flex justify-between items-center px-[20px]"
          }
        >
          <LogoWhite />
          <MobMenuBtn setOpenMenu={setOpenMenu} openMenu={openMenu} />
        </div>
        <div
          className={
            "landscape:fixed top-0 left-0 z-20 portrait:hidden md:hidden bg-transparent h-[70px] w-full justify-end items-center px-[20px] flex"
          }
        >
          <MobMenuBtn setOpenMenu={setOpenMenu} openMenu={openMenu} />
        </div>
        <div className={"scroller snap-parent-y-mandatory"}>
          {/* {banners.map((banner, index) => (
            <Banner
              key={banner.title}
              {...banner}
              index={index}
              openModal={openModal}
              setOpenModal={setOpenModal}
              setOpenMenu={setOpenMenu}
            />
          ))} */}

          <BannerSlider
            banners={bannersInfoSlider}
            openModal={openModal}
            setOpenModal={setOpenModal}
            setOpenMenu={setOpenMenu}
          />
        </div>
      </div>
    </div>
  );
};

const getStaticProps = makeStaticProps(["main-page", "common"]);

export { getStaticPaths, getStaticProps };
export default Home;
