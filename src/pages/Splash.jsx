import React from "react";
import { useEffect } from "react";

export default function Splash() {
  // useEffect(() => {
  //   setTimeout(() => {
  //     window.location.href = "/onboarding";
  //   }, 4000);
  // }, []);

  return (
    <div className="bg-background min-h-screen flex justify-center items-center flex-col gap-5">
      <h3 className="text-3xl font-poppins font-normal md:text-5xl">
        Ledgr
        <span className="text-brand text-4xl animate-pulse md:text-7xl">X</span>
      </h3>
    </div>
  );
}
