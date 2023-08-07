import { IMaskInput } from "react-imask";

interface Props {
  className?: string;
  mask?: string;
  errorMessage: string;
  onChange: any;
  id: string;
  type?: string;
  autoComplete: string;
  placeholder?: string;
  value: string;
}

export const PhoneInput: React.FC<Props> = ({
  className = "",
  mask = "+{7} (000) 000-00-00",
  errorMessage = "",
  onChange,
  id,
  type = "tel",
  autoComplete,
  placeholder = "В формате +7 (777) 777-77-77",
  value,
  ...rest
}: Props) => {
  return (
    <div className={`${className}`}>
      <IMaskInput
        id={id}
        type="tel"
        autoComplete={autoComplete}
        placeholder={placeholder}
        value={value}
        mask={mask}
        lazy={false}
        unmask={true}
        placeholderChar={"_"}
        className={`block text-[#040404] text-[18px] leading-[26px] font-regular font-['PT-Root-UI'] w-full border-[#D4D3D2] border-[1px] rounded-[8px] outline-0 px-2 py-2 hover:border-[#000000] transition-all ease-in-out duration-500 focus:border-[#000000]`}
        {...rest}
        onAccept={(value: string) => {
          onChange({ target: { value } });
        }}
      />

      {errorMessage && (
        <p className="inline-block px-2 py-2 rounded-[8px] bg-[#FFCECE] text-[#A90000] text-[16px] leading-[22px] font-['PT-Root-UI'] mt-2">
          {errorMessage}
        </p>
      )}
    </div>
  );
};
