import React from "react";
import { useEffect, useState } from "react";
import TransactionService from "../apis/transaction";

export default function TransactionCard({ transaction }) {
  
  return (
    <div
      className="w-full flex justify-between items-center bg-[var(--surface-2)] p-2.5 rounded-lg"
      key={transaction.id}
    >
      <div className="flex flex-col">
        <span className="font-medium text-[14px]">{transaction.title}</span>
        <span className="font-normal text-gray-400 text-[12px]">
          {transaction.date}
        </span>
      </div>
      <span
        className={`font-medium text-sm ${
          transaction.transaction_type == "income"
            ? "text-[var(--color-brand)]"
            : "text-[var(--color-error)]"
        }`}
      >
        {transaction.amount}
      </span>
    </div>
  );
}
