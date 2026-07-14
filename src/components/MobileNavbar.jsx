import React from "react";
import { NavLink } from "react-router-dom";
import { navItems } from "../constants";

export default function MobileNavbar() {
  return (
    <footer className="fixed left-0 right-0 bottom-0 z-40 w-full h-16 bg-background">
      <div className="w-full flex justify-between items-center mx-auto p-4">
        {navItems.map(({ name, path, icon: Icon }) => (
          <NavLink
            key={path}
            to={path}
            className={({ isActive }) =>
              `flex flex-col items-center ${
                isActive ? "text-brand" : "text-gray-400"
              }`
            }
          >
            <Icon size={22} />
            <span className="text-[10px]">{name}</span>
          </NavLink>
        ))}
      </div>
    </footer>
  );
}
