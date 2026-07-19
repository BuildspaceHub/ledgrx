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
import { GoPerson as GoPersonIcon } from "react-icons/go";
import { CiDollar } from "react-icons/ci";
import { BiSupport } from "react-icons/bi";
import { MdOutlineLogout, MdOutlineWbSunny } from "react-icons/md";
import { useEffect, useState } from "react";
import { LuBadgeHelp } from "react-icons/lu";
import { useThemeContext } from "../contexts/ThemeContext";

export default function SettingContent() {
  const { isDark, toggleTheme } = useThemeContext();

  const generalSettings = [
    { label: "Account", icon: <GoPersonIcon className="w-5 h-5" /> },
    {
      label: "Notification",
      icon: <IoMdNotificationsOutline className="w-5 h-5" />,
    },
    { label: "Preferences", icon: <CiDollar className="w-5 h-5" /> },
  ];

  const supportSettings = [
    { label: "About", icon: <LuBadgeHelp className="w-5 h-5" /> },
    { label: "Support", icon: <BiSupport className="w-5 h-5" /> },
    {
      label: "Log out",
      icon: <MdOutlineLogout className="w-5 h-5 text-error" />,
      isDanger: true,
    },
  ];

  return (
    <div className="w-full flex flex-col bg-(--bg) text-(--text)">
      <div className="max-w-md w-full mx-auto space-y-5">
        <div className="p-3 rounded-2xl flex shadow-sm justify-between items-center bg-(--surface) border border-(--border)">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 overflow-hidden rounded-full bg-(--surface-2)">
              <img src="https://i.pravatar.cc/100" alt="profile" />
            </div>
            <div>
              <h2 className="font-bold text-sm text-(--text)">Hakeem Doe</h2>
              <p className="text-xs text-(--muted)">Hakeemdoe@gmail.com</p>
            </div>
          </div>
          <button className="rounded-full p-2 bg-(--surface-2) hover:opacity-80 transition-opacity">
            <IoIosArrowForward size={18} />
          </button>
        </div>

        <div>
          <h2 className="font-medium text-base text-(--text) mb-3 px-1">
            Other settings
          </h2>

          <div className="flex flex-col shadow-sm border rounded-2xl bg-(--surface) border-(--border) divide-y divide-(--border) px-3">
            {generalSettings.map((item, index) => (
              <SettingRow key={index} label={item.label} icon={item.icon} />
            ))}

            <div className="py-3.5 flex justify-between items-center">
              <div className="flex items-center gap-3">
                {isDark ? (
                  <MdOutlineWbSunny className="w-5 h-5 text-(--text)" />
                ) : (
                  <IoMoonOutline className="w-5 h-5 text-(--text)" />
                )}
                <p className="text-sm font-medium text-(--text)">Dark mode</p>
              </div>

              <button
                onClick={toggleTheme}
                className={`h-6 w-11 flex items-center rounded-full p-0.5 transition-colors border duration-300 ${
                  isDark
                    ? "bg-brand border-brand"
                    : "bg-background border-foreground"
                }`}
                aria-label="Toggle dark mode"
              >
                <div
                  className={`w-4.5 h-4.5 bg-foreground rounded-full shadow-md transform transition-transform duration-300 ${
                    isDark ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col shadow-sm border rounded-2xl bg-(--surface) border-(--border) divide-y divide-(--border) px-3">
          {supportSettings.map((item, index) => (
            <SettingRow
              key={index}
              label={item.label}
              icon={item.icon}
              isDanger={item.isDanger}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function SettingRow({ label, icon, isDanger }) {
  return (
    <button className="w-full py-3.5 flex justify-between items-center group text-left outline-none">
      <div className="flex items-center gap-3">
        <span className={isDanger ? "text-error" : "text-(--text)"}>
          {icon}
        </span>
        <p
          className={`text-sm font-medium ${isDanger ? "text-error" : "text-(--text)"}`}
        >
          {label}
        </p>
      </div>
      <span className="text-lg transition-transform group-hover:translate-x-0.5 text-(--muted)">
        <IoIosArrowForward />
      </span>
    </button>
  );
}