import { useState } from "react";
import BackButton from "../../components/BackButton";
import { forgotPasswordSchema } from "../../libs/validators/auth";
import FormatErrorMessages from "../../libs/formatters/auth";
import { MdEmail } from "react-icons/md";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState({});

  function requestPasswordLink(e) {
    e.preventDefault();
    setError({});
    // validate email
    const { error } = forgotPasswordSchema.validate({ email });
    console.log(error.details);

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
          <div>
            <label htmlFor="email" className="block font-medium mb-1">
              Your Email Account
            </label>
            <div
              className={`flex items-center rounded-[10px] bg-[#D9D9D9] overflow-hidden ${error["email"] ? "outline-1 outline-error" : ""} focus:outline-2 focus:outline-brand`}
            >
              <MdEmail className="size-6 mx-2 text-brand" />
              <input
                id="email"
                type="email"
                value={email}
                placeholder="johndoe@example.com"
                className={`w-full h-12.5 pr-4 pl-1 outline-0`}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <span className="text-error text-[12px]">{error["email"]}</span>
          </div>

          <button className="w-full h-12.5 rounded-[10px] px-4 py-5 flex justify-center items-center bg-brand text-white">
            Request Link
          </button>
        </form>
      </div>
    </div>
  );
}
