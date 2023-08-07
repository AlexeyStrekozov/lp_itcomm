import React, { useEffect, useState } from "react";
import { MenuBtn } from "@/components";
import Link from "@/components/AppLink";
import { useTranslation } from "next-i18next";

export const Sidebar = ({ className = "", blocks, setOpenMenu, openMenu }) => {
  const [activeLink, setActiveLink] = useState("");

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    for (let i = 0; i < blocks.length; i++) {
      const block = document.getElementById(blocks[i].id);

      if (
        block &&
        scrollPosition >= block.offsetTop - window.innerHeight / 2 &&
        scrollPosition < block.offsetTop + block.offsetHeight / 2
      ) {
        setActiveLink(blocks[i].link);
        break;
      }
    }
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const { t } = useTranslation("common");

  return (
    <div
      className={`
            
            sidebar fixed z-20 
            
          
            fixed z-10 lg:w-[312px] md:w-[312px] w-[20px] 
            left-[20px] md:left-[56px] 
            flex flex-col justify-center 
            h-full pt-8 pb-[50px]
              
            before:md:block before:absolute before:w-[2px] 
            before:h-[calc(100%_-_80px)] 
            before:bg-white before:opacity-20 
            
            after:absolute after:right-0 after:w-[2px] 
            after:h-[calc(100%_-_80px)] 
            after:bg-white after:opacity-20 
            `}
    >
      <MenuBtn
        className={className}
        setOpenMenu={setOpenMenu}
        openMenu={openMenu}
      />
      <div
        className={
          "sidebar__links md:mt-auto  pr-[12px] lg:min-w-[312px] md:min-w-[250px] max-w-[20px] md:max-w-[312px] "
        }
      >
        <div
          className={`flex md:gap-4 gap-2 flex-col items-start  text-p4 
                        text-white font-['PT-Root-UI'] 
                        uppercase font-medium`}
        >
          {blocks.map((block, index) => (
            <div
              key={block.id}
              className={`relative  text-p3 font-medium 
                ${index === 0 ? "firts__link" : ""}
                ${index === blocks.length - 1 ? "last__link" : ""}
              `}
            >
              <a
                href={`#${block.id}`}
                className={`flex items-center gap-4 relative 
                  text-[18px] leading-[20px] font-medium
                  hover:opacity-80 opacity-20
                  transition-opacity duration-300 menu-link-block 
                  ${activeLink === block.link ? "active" : ""}
                `}
              >
                <span className={"hidden md:block"}>
                  {index > 0 && index < blocks.length - 1 ? (
                    <span className={index === 1 ? "tracking-widest" : ""}>
                      {index < 10 ? "0" + index : index}
                    </span>
                  ) : null}{" "}
                  {t(block.title)}
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
