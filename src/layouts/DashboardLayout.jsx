import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import MobileNavbar from "../components/MobileNavbar";

export default function DashboardLayout() {
  return (
    <div className="h-dvh flex flex-col bg-secondary overflow-hidden">
      <main
        className="flex-1 pb-16 overflow-y-auto overscroll-contain"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <Outlet />
      </main>
      <MobileNavbar />
    </div>
  );
}
