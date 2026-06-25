import React from "react";
import { useEffect } from "react";

export default function Splash() {
  useEffect(() => {
    setTimeout(() => {
      window.location.href = "/onboarding";
    }, 4000);
  }, []);
  return (
    <div className="bg-green-300 h-screen flex justify-center items-center flex-col gap-5">
      <h3>
        Ledgr
        <span className="text-white text-3xl font-bold mb-2.5 animate-slideIn">
          X
        </span>
      </h3>
    </div>
  );
}
