import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { resetPasswordSchema } from "../../libs/validators/auth";
import { HiOutlineLockClosed } from "react-icons/hi";
import formatErrorMessages from "../../libs/formatters/auth";

export default function ResetPasswordPage() {
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = React.useState(false);
  const [error, setError] = React.useState({});

  function handleSubmit(e) {
    e.preventDefault();

    const { error } = resetPasswordSchema.validate({
      password,
      confirmPassword,
    });

    if (error) {
      const errors = formatErrorMessages(error);
      console.log(errors);
      setError(errors);
      return;
    }
  }

  return (
    <div className="min-h-dvh p-4">
      <BsArrowLeft className="text-[30px] mb-10" />
      <div>
        <h1 className="font-bold text-[25px] mb-4">Create A New Password</h1>
        <p className="text-[14px] text-center mb-4">
          Your new password must not be the same as the previous used password.
        </p>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="password" className="block font-medium mb-1">
            New Password
          </label>
          <div
            className={`relative flex items-center rounded-[10px] bg-[#D9D9D9] overflow-hidden ${error?.email ? "outline-1 outline-error" : ""} focus:outline-2 focus:outline-brand`}
          >
            <HiOutlineLockClosed className="size-6 mx-2 text-brand" />
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              value={password}
              placeholder="johndoe@example.com"
              className={`w-full h-12.5 pr-4 pl-1 outline-0`}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              type="button"
              className="absolute right-1 top-1/2 -translate-1/2"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
          <span className="text-error text-[12px]">{error?.password}</span>
        </div>
        <div>
          <label htmlFor="password" className="block font-medium mb-1">
            Confirm Password
          </label>
          <div
            className={`relative flex items-center rounded-[10px] bg-[#D9D9D9] overflow-hidden ${error?.confirmPassword ? "outline-1 outline-error" : ""} focus:outline-2 focus:outline-brand`}
          >
            <HiOutlineLockClosed className="size-6 mx-2 text-brand" />
            <input
              id="password"
              type="password"
              value={confirmPassword}
              placeholder="johndoe@example.com"
              className={`w-full h-12.5 pr-4 pl-1 outline-0`}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              type="button"
              className="absolute right-1 top-1/2 -translate-1/2"
            >
              {showCurrentPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
          <span className="text-error text-[12px]">
            {error?.confirmPassword}
          </span>
        </div>

        <button className="border bg-brand text-background w-full h-12.5 p-2 rounded-[10px] ">
          Reset Password
        </button>
      </form>
    </div>
  );
}
