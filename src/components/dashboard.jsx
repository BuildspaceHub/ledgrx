import {
  FaBell,
  FaEye,
  FaPlus,
  FaHome,
  FaWallet,
  FaChartBar,
  FaCog,
} from "react-icons/fa";

const transactions = [
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
    <div className="bg-gray-100 min-h-full w-full h-full flex justify-center items-center ">
      <div className="w-full min-h-full p-4 m-auto bg-white relative">
        {/* Header */}
        <div className="w-full h-[42px] flex py-4 mt-8 bg-gray-100 justify-between items-center">
          <div className="flex p-1 items-center bg-gray-300 gap-3 rounded-2xl">
            <div className="bg-white justifu-center align-middle w-5 h-5 rounded-full">
              <img src="https://i.pravatar.cc/100" alt="profile" />
            </div>

            <div>
              <h2 className="font-bold text-[14px] h-4 w-21 bg-white rounded">
                Hi, Hakeem
              </h2>
            </div>
          </div>
          <div className="bg-gray-200 rounded-full p-2">
            <FaBell size={18} />
          </div>
        </div>

        {/* Balance */}
        <div className="w-full h-[103px] mt-4 flex justify-between items-center bg-gray-200 rounded-2xl">
          <div>
            <p className="text-gray-400">Current balance</p>

            <div className="flex items-center gap-3">
              <h1 className="text-4xl font-bold text-red-300">Balance</h1>

              <FaEye className="text-gray-400" />
            </div>
          </div>

          <button className="w-9 h-9 mr-2 text-[10px] rounded-full bg-green-500 text-white flex justify-center items-center">
            <FaPlus />
          </button>
        </div>

        {/* Income & Expense */}

        <div className="w-full h-[81px] justify-between items-center grid grid-cols-2 mt-4 rounded-2xl bg-gray-200">
          <div>
            <p className="text-gray-400">Income</p>

            <h3 className="text-green-200 font-bold text-2xl">↑ balance</h3>
          </div>

          <div className="text-right ">
            <p className="text-gray-400">Expense</p>

            <h3 className="text-red-200 font-bold text-2xl">↓ balance</h3>
          </div>
        </div>

        {/* Transactions */}

        <div className="mt-4 flex justify-between">
          <h2 className="font-normal text-[10px] ">Transactions</h2>

          <button className="text-[10px] ">View All</button>
        </div>

        <div className="mt-2 space-y-2">
          {transactions.map((item, index) => (
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

              <span className="text-green-200 h-5 w-15 bg-white rounded">
                amount
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Navigation */}

        <div className="absolute sticky bottom-[-10px] bg-gray-200 z-999 w-full h-[80px] rounded-t-2xl pt-4 px-2">
          <div className="flex justify-between items-center">
            <div className="flex flex-col items-center text-green-500 h-10 w-11 bg-white rounded"></div>

            <div className="flex flex-col items-center text-gray-400 h-10 w-11 bg-white rounded"></div>

            <button className="w-12 h-12 border-4  border-white rounded-full bg-green-500 text-[13px] text-white flex justify-center items-center shadow-lg -mt-12">
              <FaPlus size={20} />
            </button>

            <div className="flex flex-col items-center text-gray-400 h-10 w-11 bg-white rounded"></div>

            <div className="flex flex-col items-center text-gray-400 h-10 w-11 bg-white rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
