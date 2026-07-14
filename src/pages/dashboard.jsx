import { FaBell, FaEye, FaPlus, FaChartBar } from "react-icons/fa";
import { IoFileTrayOutline } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CurrentBalanceCard from "../components/CurrentBalanceCard";
import SummaryCard from "../components/SummaryCard";
import { transactions } from "../constants/transaction";
import Transactions from "../components/Transactions";
import Header from "../components/Header";

export default function Dashboard() {
  return (
    <div className="w-full flex flex-col p-2">
      <Header />
      <CurrentBalanceCard />
      <SummaryCard />
      <Transactions />
    </div>
  );
}
