import { Link } from "react-router-dom";
import TransactionCard from "./TransactionCard";
import { useEffect, useState } from "react";
import TransactionService from "../apis/transaction";
import Spinner from "./Spinner";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTransaction() {
      try {
        const response = await TransactionService.getRecentTransaction();
        setTransactions(response.transactions || []);
      } catch (error) {
        console.log(error.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchTransaction();
  }, []);

  if (isLoading) {
    return (
      <div className="w-full h-75 flex justify-center items-center text-sm text-gray-400">
        <Spinner />
      </div>
    );
  }

  if (transactions.length === 0) {
    return (
      <div className="w-full h-75 text-gray-400 flex justify-center text-center items-center border border-dashed rounded-[10px]">
        No transactions yet
      </div>
    );
  }

  return (
    <div className="mt-4">
      <div className="rounded-[10px] p-2">
        <div className=" flex justify-between items-center mb-4">
          <h2 className="font-semibold text-sm">Transactions</h2>
          <Link to="/history" className="text-xs">
            View All
          </Link>
        </div>

        <div className="flex flex-col gap-4">
          {transactions.map((transaction, i) => (
            <TransactionCard transaction={transaction} key={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
