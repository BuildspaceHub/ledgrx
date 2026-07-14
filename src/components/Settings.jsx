import { FaChartBar } from "react-icons/fa";
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
import { useEffect, useState } from "react";
import { initTheme, toggleTheme } from "../themes/dark";

export default function Settings() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "light";
    return window.localStorage.getItem("ledgrx-theme") === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    setTheme(initTheme());
  }, []);

  const isDark = theme === "dark";

  const handleThemeToggle = () => {
    setTheme(toggleTheme());
  };

  return (
    <div className="min-h-screen w-full flex flex-col mx-auto justify-center relative bg-[var(--bg)] text-[var(--text)]">
      <div className="w-full h-[42px] flex py-4 mt-2 justify-start items-center absolute sticky top-0 z-10 bg-[var(--bg)] ">
        <div className="w-[215px] flex py-4 px-4 justify-between items-center ">
          <Link to="/dashboard" className="flex p-1 items-center gap-4 rounded-2xl text-[var(--text)]">
            <IoArrowBack size={20} />
            <h2 className="font-bold text-[14px] h-4 w-fit">Settings</h2>
          </Link>
        </div>
      </div>

      <div className="w-full flex flex-col flex-wrap min-h-[95vh] pt-2 p-4 mt-2 m-auto relative bg-[var(--bg)]">
        <div className="w-full rounded-2xl flex py-4 px-4 mt-4 shadow-md justify-between items-center bg-[var(--surface)] border border-[var(--border)]">
          <div className="flex p-2 items-center gap-3 rounded-2xl">
            <div className="justify-center align-middle w-[40px] h-[40px] rounded-full bg-[var(--surface-2)]">
              <img src="https://i.pravatar.cc/100" alt="profile" />
            </div>

            <div className="rounded p-1">
              <h2 className="font-bold text-[14px] h-[21px] w-[100px] text-[var(--text)]">Hakeem Doe</h2>
              <p className="text-[11px] font-medium text-[var(--muted)]">Hakeemdoe@gmail.com</p>
            </div>
          </div>
          <div className="rounded-full p-2 bg-[var(--surface-2)]">
            <IoIosArrowForward size={18} />
          </div>
        </div>

        <div className="flex flex-col w-full mt-4 justify-between items-center mb-2">
          <div className="w-full mx-auto mb-[12px] justify-between">
            <h2 className="font-medium h-[24px] w-[113px] text-[16px] text-[var(--text)]">Other settings</h2>
          </div>

          <div className="flex flex-col w-full mt-3 justify-between shadow-md border items-center p-2 rounded-2xl mb-2 bg-[var(--surface)] border-[var(--border)]">
            <div className="relative w-full py-3 flex justify-between items-center">
              <div className="flex justify-between items-center">
                <div className="mr-4">
                  <GoPerson className="w-[21px] h-[19px] text-[var(--text)]" />
                </div>
                <p className="text-[15px] w-fit h-[23px] rounded text-[var(--text)]">Account</p>
              </div>
              <span className="h-5 my-1 w-[20px] items-center justify-center text-[20px] rounded text-[var(--muted)] bg-[var(--surface-2)]">
                <IoIosArrowForward />
              </span>
            <div className="absolute border-b border-[var(--border)] w-[100%] left-[-10px] bottom-0 "></div>
            </div>
            <div className="relative w-full py-3 flex justify-between items-center">
              <div className="flex justify-between items-center">
                <div className="mr-4">
                  <IoMdNotificationsOutline className="w-[21px] h-[19px] text-[var(--text)]" />
                </div>
                <p className="text-[15px] w-fit h-[23px] rounded text-[var(--text)]">Notification</p>
              </div>
              <span className="h-5 my-1 w-[20px] items-center justify-center text-[20px] rounded text-[var(--muted)] bg-[var(--surface-2)]">
                <IoIosArrowForward />
              </span>
            <div className="absolute border-b border-[var(--border)] w-[100%] left-[-10px] bottom-0 "></div>
            </div>
            <div className="relative w-full py-3 flex justify-between items-center">
              <div className="flex justify-between items-center">
                <div className="mr-4">
                  <CiDollar className="w-[21px] h-[19px] text-[var(--text)]" />
                </div>
                <p className="text-[15px] w-fit h-[23px] rounded text-[var(--text)]">Preferences</p>
              </div>
              <span className="h-5 my-1 w-[20px] items-center justify-center text-[20px] rounded text-[var(--muted)] bg-[var(--surface-2)]">
                <IoIosArrowForward />
              </span>
            <div className="absolute border-b border-[var(--border)]  w-[100%] left-[-10px] bottom-0 "></div>
            </div>
            <div className="relative w-full py-3 flex justify-between items-center">
              <div className="flex justify-between items-center">
                <div className="mr-4">
                  <IoMoonOutline className="w-[21px] h-[19px] text-[var(--text)]" />
                </div>
                <p className="text-[15px] w-fit h-[23px] rounded text-[var(--text)]">Dark mode</p>
              </div>

              <div
                type="button"
                onClick={handleThemeToggle}
                className={"outer-toggle h-[24px] my-1 w-[40px] px-1 flex items-center rounded-3xl transition-all"}
                aria-label="Toggle dark mode"
              >
                <div className="inner-toggle w-[18px] h-[18px] bg-[var(--surface)] rounded-2xl border cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <div className="h-full flex flex-col mt-2 justify-between shadow-md border overflow-auto items-center p-2 rounded-2xl mb-2 bg-[var(--surface)] border-[var(--border)]">
          <div className="relative w-full py-3 flex justify-between items-center">
            <div className="flex justify-between items-center">
              <div className="mr-4">
                <GoPerson className="w-[21px] h-[19px] text-[var(--text)]" />
              </div>
              <p className="text-[15px] w-fit h-[23px] rounded text-[var(--text)]">About</p>
            </div>
            <span className="h-5 my-1 w-[20px] items-center justify-center text-[20px] rounded text-[var(--muted)] bg-[var(--surface-2)]">
              <IoIosArrowForward />
            </span>
            <div className="absolute border-b border-[var(--border)]  w-[100%] left-[-10px] bottom-0 "></div>
          </div>
          <div className="relative w-full py-3 flex justify-between items-center">
            <div className="flex justify-between items-center">
              <div className="mr-4">
                <BiSupport className="w-[21px] h-[19px] text-[var(--text)]" />
              </div>
              <p className="text-[15px] w-fit h-[23px] rounded text-[var(--text)]">Support</p>
            </div>
            <span className="h-5 my-1 w-[20px] items-center justify-center text-[20px] rounded text-[var(--muted)] bg-[var(--surface-2)]">
              <IoIosArrowForward />
            </span>
            <div className="absolute border-b border-[var(--border)]  w-[100%] left-[-10px] bottom-0 "></div>
          </div>
          <div className="relative w-full py-3 flex justify-between items-center">
            <div className="flex justify-between items-center">
              <div className="mr-4">
                <MdOutlineLogout className="w-[21px] text-[#ED4040] h-[19px]" />
              </div>
              <p className="text-[15px] text-[#ED4040] w-fit h-[23px] rounded">Log out</p>
            </div>
            <span className="h-5 my-1 w-[20px] items-center justify-center text-[20px] rounded text-[var(--muted)] bg-[var(--surface-2)]">
              <IoIosArrowForward />
            </span>
          </div>
        </div>
      </div>

      <div className="fixed left bottom-[0px] z-999 w-full bg-[var(--surface)] ">
        <div className="flex justify-between items-center w-full mx-auto h-[72px] ">
          <Link to="/dashboard" className="flex flex-col items-center justify-center text-[var(--muted)] w-[65.5px] h-[46px] rounded">
            <TiHome size={22} />
            <span className="text-xs">Home</span>
          </Link>
          <Link to="/statistics" className="flex flex-col items-center justify-center text-[var(--muted)] w-[65.5px] h-[46px] rounded">
            <FaChartBar size={22} />
            <span className="text-xs">Statistics</span>
          </Link>
          <Link to="/dashboard/history" className="flex flex-col items-center justify-center text-[var(--muted)] w-[65.5px] h-[46px] rounded">
            <IoFileTrayOutline size={22} />
            <span className="text-xs">History</span>
          </Link>
          <Link to="/dashboard/settings" className="flex flex-col items-center justify-center text-[var(--color-brand)] w-[65.5px] h-[46px] rounded">
            <IoSettingsOutline size={22} />
            <span className="text-xs">Settings</span>
          </Link>
        </div>
      </div>
    </div>
  );
}