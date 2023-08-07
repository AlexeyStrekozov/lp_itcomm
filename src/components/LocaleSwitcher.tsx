import React, { useEffect, useRef, useState } from "react";

import Link from "next/link";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import languageDetector from "@/lib/localize/languageDetector";
import i18nextConfig from "../../next-i18next.config";
import { useGlobalAppContext } from "@/providers/app-context";

const languages = [
  { code: "ru", translateKey: "Ru" },
  { code: "kz", translateKey: "Kz" },
];

const LanguageSwitchLink = ({ locale, onClick, ...rest }) => {
  const router = useRouter();

  let href = rest.href || router.asPath;
  let pName = router.pathname;
  Object.keys(router.query).forEach((k) => {
    if (k === "locale") {
      pName = pName.replace(`[${k}]`, locale);
      return;
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    pName = pName.replace(`[${k}]`, router.query[k]);
  });

  if (locale) {
    href = rest.href ? `/${locale}${rest.href}/` : pName;
  }

  return (
    <Link href={href}>
      <button
        className={` w-full text-left 
                            rounded-lg 
                            hover:bg-gray-100 
                            focus-visible:bg-gray-100 first-letter:uppercase
                            px-2
                            `}
        onClick={() => {
          onClick?.();
          languageDetector.cache(locale);
        }}
      >
        {locale}
      </button>
    </Link>
  );
};

function LocaleSwitcher() {
  const { t, i18n } = useTranslation("common");
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const selectRef = useRef(null);
  const currentLocale = router.query.locale || i18nextConfig.i18n.defaultLocale;

  const { updateState: setAppState } = useGlobalAppContext();
  const handleLangChange = (selectedLang: any) => {
    setAppState({ currentLanguage: selectedLang });
  };

  const handleSelectToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (selectRef.current && !selectRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    handleLangChange(i18n.language);
  }, [i18n.language]);

  return (
    <div
      ref={selectRef}
      className={`w-[68px] flex items-center min-w-[68px] max-w-[68px] relative cursor-pointer appearance-none  bg-transparent outline-none text-[#040404] text-[18px] leading-[26px] font-normal font-['PT-Root-UI'] px-2 `}
    >
      <button
        type={"button"}
        className={`flex items-center text-left justify-between w-full ${
          isOpen ? "open" : ""
        }`}
        onClick={handleSelectToggle}
      >
        <span className="rounded-lg hover:bg-gray-100 w-full px-2">
          {t(
            languages.find((l) => l.code === i18n.language)?.translateKey ||
              i18n.language,
          )}
        </span>
        <div className={`arrow w-[24px] h-[24px] ${isOpen ? "open" : ""}`}>
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9L12 15L18 9"
              stroke="#040404"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>
      {isOpen && (
        <div
          className={` 
                    cursor-default
                    flex flex-col items-start 
                    w-full absolute top-[142%] left-0 
                    mt-2 bg-white p-2  z-10  gap-2
                    rounded-lg border-[#D4D3D2] border-[1px] `}
        >
          {i18nextConfig.i18n.locales.map((locale) => {
            if (locale === currentLocale) return null;
            return (
              <LanguageSwitchLink
                onClick={handleSelectToggle}
                locale={locale}
                key={locale}
              />
            );
          })}
        </div>
      )}
      <style jsx>
        {`
          .arrow {
            margin-top: 2px;
            transition: transform 0.2s ease;
            transform: rotate(${isOpen ? "-180deg" : "0"});
          }
        `}
      </style>
    </div>
  );
}

export { LocaleSwitcher };
