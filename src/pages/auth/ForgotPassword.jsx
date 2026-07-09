import BackButton from "../../components/BackButton";

export default function ForgotPasswordPage() {
  return (
    <div className="min-h-dvh p-5">
      <div className="mb-2">
        <BackButton />
      </div>
      <div className="flex flex-col gap-6">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
          <p className="text-sm">
            Please enter your email address. You will receive a link to create a
            new password via email
          </p>
        </div>

        <div>
          <label htmlFor="email" className="block font-medium mb-2">
            Your Email Account
          </label>
          <input
            id="email"
            type="email"
            placeholder="johndoe@example.com"
            className="w-full h-12.5 rounded-[10px] bg-[#D9D9D9] p-4 outline-0"
          />
        </div>

        <button className="w-full h-12.5 rounded-[10px] px-4 py-5 flex justify-center items-center bg-brand text-white">
          Go to Dashboard
        </button>
      </div>
    </div>
  );
}
