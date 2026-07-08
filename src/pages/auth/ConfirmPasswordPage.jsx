import React from "react";

export default function ConfirmPasswordPage() {
  return (
    <div className="h-screen flex items-center justify-center p-4">
      <div>
        <h2 className="text-2xl font-bold mb-6">Forgot Password</h2>
        <p className="mb-6">
          Please enter your email address. You will receive a link to create a
          new password via email
        </p>

        {/* email section */}
        <div>
          <span className="block font-medium mb-4">Email</span>
          <input
            type="email"
            className="w-full h-8 rounded-xl bg-[#D9D9D9] mb-20 p-4 outline-0"
          />
        </div>

        <button className="border w-full h-8 rounded-2xl px-4 py-5 flex justify-center items-center bg-[#02AC33] text-[#FFFFFF]">
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
