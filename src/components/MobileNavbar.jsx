import React from "react";
import { Link } from "react-router-dom";
import { FaChartBar } from "react-icons/fa";
import { IoFileTrayOutline, IoSettingsOutline } from "react-icons/io5";
import { TiHome } from "react-icons/ti";

export default function MobileNavbar() {
  return (
    <div className="sticky bottom-0 bg-gray-200 z-999 w-full">
      <div className="flex justify-between items-center w-full mx-auto h-18 pt-3 pb-2.5 px-4">
        <Link className="flex flex-col items-center justify-center text-green-500 w-[65.5px] h-11.5 bg-white rounded">
          <TiHome size={22} />
          <span className="text-xs">Home</span>
        </Link>

        <Link className="flex flex-col items-center justify-center text-gray-400 w-[65.5px] h-11.5 bg-white rounded">
          <FaChartBar size={22} />
          <span className="text-xs">Statistics</span>
        </Link>

        <Link
          to="/history"
          className="flex flex-col items-center justify-center text-gray-400 w-[65.5px] h-11.5 bg-white rounded"
        >
          <IoFileTrayOutline size={22} />
          <span className="text-xs">History</span>
        </Link>

        <Link className="flex flex-col items-center justify-center text-gray-400 w-[65.5px] h-11.5 bg-white rounded">
          <IoSettingsOutline size={22} />
          <span className="text-xs">Settings</span>
        </Link>
      </div>
    </div>
  );
}
