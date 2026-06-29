import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FaRegEyeSlash } from "react-icons/fa";

export default function CreatePasswordPage() {
  return (
    <div className="p-4">
      <div>
        <BsArrowLeft className="text-[30px] mb-4" />
        <h1 className="font-bold text-[25px] mb-4">Create A New Password</h1>
        <p className="text-[14px] text-center mb-4">
          Your new password must not be the same as the previous used password.
        </p>
      </div>

      <>
        <span className="block text-xl">Password</span>
        <div className="flex items-center bg-[#F0F0F0] p-2">
          <input
            type="password"
            className="p-2 w-full h-10 rounded-[10px] outline-none bg-[#F0F0F0]"
          />
          <FaRegEyeSlash />
        </div>
        <span className="block mb-4 text-[13px]">
          Password must be 8 characters
        </span>

        <span className="block">Confirm Password</span>
        <div className="flex items-center bg-[#F0F0F0] p-2">
          <input
            type="password"
            className="p-2 w-full h-10 rounded-[10px] outline-none bg-[#F0F0F0]"
          />
          <FaRegEyeSlash />
        </div>
        <span className="block mb-4 text-[13px]">
          Both passwords must match.
        </span>
      </>

      <button className="border bg-[#52C218] text-[#FFFFFF] w-full h-15 p-2 rounded-[10px] ">
        Reset Password
      </button>
    </div>
  );
}
