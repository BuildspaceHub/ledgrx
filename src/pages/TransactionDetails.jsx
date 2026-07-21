import { Link, useNavigate, useParams } from "react-router-dom";
import { today, yesterday } from "../constants/history";

import { FaPen } from "react-icons/fa";
import { useState } from "react";

export default function TransactionDetails() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isEditVisible, setIsEditVisible] = useState(false);

  const [amountInput, setAmountInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [typeInput, setTypeInput] = useState("Income");

  const navigate = useNavigate();

  const handleDeleteBtn = () => {
    const todayIndex = today.findIndex((item) => item.id == id);
    if (todayIndex !== -1) {
      today.splice(todayIndex, 1);
    } else {
      const yesterdayIndex = yesterday.findIndex((item) => item.id == id);
      if (yesterdayIndex !== -1) yesterday.splice(yesterdayIndex, 1);
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

  const openEditModal = () => {
    setAmountInput(cleanAmount.replace(/[^0-9]/g, ""));
    setDescriptionInput(transaction.description);
    setCategoryInput(transaction.category);
    setTypeInput(
      transaction.transaction_type?.toLowerCase() === "expense"
        ? "Expense"
        : "Income"
    );
    setIsEditModalOpen(true);
    requestAnimationFrame(() => setIsEditVisible(true));
  };

  const closeEditModal = () => {
    setIsEditVisible(false);
    setTimeout(() => setIsEditModalOpen(false), 300);
  };

  const handleAmountChange = (e) => {
    const onlyNums = e.target.value.replace(/[^0-9]/g, "");
    setAmountInput(onlyNums);
  };

  const previewSign = typeInput === "Expense" ? "-" : "+";

  const handleSaveChanges = () => {
    if (amountInput.trim() === "") return;
    transaction.amount = `${previewSign}₦${Number(
      amountInput
    ).toLocaleString()}`;
    transaction.description = descriptionInput;
    transaction.category = categoryInput;
    transaction.transaction_type = typeInput.toLowerCase();
    closeEditModal();
  };

  return (
    <div className="p-4">
      <div className="bg-[#FFFFFF80] rounded-lg mb-8.5 p-3">
        <div className="grid grid-cols-3 w-full max-w-md mx-auto  items-center ">
          <div />
          <p className="text-[16px] font-semibold text-center">
            {transaction.title}
          </p>
          <div className="flex items-center gap-2 text-green-500 justify-end">
            <button
              onClick={openEditModal}
              className="flex items-center gap-1 text-green-500 cursor-pointer"
            >
              Edit
              <FaPen />
            </button>
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

      {isEditModalOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-center bg-black/40 backdrop-blur-sm">
          <div
            className={`bg-[#F1F2F4] rounded-t-3xl w-full max-w-md shadow-xl transition-transform duration-300 ease-out ${
              isEditVisible ? "translate-y-0" : "translate-y-full"
            }`}
          >
            <div className="flex gap-3 px-5 pt-5 pb-4">
              <button
                onClick={closeEditModal}
                className="text-gray-700 text-2xl leading-none cursor-pointer"
              >
                &times;
              </button>
              <h3 className="text-lg font-bold text-gray-900">
                Editing Transaction
              </h3>
              <div className="w-5" />
            </div>

            <div className="px-4 pb-5">
              <div className="bg-white rounded-2xl p-5 mb-4 text-center shadow-sm">
                <div className="grid grid-cols-[1fr_auto_1fr] items-center">
                  <p className="text-xs text-gray-400 justify-self-start">
                    Preview
                  </p>
                  <p className="text-sm font-semibold text-gray-900 justify-self-center col-start-2">
                    {transaction.title}
                  </p>
                  <div />
                </div>
                <p
                  className={`text-3xl font-bold mt-1 ${
                    previewSign === "-" ? "text-red-500" : "text-[#16A34A]"
                  }`}
                >
                  {previewSign}₦
                  {amountInput ? Number(amountInput).toLocaleString() : "0"}
                </p>
                <p className="text-sm text-gray-500 mt-1">{typeInput}</p>
                <div className="flex gap-1 justify-center text-xs text-gray-400">
                  <p>{transaction.date}</p>
                  &bull;
                  <p>{transaction.time}</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-5 mb-5 shadow-sm">
                <p className="text-base font-bold text-gray-900 mb-4">
                  Transaction Detail
                </p>

                <label className="text-xs text-gray-400">Amount</label>
                <input
                  type="text"
                  inputMode="numeric"
                  value={amountInput}
                  onChange={handleAmountChange}
                  placeholder="0"
                  className="w-full mt-1 mb-4 border border-green-500 rounded-full px-3 py-2.5 text-sm text-gray-900 focus:outline-none focus:ring-1 focus:ring-green-500"
                />

                <label className="text-xs text-gray-400">Description</label>
                <input
                  type="text"
                  value={descriptionInput}
                  onChange={(e) => setDescriptionInput(e.target.value)}
                  className="w-full mt-1 mb-4 bg-transparent border-b border-gray-200 pb-2 text-sm text-gray-800 focus:outline-none focus:border-green-500"
                />

                <label className="text-xs text-gray-400">Category</label>
                <input
                  type="text"
                  value={categoryInput}
                  onChange={(e) => setCategoryInput(e.target.value)}
                  className="w-full mt-1 mb-5 bg-transparent border-b border-gray-200 pb-2 text-sm text-gray-800 focus:outline-none focus:border-green-500"
                />

                <label className="text-xs text-gray-400">
                  Transaction Type
                </label>
                <div className="flex mt-2">
                  <div className="border flex gap-2 rounded-full py-2 px-3 border-[#9D9D9D80]">
                    <button
                      type="button"
                      onClick={() => setTypeInput("Income")}
                      className={` text-center p-2  rounded-full text-sm font-semibold transition-colors ${
                        typeInput === "Income"
                          ? "bg-[#16A34A] text-white"
                          : "bg-white text-[#6B7280]"
                      }`}
                    >
                      Income
                    </button>
                    <button
                      type="button"
                      onClick={() => setTypeInput("Expense")}
                      className={` text-center p-2  rounded-full text-sm font-semibold transition-colors ${
                        typeInput === "Expense"
                          ? "bg-[#16A34A] text-white"
                          : "bg-white text-[#6B7280]"
                      }`}
                    >
                      Expense
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={closeEditModal}
                  className="flex-1 py-3 rounded-full bg-gray-200 text-red-500 font-semibold text-sm hover:bg-gray-300 transition-colors"
                >
                  Cancel changes
                </button>
                <button
                  onClick={handleSaveChanges}
                  className="flex-1 py-3 rounded-full bg-[#16A34A] text-white font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
