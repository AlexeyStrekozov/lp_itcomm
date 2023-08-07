export const Input = ({ className = "", errorMessage = "", ...rest }) => {
  return (
    <div className={`${className}`}>
      <input
        className={`block text-[#040404] text-[18px] leading-[26px] font-regular font-['PT-Root-UI'] w-full border-[#D4D3D2] border-[1px] rounded-[8px] outline-0 px-2 py-2 hover:border-[#000000] transition-all ease-in-out duration-500 focus:border-[#000000]
            `}
        {...rest}
      ></input>
      {errorMessage && (
        <p className="inline-block px-2 py-2 rounded-[8px] bg-[#FFCECE] text-[#A90000] text-[16px] leading-[22px] font-['PT-Root-UI'] mt-2">
          {errorMessage}
        </p>
      )}
    </div>
  );
};
