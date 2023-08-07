export const CityInfo = ({ options = [], active = null }) => {
  if (!options?.length) return null;
  return (
    <div
      className={
        "z-0 px-[24px] py-[14px]  bg-black/[.3] rounded-[36px] w-[232px] text-[18px] flex justify-between flex-wrap backdrop-filter backdrop-blur-md"
      }
    >
      {options.map((option) => (
        <span
          key={option}
          className={`z-20 ${
            option.toLowerCase() === active?.toLowerCase()
              ? "activeCity font-bold"
              : ""
          }`}
        >
          <span className={"flex group"}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g opacity="0.5">
                <path
                  d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                  stroke="white"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
            <p
              className={"ml-2 text-[16px] leading-[22px] font-['PT-Root-UI']"}
            >
              {option}
            </p>
          </span>
        </span>
      ))}
    </div>
  );
};
