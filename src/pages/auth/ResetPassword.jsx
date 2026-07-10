import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FaRegEyeSlash } from "react-icons/fa";
import { resetPasswordSchema } from "../../libs/validators/auth";

export default function ResetPasswordPage() {
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [errorMessages, setErrorMessages] = React.useState({});

  function handleSubmit(e) {
    e.preventDefault();

    const { error, value } = resetPasswordSchema.validate({
      password,
      confirmPassword,
    });

    if (error) {
      // Handle validation errors
      const errorMessages = error.details.reduce((acc, curr) => {
        acc[curr.path[0]] = curr.message;
        return acc;
      }, {});

      setErrorMessages(errorMessages);
      return;
    }
    // Add your password reset logic here
  }

  return (
    <div className="p-4">
      <div>
        <BsArrowLeft className="text-[30px] mb-4" />
        <h1 className="font-bold text-[25px] mb-4">Create A New Password</h1>
        <p className="text-[14px] text-center mb-4">
          Your new password must not be the same as the previous used password.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <div className="">
          <label htmlFor="password" className="block text-xl">
            Password
          </label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 w-full h-10 rounded-[10px] outline-none bg-[#F0F0F0]"
          />
          <FaRegEyeSlash />
        </div>
        {errorMessages.password && (
          <span className="block mb-1 text-[13px] text-red-500">
            Password must be 8 characters
          </span>
        )}

        <div className="">
          <label htmlFor="confirmPassword" className="block text-xl">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="p-2 w-full h-10 rounded-[10px] outline-none bg-[#F0F0F0]"
          />
          <FaRegEyeSlash />
        </div>
        {errorMessages.confirmPassword && (
          <span className="block mb-1 text-[13px] text-red-500">
            Both passwords must match.
          </span>
        )}

        <button className="border bg-[#52C218] text-[#FFFFFF] w-full h-15 p-2 rounded-[10px] ">
          Reset Password
        </button>
      </form>
    </div>
  );
}
