import { Button, Input } from "@/components";
import { PhoneInput } from "@/components/phone_input";
import { useForm } from "@/hooks/useForm";
import { PHONE_REGEXP } from "@/utils/helpers";
import { useEffect, useState } from "react";
import CustomSelect from "@/components/custom_select";
import { bannersInfo } from "@/bannersInfo";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";

const formInputs = {
  studio: {
    value: "not_selected",
    required: true,
    validators: [(s: string) => s === "not_selected" && "field_required"],
  },
  phone: {
    value: "",
    type: "tel",
    required: true,
    validators: [
      (s: number) => {
        return (
          (!RegExp(PHONE_REGEXP).test(s.toString()) ||
            s.toString()?.length !== 11) &&
          "phone_format_required"
        );
      },
    ],
  },
  name: {
    value: "",
    required: true,
    placeholder: "Last Name",
    validators: [
      (s: number) => {
        return (
          !RegExp(/^[А-Яа-яA-Za-z\s]+$/g).test(s.toString()) &&
          "only_letters_in_name"
        );
      },
    ],
  },
};

export const ModalClientInfo = ({
  handleSubmit: sendToServer,
  savedValues = {} as Record<string, any>,
}) => {
  const { t } = useTranslation("common");

  const [isFetching, setIsFetching] = useState(false);
  const [phoneWithoutCountryCode, setPhoneWithoutCountryCode] = useState("");
  const { fields, isValid, handleSubmit } = useForm(formInputs);
  const { phone, name, studio } = fields;

  const onSubmit = async ({ values }) => {
    setIsFetching(true);
    await sendToServer(values);
    setIsFetching(false);
  };

  const handleStudioChange = (value) => {
    studio.setState({ target: { value } });
  };

  useEffect(() => {
    if (Object.entries(savedValues).length > 0) {
      savedValues.phone &&
        phone.setState({
          target: {
            value: `7${savedValues.phone.substring(1)}`,
          },
        });
      savedValues.name &&
        name.setState({
          target: {
            value: savedValues.name,
          },
        });

      savedValues.studio &&
        studio.setState({
          target: {
            value: savedValues.studio,
          },
        });
    }
  }, []);

  const { asPath } = useRouter();

  useEffect(() => {
    const [_, hash] = asPath.split("#");

    if (hash) {
      studio.setState({
        target: {
          value: hash,
        },
      });
    }
  }, [asPath]);

  const optionsStudio = bannersInfo.map((banner) => ({
    label: banner.title,
    value: banner.id,
  }));

  return (
    <div className={`lg:w-[500px] md:w-[400px] w-full`}>
      <form autoComplete={"off"} onSubmit={handleSubmit(onSubmit)}>
        <p className={"text-[#040404] text-[40px] leading-[40px] mb-6"}>
          {t("Sign up for Academy", "Запишитесь в Academy")}
        </p>
        <p
          className={
            "text-[#494949] md:text-[24px] md:leading-[28px] text-[21px] leading-[30px] font-['PT-Root-UI'] font-medium mb-6"
          }
        >
          {t("fitness_aesthetics_for_women")}
        </p>
        <div className={"flex justify-start gap-4 items-center mb-6"}>
          <div className="relative flex items-center gap-[20px]">
            <span className="p-1 bg-black rounded-full">
              <svg
                className={`w-6 h-6 text-white`}
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <path
                  d="M20 6L9 17l-5-5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p
              className={
                "user-select-none select-none text-[#040404] text-[18px] leading-[26px] font-['PT-Root-UI'] font-regular "
              }
            >
              {t("women_only")}
            </p>
          </div>
        </div>
        <div className={"bg-[#D4D3D2] h-[1px] w-full mb-6"}></div>
        <div className={"w-full"}>
          <label
            className="text-[#040404] text-[16px] leading-[22px] font-normal font-['PT-Root-UI'] w-full block mb-2"
            htmlFor="Lang"
          >
            {t("studio")}
          </label>
          <div className={`mb-6`}>
            <div className="text-[#040404] text-[18px] leading-[26px] font-normal font-['PT-Root-UI'] w-full border-[#D4D3D2] border-[1px] rounded-[8px] py-2 mb-6 hover:border-[#000000] transition-all ease-in-out duration-500 focus:border-[#000000]">
              <CustomSelect
                className={"w-full"}
                defaultValue={studio.value}
                options={optionsStudio}
                onChange={handleStudioChange}
                showArrow={true}
              />
            </div>
          </div>
          <label
            className="text-[#040404] text-[16px] leading-[22px] font-normal font-['PT-Root-UI'] w-full block mb-2"
            htmlFor="Phone"
          >
            {t("phone")}
          </label>
          <PhoneInput
            id="phone"
            className="mb-6"
            type="tel"
            mask="+{7} (000) 000-00-00"
            autoComplete={"off"}
            placeholder="В формате +7 (777) 777-77-77"
            value={phone.value}
            onChange={phone.setState}
            errorMessage={phone.touched && t(phone.error)}
          />
          {/* {phone.touched && phone.error} */}
          <label
            className="text-[#040404] text-[16px] leading-[22px] font-normal font-['PT-Root-UI'] w-full block mb-2"
            htmlFor="Name"
          >
            {t("your_Name")}
          </label>
          <Input
            id="name"
            className="mb-6"
            autoComplete={"off"}
            type="text"
            placeholder={t("name_input")}
            value={name.value}
            onChange={name.setState}
            errorMessage={name.touched && t(name.error)}
          />
        </div>
        <Button
          title="send"
          width="w-full"
          bg="bg-black"
          disabled={isFetching || !isValid || studio.value === "Выбрать"}
          text="text-white"
          stroke="white"
          className="mb-8"
          children={""}
          type="submit"
        />
        <p
          className={
            "text-[#494949] text-[18px] leading-[26px] font-['PT-Root-UI'] font-regular w-full"
          }
        >
          {t("manager_contact")}
        </p>
      </form>
    </div>
  );
};
