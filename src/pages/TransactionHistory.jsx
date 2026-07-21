import { FaBell, FaEye, FaPlus, FaChartBar } from "react-icons/fa";
import { IoFileTrayOutline } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { Link, useSearchParams } from "react-router-dom";
import { today, yesterday } from "../constants/history";
import TransactionCard from "../components/TransactionCard";
import BackButton from "../components/BackButton";
import PageHeader from "../components/PageHeader";
import { useNavigate } from "react-router-dom";
import TransactionService from "../apis/transaction";
import { useEffect, useState } from "react";

export default function TransactionHistory() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    async function getAllTransactions() {
      try {
        const result = await TransactionService.getTransactions();
        setTransactions(result.response.transactions || []);
      } catch (error) {
        console.error(error);
      }
    }
    getAllTransactions();
  }, []);

  const navigate = useNavigate();

  const handleDetails = (id) => {
    navigate(`/details/${id}/edit`);
  };

  return (
    <div className="w-full bg-[var(--bg)] flex flex-col justify-center relative">
      <div className="w-full p-4 mt-2 m-auto relative">
        <div className="w-69.25 h-9 px-6 m-auto justify-around flex items-center">
          <div className="rounded-lg py-1 p-4 bg-[var(--color-brand)] text-[12px] text-white flex justify-around items-center  ">
            All
          </div>
          <div className="w-19 h-9 rounded-lg py-0.5 px-4 bg-[var(--surface-2)] text-[12px] text-[var(--text)] flex justify-around items-center  ">
            Income
          </div>
          <div className="w-20.25 h-9 rounded-lg py-0.5 px-4 bg-[var(--surface-2)] text-[12px] text-[var(--text)] flex justify-around items-center  ">
            Expense
          </div>
        </div>

        {/* Transactions */}
        <div className="mt-6 space-y-2 overflow-auto">
          <div className="flex flex-col items-center w-full mx-auto mb-3 justify-between">
            <h2 className="font-semibold text-[14px] ">Today</h2>
          </div>

          {transactions.length == 0 ? (
            <div className="w-full h-75 text-gray-400 flex justify-center text-center items-center border border-dashed rounded-[10px]">
              No transactions yet
            </div>
          ) : (
            <>
              {transactions.map((item, index) => (
                <div
                  key={index}
                  onClick={() => handleDetails(item.id)}
                  className="cursor-pointer transition-transform hover:scale-[1.02]"
                >
                  <TransactionCard transaction={item} key={index} />
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
