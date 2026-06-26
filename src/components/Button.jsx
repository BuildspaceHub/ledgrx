import React from "react";

export default function Button({ label }) {
  return (
    <button className="bg-[#52C218] w-full h-12.5 rounded-[10px] font-normal text-[14px] text-white">
      {label}
    </button>
  );
}
