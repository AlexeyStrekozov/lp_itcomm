import { FC } from "react";
import React from "react";
import * as process from "process";

export const MsgBtn: FC<{ className?: string }> = ({ className = "" }) => {
  if (process.env.NODE_ENV !== "development") return null;
  return (
    <div className="hover:opacity-60 transition-opacity ease-in-out duration-500">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="48" height="48" rx="24" fill="white" />
        <path
          d="M16.9 27.3L15 33L20.7 31.1C23.3033 32.415 26.4881 32.2626 28.9674 30.7293C31.6894 29.046 33 26.1168 33 23C32.765 18.7399 29.2601 15.2351 25 15H24.5C23.1801 14.9966 21.8781 15.305 20.7 15.9C19.2883 16.6056 18.1008 17.6903 17.2707 19.0326C16.4406 20.3749 16.0006 21.9218 16 23.5C15.9966 24.8199 16.3049 26.1219 16.9 27.3Z"
          stroke="black"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};
