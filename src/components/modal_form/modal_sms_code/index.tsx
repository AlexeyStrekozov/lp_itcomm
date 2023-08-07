import OtpInput from "react-otp-input";
import { useEffect, useState } from "react";
import { formatPhoneNumber } from "@/utils/helpers";
import * as process from "process";
import { useTranslation } from "next-i18next";

const SECOND_REMAINING = process.env.NODE_ENV === "development" ? 3 : 60;
const OTP_LENGTH = 6;
const TEMP_OTP = "10101";
export const ModalSmsCode = ({
  phone,
  onResend: onResend,
  onSetSms,
  onChangeInfo,
}) => {
  const { t } = useTranslation("common");

  const [otp, setOtp] = useState("");

  useEffect(() => {
    if (otp.length === OTP_LENGTH) {
      onSetSms(otp);
    }
  }, [otp]);

  const [seconds, setSeconds] = useState(SECOND_REMAINING);

  const formattedPhone = formatPhoneNumber(phone);

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) {
        setSeconds(seconds - 1);
      }

      if (seconds === 0) {
        clearInterval(interval);
        if (process.env.NODE_ENV === "development") {
          setOtp(TEMP_OTP);
        }
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [seconds]);

  const resendOTP = () => {
    setSeconds(SECOND_REMAINING);
    onResend();
  };

  return (
    <div className={`lg:w-[500px] md:w-[400px] w-full`}>
      <p className={"text-[#040404] text-[40px] leading-[40px] mb-6"}>
        Подтвердите запись
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
              {formattedPhone}
            </p>
          </div>
          <div className={"flex md:gap-2 gap-1 justify-between  w-full mb-6"}>
            <OtpInput
              value={otp}
              onChange={setOtp}
              numInputs={OTP_LENGTH}
              renderSeparator={<span className={"w-4"}></span>}
              renderInput={({ className, ...props }) => (
                <input
                  {...props}
                  type={"tel"}
                  pattern={`[0-9]`}
                  className={`block
                                    w-12 md:h-12 h-10                                   
                                    md:min-w-[48px]
                                    md:min-h-[48px]
                                    min-w-[30px]
                                    min-h-0                                   
                                     rounded-[8px]
                                     text-[#040404] md:text-[32px] md:leading-[32px] text-[24px] leading-[24px] font-medium font-['PT-Root-UI']  border-[#D4D3D2] border-[1px] outline-0 md:px-2 md:py-2 px-0 py-0 hover:border-[#000000] transition-all ease-in-out duration-500`}
                />
              )}
            />
          </div>
          <div className={"text-center "}>
            {Number(seconds) ? (
              <p
                className={
                  "text-[#494949] text-[18px] leading-[26px] w-[180px] text-center font-regular font-['PT-Root-UI']"
                }
              >
                {t("resend_possible_in")} {seconds} секунд
              </p>
            ) : (
              <div className={"flex flex-col items-center gap-2"}>
                <button
                  type={"button"}
                  onClick={resendOTP}
                  className={"text-[#040404] underline"}
                >
                  {t("resend")}
                </button>

                <button
                  type={"button"}
                  onClick={onChangeInfo}
                  className={"text-[#040404] underline"}
                >
                  {t("go_back")}
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
