import { FaBell, FaEye, FaPlus, FaChartBar } from "react-icons/fa";
import { IoFileTrayOutline } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import CurrentBalanceCard from "../components/CurrentBalanceCard";
import SummaryCard from "../components/SummaryCard";
import { transactions } from "../constants/transaction";
import TransactionCard from "../components/TransactionCard";
import MobileNavbar from "../components/MobileNavbar";
import Header from "../components/Header";

export default function Dashboard() {
  return (
    <div className="bg-gray-100 min-h-dvh w-full flex flex-col relative">
      <Header />
      <div className="w-full min-[95vh] p-2 relative">
        <CurrentBalanceCard />
        <SummaryCard />
        <TransactionCard />
        <MobileNavbar />
      </div>
    </div>
  );
}
