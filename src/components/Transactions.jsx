import { Link } from "react-router-dom";
import { transactions } from "../constants/transaction";
import TransactionCard from "./TransactionCard";

export default function Transactions() {
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
