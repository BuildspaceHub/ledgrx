import Button from "../components/Button";

export default function ConfirmEmailPage() {
  return (
    <div className="p-8 min-h-screen">
      {/* Image */}
      <div className="w-30 h-30 mx-auto mb-3 mt-12 bg-[#55B7220F] rounded-2xl p-5 gap-2">
        <img src="/images/mark_email_unread.png" alt="Mail illusions" />
      </div>
      {/* content */}
      <div className="mb-6 flex flex-col gap-4">
        <h1 className="text-[24px] font-semibold text-center gap-2">
          Confirm Your Email
        </h1>
        <p className="text-[14px] text-center line-height:1 mb-4">
          We just need to verify your email address. Please confirm that{" "}
          <b>name@gmail.com</b> belongs to you to complete your account setup
        </p>
      </div>
      {/* button */}
      <div className=" flex justify-center items-center flex-col gap-4">
        <Button label="Open Inbox" />
        <button className="mt-5 font-normal text-[12px] text-[#000000] p-4 bg-[#ffff] shadow-sm shadow-[#000000]/10 w-full rounded-[10px]">
          Resend Link
        </button>
      </div>
    </div>
  );
}
