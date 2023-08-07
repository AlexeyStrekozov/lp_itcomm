import Link from "@/components/AppLink";

import { useTranslation } from "next-i18next";
export const SmsCode = ({ className = "", router }) => {
  const { t } = useTranslation("common");

  return (
    <div
      className={
        "relative lg:px-[72px] px-[28px] flex justify-start md:flex-nowrap flex-wrap-reverse flex-[1_1_100%] cursor-pointer"
      }
    >
      <button
        className={
          "absolute cursor-pointer z-30 lg:left-[72px] left-[28px] md:top-[32px] top-[30px]"
        }
        onClick={() => router.push("/")}
      >
        <div
          className={
            "md:w-[120px] w-[110px] h-[50px] flex justify-center items-center  bg-[#F7F5F4] text-black rounded-[44px] text-[16px] leading-[22px] font-['PT-Root-UI'] font-regular"
          }
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 18L9 12L15 6"
              stroke="#030303"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>{t("common:go_back")}</p>
        </div>
      </button>
      <div
        className={
          "relative md:w-[280px] w-full h-full flex flex-col justify-center md:mr-8 mr-0 md:py-[122px] py-[64px]"
        }
      >
        <div className={"bg-[#F7F5F4] rounded-[16px] h-[60%] p-[32px]"}>
          <img className={"mb-5"} src="./images/manager.png" alt="" />
          <p
            className={
              "text-[#030303] uppercase text-[24px] leading-[26px] font-['PT-Root-UI'] font-medium mb-5"
            }
          >
            {t("manager_online")}
          </p>
          <p
            className={
              "text-[#030303] text-[18px] leading-[24px] font-['PT-Root-UI'] font-regular mb-5"
            }
          >
            {t("purchase_consultation")}
          </p>
          <p
            className={
              "text-[#030303] text-[18px] leading-[24px] font-['PT-Root-UI'] font-regular mb-5"
            }
          >
            {t("from_time")} 9:00 {t("until_time")} 18:00
          </p>
          <div className={"flex w-full justify-start gap-4"}>
            <Link className={""} href="#">
              <svg
                className={"cursor-pointer"}
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30 60C46.5685 60 60 46.5685 60 30C60 13.4315 46.5685 0 30 0C13.4315 0 0 13.4315 0 30C0 46.5685 13.4315 60 30 60ZM24.5 43.75C25.2296 43.75 25.5631 43.4254 25.9661 43.033L26 43L29.6034 39.4962L37.1 45.0348C38.4796 45.796 39.4753 45.4018 39.819 43.7539L44.7402 20.5631C45.2441 18.5431 43.9702 17.6269 42.6504 18.2261L13.7529 29.3688C11.7804 30.16 11.7919 31.2605 13.3933 31.7508L20.8091 34.0654L37.9773 23.2341C38.7878 22.7427 39.5317 23.0069 38.9212 23.5487L25.0107 36.1019L25.0105 36.1017L25.0105 36.1021L25.01 36.1025L25.0104 36.1028L24.5 43.75Z"
                  fill="#030303"
                />
              </svg>
            </Link>
            <Link className={""} href="#">
              <svg
                className={"cursor-pointer"}
                width="60"
                height="60"
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M30 0C46.5685 0 60 13.4315 60 30C60 46.5685 46.5685 60 30 60C13.4315 60 0 46.5685 0 30C0 13.4315 13.4315 0 30 0ZM31.7967 12.2201C33.8366 12.4747 35.4851 12.9661 37.2937 13.8484C39.0726 14.7188 40.2111 15.5417 41.7173 17.0397C43.1286 18.4548 43.9114 19.5265 44.7415 21.1902C45.8979 23.5112 46.5561 26.2703 46.6687 29.3077C46.7103 30.3438 46.6806 30.5748 46.4434 30.8708C45.9928 31.4452 45.0024 31.3503 44.6645 30.705C44.5577 30.4919 44.528 30.3084 44.4925 29.4794C44.4331 28.2064 44.3443 27.3834 44.1664 26.4006C43.4667 22.5461 41.6165 19.4673 38.6634 17.2588C36.2026 15.4115 33.6587 14.5115 30.3262 14.3161C29.1995 14.251 29.0038 14.2096 28.7489 14.0142C28.2744 13.6411 28.2507 12.7649 28.7073 12.3563C28.986 12.1017 29.1817 12.0662 30.1483 12.0958C30.6523 12.1136 31.3935 12.1728 31.7967 12.2201ZM18.2412 12.8596C18.4488 12.9306 18.769 13.0964 18.9528 13.2148C20.0794 13.9609 23.2163 17.9693 24.2422 19.9705C24.8292 21.1132 25.0249 21.9599 24.8411 22.5875C24.6513 23.2625 24.3371 23.6178 22.9317 24.7487C22.3683 25.2045 21.8406 25.6723 21.7576 25.7967C21.5441 26.1046 21.3721 26.7085 21.3721 27.1348C21.3781 28.1236 22.0185 29.9176 22.8605 31.2971C23.5128 32.3688 24.6809 33.7424 25.8373 34.7964C27.1952 36.0398 28.393 36.8864 29.745 37.5555C31.4824 38.4199 32.5439 38.639 33.3208 38.2778C33.5164 38.189 33.7239 38.0706 33.7892 38.0174C33.8484 37.964 34.3051 37.4074 34.8032 36.7917C35.7638 35.5838 35.9832 35.3885 36.6414 35.1635C37.4776 34.8793 38.3315 34.9562 39.1912 35.3944C39.8436 35.7319 41.2667 36.6141 42.1858 37.2535C43.3954 38.1002 45.9808 40.208 46.3308 40.6285C46.9474 41.3863 47.0542 42.3573 46.6391 43.429C46.2003 44.5598 44.4925 46.6796 43.3006 47.5855C42.2214 48.4025 41.4565 48.7162 40.4484 48.7637C39.6182 48.8051 39.2743 48.7341 38.2128 48.2959C29.8874 44.8677 23.24 39.7522 17.9624 32.724C15.2051 29.0531 13.1059 25.246 11.6709 21.2968C10.8348 18.9936 10.7933 17.993 11.4811 16.8148C11.7777 16.3174 13.0407 15.0859 13.9598 14.3991C15.4898 13.2622 16.1954 12.8418 16.7587 12.7234C17.1441 12.6405 17.8142 12.7057 18.2412 12.8596ZM32.2059 16.5128C35.8054 17.0397 38.5923 18.7094 40.4187 21.4211C41.4446 22.9487 42.085 24.7427 42.3044 26.667C42.3815 27.3716 42.3815 28.6564 42.2985 28.8696C42.2214 29.0709 41.9723 29.3433 41.7588 29.4557C41.5276 29.5741 41.0355 29.5623 40.7627 29.4202C40.306 29.1893 40.1697 28.8222 40.1697 27.8275C40.1697 26.294 39.7723 24.6776 39.0846 23.4224C38.3018 21.9895 37.1633 20.8054 35.7757 19.9823C34.5838 19.2718 32.8227 18.7449 31.2157 18.6147C30.6345 18.5673 30.3143 18.4489 30.0949 18.1943C29.757 17.8094 29.7213 17.2884 30.0059 16.8562C30.3143 16.3766 30.7887 16.2996 32.2059 16.5128ZM33.4689 20.983C34.6371 21.2317 35.5326 21.6757 36.2975 22.3922C37.2818 23.3217 37.8215 24.4467 38.0586 26.0631C38.2187 27.117 38.1535 27.5314 37.7799 27.8749C37.4301 28.1946 36.7838 28.2064 36.3924 27.9045C36.1077 27.6913 36.0188 27.4663 35.9535 26.8565C35.8765 26.0453 35.7341 25.4769 35.4911 24.9499C34.9692 23.8309 34.0501 23.2507 32.4965 23.0612C31.7671 22.9724 31.5477 22.8895 31.3105 22.6112C30.8776 22.0961 31.0436 21.2613 31.6425 20.9534C31.868 20.8409 31.9628 20.829 32.4609 20.8586C32.7692 20.8764 33.2259 20.9297 33.4689 20.983Z"
                  fill="#030303"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
      <div
        className={
          "md:w-[70%] w-full h-full md:pt-[48px] md:pb-[48px] pt-[100px] pb-0"
        }
      >
        <div className={"h-full"}>
          <p className={"text-[#040404] text-[40px] leading-[40px] mb-6"}>
            {t("confirm_booking")}
          </p>

          <div className={"bg-[#D4D3D2] h-[1px] w-full mb-6"}></div>
          <div
            className={
              "border-[#D4D3D2] border-[1px] rounded-[8px] w-full flex items-center justify-center py-[46px]"
            }
          >
            <div className={"flex items-center justify-center flex-col"}>
              <div className={"flex flex-col items-center mb-6"}>
                <p
                  className={
                    "text-[#040404] text-[24px] leading-[28px] font-medium font-['PT-Root-UI']"
                  }
                >
                  {t("code_sent_to")}
                </p>
                <p
                  className={
                    "text-[#040404] text-[24px] leading-[28px] font-medium font-['PT-Root-UI']"
                  }
                >
                  +7 684 345 65 43
                </p>
              </div>
              <div
                className={
                  "flex gap-2 justify-between md:w-[260px] w-full mb-6"
                }
              >
                <input
                  className={`block text-[#040404] text-[42px] leading-[46px] font-medium font-['PT-Root-UI'] w-[48px] h-[48px] border-[#D4D3D2] border-[1px] rounded-[8px] outline-0 px-2 py-2            `}
                  data-testid="input"
                ></input>
                <input
                  className={`block text-[#040404] text-[42px] leading-[46px] font-medium font-['PT-Root-UI'] w-[48px] h-[48px] border-[#D4D3D2] border-[1px] rounded-[8px] outline-0 px-2 py-2            `}
                  data-testid="input"
                ></input>
                <input
                  className={`block text-[#040404] text-[42px] leading-[46px] font-medium font-['PT-Root-UI'] w-[48px] h-[48px] border-[#D4D3D2] border-[1px] rounded-[8px] outline-0 px-2 py-2            `}
                  data-testid="input"
                ></input>
                <input
                  className={`block text-[#040404] text-[42px] leading-[46px] font-medium font-['PT-Root-UI'] w-[48px] h-[48px] border-[#D4D3D2] border-[1px] rounded-[8px] outline-0 px-2 py-2            `}
                  data-testid="input"
                ></input>
              </div>
              <div>
                <p
                  className={
                    "text-[#494949] text-[18px] leading-[26px] w-[180px] text-center font-regular font-['PT-Root-UI']"
                  }
                >
                  {t("resend_possible_in")} 59 сек
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
