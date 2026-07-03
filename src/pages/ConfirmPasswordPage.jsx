import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import { BsArrowLeft } from "react-icons/bs";

export default function ConfirmPasswordPage() {
  const [email, setEmail] = useState("");

  function handleEmail(e) {
    // setEmail((e) => email(e.target.value));
    // e.preventDefault();
    console.log(email);
  }

  return (
    <div className="h-screen  p-4">
      <form onChange={handleEmail}>
        <BsArrowLeft className="text-[30px] font-xl mb-4" />
        <h2 className="text-2xl font-bold mb-6 text-center">Forgot Password</h2>
        <p className="text-center mb-8">
          Please enter your email address. You will receive a link to create a
          new password via email
        </p>

        {/* email section */}
        <div>
          <span className="block font-medium">Your Email account</span>
          <input
            type="email"
            value={email}
            className="w-full h-[50px] rounded-xl bg-[#D9D9D9] mb-4 p-4 outline-0"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button className="border w-full h-[50px] rounded-2xl px-4 py-5 flex justify-center items-center bg-[#52C218] text-[#F0F0F0]">
          Submit
        </button>
      </form>
    </div>
  );
}
