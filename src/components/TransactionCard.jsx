import { Link } from "react-router-dom";
import { transactions } from "../constants/transaction";

export default function TransactionCard() {
  return (
    <div className="mt-4">
      <div className="rounded-[10px] p-2">
        <div className=" flex justify-between items-center mb-4">
          <h2 className="font-normal text-[10px] ">Transactions</h2>
          <Link to="#" className="text-[10px] ">
            View All
          </Link>
        </div>

        <div className="flex flex-col gap-4 ">
          {transactions.map((transaction) => (
            <div
              className="w-full flex justify-between items-center bg-background p-2.5 rounded-lg"
              key={transaction.id}
            >
              <div className="flex flex-col">
                <span className="font-semibold text-[14px]">
                  {transaction.title}
                </span>
                <span className="font-normal text-[12px]">
                  {transaction.date}
                </span>
              </div>

              <span
                className={`${
                  transaction.income ? "text-brand" : "text-error"
                }`}
              >
                {transaction.amount}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
