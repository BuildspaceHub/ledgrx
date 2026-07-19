import React, { useState } from "react";
import { FaEye, FaEyeSlash, FaPlus } from "react-icons/fa";

export default function CurrentBalanceCard() {
  const [showBalance, setShowBalance] = useState(false);
  return (
    <div className="w-full mt-1 items-center border bg-brand border-brand rounded-xl p-4">
      <p className="text-(--text) mb-1 text-xs">Current balance</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <h2 className="font-medium text-white leading-none text-2xl">
            {showBalance ? "₦120,000.30" : "******"}
          </h2>
          <button
            onClick={() => setShowBalance(!showBalance)}
            className="text-white"
          >
            {showBalance ? <FaEye /> : <FaEyeSlash />}
          </button>
        </div>
        <div className="w-9 h-9 rounded-full bg-surface-2 text-brand flex justify-center items-center">
          <FaPlus />
        </div>
      </div>
    </div>
  );
}
