import { Link, useNavigate, useParams } from "react-router-dom";
import { today, yesterday } from "../constants/history";

import { FaPen } from "react-icons/fa";
import { useState } from "react";

export default function TransactionDetails() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const navigate = useNavigate();

  const handleDeleteBtn = () => {
    const todayIndex = today.findIndex((item) => item.id == id);
    if (todayIndex !== -1) {
      today.splice(todayIndex, 1);
    } else {
      const yesterdayIndex = yesterday.findIndex((item) => item.id == id);
      if (yesterdayIndex !== -1) yesterday.splice(yesterdayIndex);
    }
    setIsModalOpen(false);
    navigate("/history");
  };

  const transactions = [...today, ...yesterday];

  const transaction = transactions.find((item) => item.id === id);

  const isNegative = transaction.amount.startsWith("-");

  const cleanAmount = transaction.amount.replace(/^[+-]/, "");

  const detailItems = [
    { label: "Amount", value: cleanAmount },
    { label: "Description", value: transaction.description },
    { label: "Category", value: transaction.category },
    { label: "Transaction Type", value: transaction.transaction_type },
    { label: "Title", value: transaction.title },
  ];

  return (
    <div className="p-4">
      <div className="bg-[#FFFFFF80] rounded-lg mb-8.5 p-3">
        <div className="grid grid-cols-3 w-full max-w-md mx-auto  items-center ">
          <div />
          <p className="text-[16px] font-semibold text-center">
            {transaction.title}
          </p>
          <div className="flex items-center gap-2 text-green-500 justify-end">
            <Link to="..." className="...">
              Edit
            </Link>
            <FaPen />
          </div>
        </div>
        <div className="mt-2 flex flex-col justify-center">
          <p
            className={`text-3xl text-center ${
              isNegative ? "text-red-500" : "text-[#16A34A]"
            } font-semibold`}
          >
            {transaction.amount}
          </p>
          <p className="text-center text-xs font-medium text-[#6B7280]">
            {" "}
            {transaction.transaction_type}
          </p>
          <div className="flex gap-1 text-xs text-[#6B7280] justify-center">
            <p> {transaction.date}</p>
            &bull;
            <p>{transaction.time}</p>
          </div>
        </div>
      </div>

      <div className="bg-[#FFFFFF80] p-4 mb-16 rounded-lg overflow-hidden border border-gray-100">
        <p className="text-sm pb-2 font-semibold">Transaction Details</p>
        <div className="flex flex-col">
          {detailItems.map((item, index) => (
            <div key={index} className="py-3 border-b pt-6 border-gray-200">
              <p className="text-xs text-[#9D9D9D]">{item.label}</p>
              <p className="text-sm font-normal text-gray-800 mt-0.5">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="text-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="text-[#FF4540] cursor-pointer"
        >
          Delete Transaction
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-sm shadow-xl text-center">
            <h3 className="text-lg font-bold text-gray-900 mb-2">
              Delete Transaction
            </h3>
            <p className="text-sm text-gray-500 mb-6">
              Are you sure you want to delete this transaction? This action
              cannot be undone.
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setIsModalOpen(false)}
                className="flex-1 py-2.5 rounded-xl border border-gray-200 text-gray-700 font-semibold text-sm hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={handleDeleteBtn}
                className="flex-1 py-2.5 rounded-xl bg-[#FF4540] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
              >
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
