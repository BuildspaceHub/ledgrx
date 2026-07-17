import CurrentBalanceCard from "../components/CurrentBalanceCard";
import SummaryCard from "../components/SummaryCard";
import Transactions from "../components/Transactions";
import Header from "../components/Header";

export default function Dashboard() {
  return (
    <div className="bg-(--bg) w-full flex flex-col p-2">
      <Header />
      <CurrentBalanceCard />
      <SummaryCard />
      <Transactions />
    </div>
  );
}
