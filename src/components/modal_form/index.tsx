import React, { useCallback, useState } from "react";
import {
  ModalClientInfo,
  ModalSmsCode,
  ModalSuccess,
  ModalUpload,
} from "@/components";
import { AmoCrmApi } from "@/lib/api/amocrm";

export const ModalForm = ({
  openModal,
  setOpenModal,
  openMenu,
  setOpenMenu,
}) => {
  const [currentModal, setCurrentModal] = useState<
    "ModalClientInfo" | "ModalSmsCode" | "ModalUpload" | "ModalSuccess"
  >("ModalClientInfo");
  const [formData, setFormData] = useState<Record<string, any>>({});
  const handleFormSubmit = async (_formData) => {
    // +7 777 -> 8 777
    _formData.phone = "8" + _formData.phone.slice(1);
    setFormData(_formData);
    await onSendSms(_formData);
  };

  const onAddLead = useCallback(
    async (smsCode) => {
      try {
        setCurrentModal("ModalUpload");

        const res = await AmoCrmApi.addLead(formData, smsCode);
        setTimeout(() => {
          if (res.ok) {
            setCurrentModal("ModalSuccess");
          } else {
            setCurrentModal("ModalSmsCode");
          }
        }, 1000);
      } catch (e) {
        setCurrentModal("ModalSmsCode");
        console.error(e, "???");
      }
    },
    [formData],
  );

  const onSendSms = useCallback(
    async ({ phone = formData.phone }) => {
      try {
        const data = await AmoCrmApi.sendSmsLead(phone);
        if (!data.ok) {
          setCurrentModal("ModalClientInfo");
        } else {
          setCurrentModal("ModalSmsCode");
        }
        return data.ok;
      } catch (e) {
        console.error(e, "???");
        setCurrentModal("ModalClientInfo");
      }
    },
    [formData],
  );

  const onSetSms = async (sms) => {
    console.log(sms, "sms");
    if (!sms) {
      return;
    }
    try {
      await onAddLead(sms);
    } catch (e) {
      setCurrentModal("ModalSmsCode");
    }
  };

  const onSuccess = () => {
    setFormData({});
    setCurrentModal("ModalClientInfo");
    setOpenModal(!openModal);
  };
  return (
    <>
      <div
        className={`fixed ${openModal ? "right-0 " : "-right-[10000px]"
          } top-0 md:h-screen h-full min-h-screen w-screen lg:w-[calc(100%_-_367px)] md:w-[calc(100%_-_305px)] z-50`}
      >
        <div
          className={` overflow-y-scroll fixed md:absolute transform transition-all duration-200 ${openModal ? "translate-x-[0%]" : "translate-x-[100%]"
            } top-0 z-40 flex items-start justify-center md:w-full w-screen h-full bg-white md:pt-[96px] py-[72px] px-[20px] transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275)`}
        >
          <a
            onClick={() => {
              setOpenModal(!openModal);
            }}
            className={`absolute md:right-[24px] md:top-[24px] right-[16px] top-[16px] z-40 w-[40px] h-[40px] cursor-pointer `}
          >
            <svg
              className={
                "transition-transform transform-gpu  hover:opacity-60 focus-visible:opacity-60"
              }
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="40" height="40" rx="20" fill="#D4D4D4" />
              <path
                d="M14 14L26 26M26 14L14 26"
                stroke="black"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          {openModal && currentModal == "ModalClientInfo" && (
            <ModalClientInfo
              savedValues={formData}
              handleSubmit={handleFormSubmit}
            />
          )}
          {openModal && currentModal == "ModalSmsCode" && (
            <ModalSmsCode
              phone={formData.phone}
              onResend={onSendSms}
              onSetSms={onSetSms}
              onChangeInfo={() => setCurrentModal("ModalClientInfo")}
            />
          )}
          {openModal && currentModal == "ModalUpload" && (
            <ModalUpload
              setOpenModal={setOpenModal}
              openModal={openModal}
              openMenu={openMenu}
              setOpenMenu={setOpenMenu}
              currentModal={currentModal}
              setCurrentModal={setCurrentModal}
            />
          )}
          {openModal && currentModal == "ModalSuccess" && (
            <ModalSuccess onOk={onSuccess} />
          )}
        </div>
        <div
          className={`absolute z-20 top-0 ${openModal ? "right-0 " : "-right-[10000px]"
            }
                    h-screen w-screen bg-black/[.3] ${openModal ? "opacity-100" : "opacity-0"
            } 
  transition-opacity duration-2000 ease-in-out`}
          onClick={() => {
            setOpenModal(!openModal);
          }}
        ></div>
      </div>
    </>
  );
};
