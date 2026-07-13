import { FaBell, FaEye, FaPlus, FaChartBar } from "react-icons/fa";
import { IoFileTrayOutline } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { IoArrowBack } from "react-icons/io5";
import { Link } from "react-router-dom";

const today = [
  {
    title: "Salary",
    date: "20 Jul",
    amount: "+30,000",
    income: true,
  },
  {
    title: "Transportation",
    date: "16 Jul",
    amount: "-7,200",
    income: false,
  },
  {
    title: "Food",
    date: "16 Jul",
    amount: "-11,000",
    income: false,
  },
];

const yesterday = [
  {
    title: "Salary",
    date: "20 Jul",
    amount: "+30,000",
    income: true,
  },
  {
    title: "Transportation",
    date: "16 Jul",
    amount: "-7,200",
    income: false,
  },
  {
    title: "Food",
    date: "16 Jul",
    amount: "-11,000",
    income: false,
  },
  {
    title: "Internet",
    date: "15 Jul",
    amount: "-3,000",
    income: false,
  },
  {
    title: "Medication",
    date: "11 Jul",
    amount: "-5,500",
    income: false,
  },
];

export default function Dashboard() {
  return (
    <div className="bg-gray-100 h-[100vh] w-full h-full flex flex-col justify-center relative">
      {/* Header */}
      <div className="w-full h-[42px] flex py-4 mt-40 bg-gray-100 justify-bottom items-center absolute sticky top-0 z-10 ">
        <div className="w-[357px] flex py-4 px-4 mx-auto bg-gray-100 justify-between items-center">
          <Link to="/" className="flex p-1 items-center gap-4 rounded-2xl">
            <IoArrowBack size={20} />

            <h2 className="font-bold text-[14px] h-4 w-fit">
              Transaction history
            </h2>
          </Link>
        </div>
      </div>
      <div className="w-full min-[95vh] pt-2 p-4 mt-2 m-auto bg-white relative">
        <div className="w-[277px] h-[36px] px-[24px] m-auto justify-around flex items-center">
          <div className="w-[46px] h-[36px] rounded-[8px] py-[2px] px-[16px] bg-green-400 text-[12px] text-white flex justify-around items-center  ">
            All
          </div>
          <div className="w-[76px] h-[36px] rounded-[8px] py-[2px] px-[16px] bg-[#F3F4f6] text-[12px] text-[#374151] flex justify-around items-center  ">
            Income
          </div>
          <div className="w-[81px] h-[36px] rounded-[8px] py-[2px] px-[16px] bg-[#F3F4f6] text-[12px] text-[#374151] flex justify-around items-center  ">
            Expense
          </div>
        </div>

        {/* Transactions */}
        <div className="mt-6 space-y-2 overflow-auto">
          <div className="flex flex-col items-center w-full mx-auto mb-[12px] justify-between">
            <h2 className="font-semibold text-[14px] ">Today</h2>
          </div>

          {today.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-300 p-2 rounded-2xl mb-2"
            >
              <div>
                <h3 className="font-bold text-xl h-7 text-gray-300 w-24 bg-white rounded">
                  title
                </h3>

                <p className="text-gray-200 h-5 mt-2 w-15 bg-white rounded">
                  date
                </p>
              </div>

              <div className="flex flex-col justify-between items-center gap-2">
                <span className="text-green-200 h-5 w-15 bg-white rounded">
                  amount
                </span>
                <span className="text-gray-400 h-5 w-15 bg-white rounded">
                  time
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-2 space-y-2 overflow-auto">
          <div className="flex flex-col items-center w-full mx-auto mb-[12px] justify-between">
            <h2 className="font-semibold text-[14px] ">Yesterday</h2>
          </div>
          {yesterday.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center bg-gray-300 p-2 rounded-2xl mb-2"
            >
              <div>
                <h3 className="font-bold text-xl h-7 text-gray-300 w-24 bg-white rounded">
                  title
                </h3>

                <p className="text-gray-200 h-5 mt-2 w-15 bg-white rounded">
                  date
                </p>
              </div>
              <div className="flex flex-col justify-between items-center gap-2">
                <span className="text-green-200 h-5 w-15 bg-white rounded">
                  amount
                </span>
                <span className="text-gray-400 h-5 w-15 bg-white rounded">
                  time
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute sticky bottom-[0px] bg-white z-999 w-full">
        <div className="flex justify-between items-center w-full mx-auto h-[72px] pt-[12px] pb-[10px] px-[16px]">
          <Link to="/" className="flex flex-col items-center justify-center text-gray-400 w-[65.5px] h-[46px] bg-white rounded">
            <TiHome size={22} />
            <span className="text-xs">Home</span>
          </Link>

          <Link to="/statistics" className="flex flex-col items-center justify-center text-gray-400 w-[65.5px] h-[46px] bg-white rounded">
            <FaChartBar size={22} />
            <span className="text-xs">Statistics</span>
          </Link>

          <Link to="/history" className="flex flex-col items-center justify-center text-green-500 w-[65.5px] h-[46px] bg-white rounded">
            <IoFileTrayOutline size={22} />
            <span className="text-xs">History</span>
          </Link>

          <Link to="/settings" className="flex flex-col items-center justify-center text-gray-400 w-[65.5px] h-[46px] bg-white rounded">
            <IoSettingsOutline size={22} />
            <span className="text-xs">Settings</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
