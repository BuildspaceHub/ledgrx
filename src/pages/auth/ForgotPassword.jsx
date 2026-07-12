import { useState } from "react";
import BackButton from "../../components/BackButton";
import FormatErrorMessages from "../../libs/formatters/auth";
import { MdEmail } from "react-icons/md";
import { forgotPasswordSchema } from "../../libs/validations/auth";
import FormField from "../../components/FormField";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  function requestPasswordLink(e) {
    e.preventDefault();
    setError("");
    const { error } = forgotPasswordSchema.validate({ email });
    const formattedError = FormatErrorMessages(error);
    setError(formattedError);
  }

  return (
    <div className="min-h-dvh p-5">
      <div className="mb-2">
        <BackButton />
      </div>
      <div className="">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
          <p className="text-sm">
            Please enter your email address. You will receive a link to create a
            new password via email
          </p>
        </div>

        <form onSubmit={requestPasswordLink} className="flex flex-col gap-6">
          <FormField
            type="email"
            placeholder="Enter your email address"
            name="email"
            label="Email address"
            value={email}
            error={error}
            onChange={setEmail}
          />

          <button className="w-full h-12.5 rounded-[10px] px-4 py-5 flex justify-center items-center bg-brand text-white">
            Request Link
          </button>
        </form>
      </div>
    </div>
  );
}
