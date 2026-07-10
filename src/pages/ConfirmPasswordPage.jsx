import React, { useState } from "react";
import { forgotPasswordSchema } from "../libs/validations/auth";

export default function ConfirmPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function handleForgotPssword(e) {
    e.preventDefault();
    setError("");

    const { error } = forgotPasswordSchema.validate({ email: email });
    console.log(error.details[0].message);
    // setError(error.details[0].message);

    console.log(email);
  }

  return (
    <div className="h-screen flex items-center justify-center p-4">
      <div>
        <h2 className="text-2xl font-bold mb-6">Forgot Password</h2>
        <p className="mb-6">
          Please enter your email address. You will receive a link to create a
          new password via email
        </p>

        {/* email section */}
        <form onSubmit={handleForgotPssword}>
          <div className="mb-10">
            <label htmlFor="email" className="block font-medium mb-2">
              Email
            </label>
            <input
              id="email"
              type="text"
              value={email}
              className={`w-full h-[50px] rounded-[10px] bg-[#D9D9D9] mb-1 p-4 focus:outline-1 focus:outline-brand active:outline-1 active:outline-green-500 ${
                error ? "outline-1 outline-red-600" : "outline-0"
              }`}
              onChange={(e) => setEmail(e.target.value)}
            />
            <span className="text-error text-[12px]">{error}</span>
          </div>
          <button className="border w-full h-10 rounded-[10px] px-4 py-5 flex justify-center items-center bg-brand text-[#FFFFFF]">
            Send Link
          </button>
        </form>
      </div>
    </div>
  );
}
