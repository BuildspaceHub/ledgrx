import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaPlus } from "react-icons/fa";

export default function CurrentBalanceCard() {
  const [showBalance, setShowBalance] = useState(false);
  return (
    <div className="w-full h-25.75 mt-4  items-center bg-white rounded-2xl p-4">
      <p className="text-gray-400 mb-1 text-xs">Current balance</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <h2 className="font-semibold text-black leading-none text-2xl">
            {/* # 120,000.30 */}
            {showBalance? "# 120,000.30" : "******"}
          </h2>
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="text-gray-400"
          >
            {showBalance ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        <div className="w-9 h-9 rounded-full bg-[#52C218] text-white flex justify-center items-center">
          <FaPlus />
        </div>
      </div>
    </div>
  );
}
