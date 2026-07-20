import { Link } from "react-router-dom";
import { transactions } from "../constants/transaction";
import TransactionCard from "./TransactionCard";
import { useEffect, useState } from "react";
import TransactionService from "../apis/transaction";

export default function Transactions() {
  const [transactions, setTransactions] = useState([]);
  useEffect(() => {
    async function fetchTransaction() {
      const response = await TransactionService.getRecentTransaction();

      setTransactions(response.transactions);
    }
    fetchTransaction();
  }, []);

  if (transactions.length == 0) {
    return <div className="w-full h-[300px] text-gray-100 flex justify-center text-center items-center">No transactions found</div>;
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
