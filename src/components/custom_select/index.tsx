import { useState, useRef, useEffect, memo } from "react";

const CustomSelect = ({
  className,
  options,
  onChange,
  showArrow = true,
  initiallyOpen = false,
  defaultValue = null,
}) => {
  const [isOpen, setIsOpen] = useState(initiallyOpen);
  const [selectedValue, setSelectedValue] = useState(options[0]);

  useEffect(() => {
    const founded = options.find(
      (option: any) => option.value === defaultValue,
    );

    if (defaultValue && founded) {
      setSelectedValue(founded);
    }
  }, [defaultValue]);

  const selectRef = useRef(null);

  const handleSelectToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    if (option !== selectedValue) {
      const founded = options.find(
        (currentOption: any) => currentOption.value === option,
      );
      setSelectedValue(founded);
      setIsOpen(false);
      if (typeof onChange === "function") {
        onChange(option);
      }
    }
  };

  const handleClickOutside = (event: any) => {
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

  return (
    <div
      ref={selectRef}
      className={`${
        className || ""
      } relative cursor-pointer appearance-none  bg-transparent outline-none text-[#040404] text-[18px] leading-[26px] font-normal font-['PT-Root-UI'] px-2 `}
    >
      <button
        type={"button"}
        className={`flex items-center text-left justify-between w-full ${
          isOpen ? "open" : ""
        }`}
        onClick={handleSelectToggle}
      >
        <span className="rounded-lg hover:bg-gray-100 w-full px-2">
          {selectedValue?.label}
        </span>
        {showArrow && (
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
        )}
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
          {options.map((option) => (
            <button
              type={"button"}
              className={`
                             w-full text-left 
                            rounded-lg 
                            hover:bg-gray-100 
                            focus-visible:bg-gray-100 
                            px-2`}
              key={option.value}
              onClick={() => handleOptionClick(option.value)}
            >
              {option.label}
            </button>
          ))}
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
};

export default memo(CustomSelect);
