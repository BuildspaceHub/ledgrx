import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { HiOutlineLockClosed } from "react-icons/hi";
import formatErrorMessages from "../../libs/formatters/auth";
import FormField from "../../components/FormField";
import { resetPasswordSchema } from "../../libs/validations/auth";

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
      <div className="text-center">
        <h1 className="font-bold text-[25px] mb-4">Create A New Password</h1>
        <p className="text-[14px] text-center mb-4">
          Your new password must not be the same as the previous used password.
        </p>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
        <FormField
          type="password"
          label="New Password"
          placeholder="Enter your new password"
          error={error}
          value={password}
          onChange={setPassword}
        />
        <FormField
          type="password"
          label="Confirm Password"
          placeholder="Confrim your password"
          error={error}
          value={confirmPassword}
          onChange={setConfirmPassword}
        />

        <button className="border bg-brand text-background w-full h-12.5 p-2 rounded-[10px] ">
          Reset Password
        </button>
      </form>
    </div>
  );
}
