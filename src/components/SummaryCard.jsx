import React from "react";

export default function SummaryCard() {
  return (
    <div className="flex justify-between items-center p-4 w-full h-20.25 rounded-2xl bg-white mt-4">
      <div>
        <p className="text-gray-400 mb-1">Income</p>
        <h2 className="text-[#16A34A] font-semibold">↑ +balance</h2>
      </div>
      <div>
        <p className="text-gray-400 mb-1">Expense</p>
        <h2 className="text-[#EF4444] font-semibold">↓ -balance</h2>
      </div>
    </div>
  );
}
