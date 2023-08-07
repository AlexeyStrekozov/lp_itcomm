import React, { Fragment } from "react";

export type ISelect = React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & { errorMessage?: string; withoutArrow?: boolean };

export const Select: React.FC<ISelect> = ({
  className = "",
  children,
  errorMessage,
  withoutArrow = false,
  ...rest
}) => {
  return (
    <Fragment>
      <select
        className={`bg-transparent outline-none
                bg-no-repeat select
                appearance-none ${
                  !withoutArrow
                    ? "bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCjxwYXRoIGQ9Ik02IDlMMTIgMTVMMTggOSIgc3Ryb2tlPSIjMDQwNDA0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz4NCjwvc3ZnPg0K')]"
                    : ""
                } 
                
             ${className}`}
        {...rest}
      >
        {children}
      </select>
      {errorMessage && (
        <p className="inline-block px-2 py-2 rounded-[8px] bg-[#FFCECE] text-[#A90000] text-[16px] leading-[22px] font-['PT-Root-UI'] mt-2">
          {errorMessage}
        </p>
      )}
    </Fragment>
  );
};
