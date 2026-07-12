import React from "react";
import { Link } from "react-router-dom";
import { FaChartBar } from "react-icons/fa";
import { IoFileTrayOutline, IoSettingsOutline } from "react-icons/io5";
import { TiHome } from "react-icons/ti";

export default function MobileNavbar() {
  return (
    <div className="fixed left-0 right-0 bottom-0 bg-background z-999 w-full">
      <div className="w-full flex justify-between items-center mx-auto px-4 py-2">
        <Link className="flex flex-col items-center justify-center text-brand rounded">
          <TiHome size={22} />
          <span className="text-xs">Home</span>
        </Link>

        <Link className="flex flex-col items-center justify-center text-gray-400 rounded">
          <FaChartBar size={22} />
          <span className="text-xs">Statistics</span>
        </Link>

        <Link
          to="/history"
          className="flex flex-col items-center justify-center text-gray-400 rounded"
        >
          <IoFileTrayOutline size={22} />
          <span className="text-xs">History</span>
        </Link>

        <Link className="flex flex-col items-center justify-center text-gray-400 rounded">
          <IoSettingsOutline size={22} />
          <span className="text-xs">Settings</span>
        </Link>
      </div>
    </div>
  );
}
