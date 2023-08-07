import React, { useRef, useEffect, useCallback } from "react";
import { Banner } from "../banner";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BannerSlider = ({ banners, openModal, setOpenModal, setOpenMenu }) => {
  const swiperRefs = useRef(banners.map(() => React.createRef()));

  useEffect(() => {
    console.log(swiperRefs.current);
  }, [banners]);

  const handleNextSlide = (groupIndex) => {
    if (swiperRefs.current[groupIndex]) {
      if (
        swiperRefs.current[groupIndex].current.swiper &&
        typeof swiperRefs.current[groupIndex].current.swiper.slideNext ===
        "function"
      ) {
        swiperRefs.current[groupIndex].current.swiper.slideNext();
      }
    }
    console.log(groupIndex);
  };

  return (
    <>
      {banners.map((bannerGroup, groupIndex) => (
        <section
          className={`snap-child-center 
           flex 
           justify-center items-center
               portrait:h-[100vh] portrait:md:h-screen landscape:h-[120vh] landscape:md:h-screen
               overflow-hidden
            min-h-screen-safe  
          
          ${bannerGroup.length > 1 ? "banner-slider" : ""}`}
          key={groupIndex}
          id={bannerGroup[0].id}
        >
          <Swiper
            slidesPerView={1}
            modules={[Navigation, Pagination, A11y]}
            // ref={swiperRef}
            ref={swiperRefs.current[groupIndex]}
            loop={true}
            navigation={{
              nextEl: ".custom-next-arrow",
              prevEl: ".custom-prev-arrow",
            }}
            pagination={{ clickable: true }}
            key={groupIndex}
            className=""
          >
            {bannerGroup.map((banner, bannerIndex) => (
              <SwiperSlide key={bannerIndex}>
                <Banner
                  key={bannerIndex}
                  index={bannerIndex}
                  title={banner.title}
                  cities={banner.cities}
                  text={banner.text}
                  variant={banner.variant}
                  imgUrl={banner.imgUrl}
                  id={banner.id}
                  video={banner.video}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                  setOpenMenu={setOpenMenu}
                  activeCity={banner.activeCity}
                  subTitle={banner.subTitle}
                  totalBanners={bannerGroup.length}
                  // nextSlide={handleNextSlide}
                  // nextSlide={() => handleNextSlide()}
                  nextSlide={() => handleNextSlide(groupIndex)}
                  address={banner.address}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </section>
      ))}
    </>
  );
};

export default BannerSlider;
