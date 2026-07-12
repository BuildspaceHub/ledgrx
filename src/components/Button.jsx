import React from "react";
import { cn } from "../libs/utils";

export default function Button({ children, className, ...props }) {
  return (
    <button
      className={cn(
        `bg-brand w-full h-12.5 flex items-center justify-center rounded-[10px] font-semibold text-[14px] text-white shadow-sm shadow-[#000000]/10`,
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}
