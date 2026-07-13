import { FaEye, FaPlus, FaChartBar } from "react-icons/fa";
import {
  IoFileTrayOutline,
  IoMoonOutline,
  IoArrowBack,
  IoSettingsOutline,
} from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import { Link } from "react-router-dom";
import { IoIosArrowForward, IoMdNotificationsOutline } from "react-icons/io";
import { GoPerson } from "react-icons/go";
import { CiDollar } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { MdOutlineLogout } from "react-icons/md";
import { SunIcon, MoonIcon } from "@heroicons/react/24/solid";
import { useState } from "react";



export default function Settings() {
  return (
    <div className="bg-[#f8fafc] h-[100vh] w-full h-full flex flex-col justify-center relative">
      {/* Header */}
      <div className="w-full h-[42px] flex py-4 mt-2 bg-gray-100 justify-bottom items-center absolute sticky top-0 z-10 ">
        <div className="w-[357px] flex py-4 px-4 mx-auto bg-gray-100 justify-between items-center">
          <Link to="/" className="flex p-1 items-center gap-4 rounded-2xl">
            <IoArrowBack size={20} />

            <h2 className="font-bold text-[14px] h-4 w-fit">Settings</h2>
          </Link>
        </div>
      </div>
      <div className="w-full min-[95vh] pt-2 p-4 mt-2 m-auto bg-white relative">
        {/* Header */}

        <div className="w-[356px] rounded-2xl flex py-4 px-4 mt-4 max-w-[357px] bg-[#ffffff] shadow-md justify-between items-center">
          <div className="flex p-2 items-center wrap gap-3 rounded-2xl">
            <div className="bg-white justifu-center align-middle w-[40px] h-[40px] rounded-full">
              <img src="https://i.pravatar.cc/100" alt="profile" />
            </div>

            <div className="rounded p-1">
              <h2 className="font-bold text-[14px] h-[21px] w-[100px]">
                Hakeem Doe
              </h2>
              <p className="text-[11px] font-medium ">Hakeemdoe@gmail.com</p>
            </div>
          </div>
          <div className="bg-gray-200 rounded-full p-2">
            <IoIosArrowForward size={18} />
          </div>
        </div>

        {/* Settings */}
        <div className="mt-6 w-[356px] h-[249px]">
          <div className=" w-full mx-auto mb-[12px] justify-between">
            <h2 className="font-medium h-[24px] w-[113px] text-[16px] ">
              Other settings
            </h2>
          </div>

          <div className="flex flex-col justify-between shadow-md border border-gray-300 items-center bg-[#ffffff] p-2 rounded-2xl mb-2">
            <div className="relative w-[309px] py-3 flex justify-between items-center">
              <div className="flex justify-between items-center">
                <div className="mr-4">
                  <GoPerson className="w-[21px] h-[19px]" />
                </div>
                <p className="text-[15px] text-[#000000] w-fit h-[23px] rounded">
                  Account
                </p>
              </div>

              <span className="text-gray-400 h-5 my-1 w-[20px] items-center justify-center text-[20px] bg-white rounded">
                <IoIosArrowForward />
              </span>
              <div className="border-b-1 absolute bottom-0 left-[-24px] w-[329px] border-gray-300 "></div>
            </div>
            <div className="relative w-[309px] py-3 flex justify-between items-center">
              <div className="flex justify-between items-center">
                <div className="mr-4">
                  <IoMdNotificationsOutline className="w-[21px] h-[19px]" />
                </div>
                <p className="text-[15px] text-[#000000] w-fit h-[23px] rounded">
                  Notification
                </p>
              </div>

              <span className="text-gray-400 h-5 my-1 w-[20px] items-center justify-center text-[20px] bg-white rounded">
                <IoIosArrowForward />
              </span>
              <div className="border-b-1 absolute bottom-0 left-[-24px] w-[329px] border-gray-300 "></div>
            </div>
            <div className="relative w-[309px] py-3 flex justify-between items-center">
              <div className="flex  justify-between items-center">
                <div className="mr-4">
                  <CiDollar className="w-[21px] h-[19px]" />
                </div>
                <p className="text-[15px] text-[#000000] w-fit h-[23px] rounded">
                  Preferences
                </p>
              </div>

              <span className="text-gray-400 h-5 my-1 w-[20px] items-center justify-center text-[20px] bg-white rounded">
                <IoIosArrowForward />
              </span>
              <div className="border-b-1 absolute bottom-0 left-[-24px] w-[329px] border-gray-300 "></div>
            </div>
            <div className="relative w-[309px] py-3 flex justify-between items-center">
              <div className="flex justify-between items-center">
                <div className="mr-4">
                  <IoMoonOutline className="w-[21px] h-[19px]" />
                </div>
                <p className="text-[15px] text-[#000000] w-fit h-[23px] rounded">
                  Dark mode
                </p>
              </div>

                {/* dark mode toggle */}
              <div className="h-[24px] my-1 w-[40px] px-1 flex justify-start items-center text-[20px] bg-[#1e1e1e] rounded-3xl">
        
                <div className="dark w-[18px] h-[18px] bg-[#ffffff] rounded-2xl border cursor-pointer ">
                     
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col mt-8 justify-between shadow-md border border-gray-300 items-center bg-[#ffffff] p-2 rounded-2xl mb-2">
          <div className="relative w-[309px] py-3 flex justify-between items-center">
            <div className="flex justify-between items-center">
              <div className="mr-4">
                
                <GoPerson className="w-[21px] h-[19px]" />
              </div>
              <p className="text-[15px] text-[#000000] w-fit h-[23px] rounded">
                About
              </p>
            </div>

            <span className="text-gray-400 h-5 my-1 w-[20px] items-center justify-center text-[20px] bg-white rounded">
              <IoIosArrowForward />
            </span>
            <div className="border-b-1 absolute bottom-0 left-[-24px] w-[329px] border-gray-300 "></div>
          </div>
          <div className="relative w-[309px] py-3 flex justify-between items-center">
            <div className="flex justify-between items-center">
              <div className="mr-4">
                <BiSupport className="w-[21px] h-[19px]" />
              </div>
              <p className="text-[15px] text-[#000000] w-fit h-[23px] rounded">
                Notification
              </p>
            </div>

            <span className="text-gray-400 h-5 my-1 w-[20px] items-center justify-center text-[20px] bg-white rounded">
              <IoIosArrowForward />
            </span>
            <div className="border-b-1 absolute bottom-0 left-[-24px] w-[329px] border-gray-300 "></div>
          </div>
          <div className="relative w-[309px] py-3 flex justify-between items-center">
            <div className="flex  justify-between items-center">
              <div className="mr-4">
                <MdOutlineLogout className="w-[21px] text-[#ED4040] h-[19px]" />
              </div>
              <p className="text-[15px] text-[#ED4040] w-fit h-[23px] rounded">
                Log out
              </p>
            </div>

            <span className="text-gray-400 h-5 my-1 w-[20px] items-center justify-center text-[20px] bg-white rounded">
              <IoIosArrowForward />
            </span>
            <div className="border-b-1 absolute bottom-0 left-[-24px] w-[329px] border-gray-300 "></div>
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute sticky bottom-[0px] bg-white z-999 w-full">
        <div className="flex justify-between items-center w-full mx-auto h-[72px] pt-[12px] pb-[10px] px-[16px]">
          <Link
            to="/dashboard"
            className="flex flex-col items-center justify-center text-gray-400 w-[65.5px] h-[46px] bg-white rounded"
          >
            <TiHome size={22} />
            <span className="text-xs">Home</span>
          </Link>

          <Link
            to="/dashboard/statistics"
            className="flex flex-col items-center justify-center text-gray-400 w-[65.5px] h-[46px] bg-white rounded"
          >
            <FaChartBar size={22} />
            <span className="text-xs">Statistics</span>
          </Link>

          <Link
            to="/dashboard/history"
            className="flex flex-col items-center justify-center text-gray-400 w-[65.5px] h-[46px] bg-white rounded"
          >
            <IoFileTrayOutline size={22} />
            <span className="text-xs">History</span>
          </Link>

          <Link
            to="/dashboard/settings"
            className="flex flex-col items-center justify-center text-green-500 w-[65.5px] h-[46px] bg-white rounded"
          >
            <IoSettingsOutline size={22} />
            <span className="text-xs">Settings</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
