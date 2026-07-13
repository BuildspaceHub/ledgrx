import Button from "../../components/Button";

export default function ConfirmEmailPage() {
  return (
    <div className="min-h-dvh p-8">
      {/* Image */}
      <div className="w-25 h-25 mx-auto mb-3 mt-12 bg-[#55B7220F] rounded-2xl p-4 gap-2">
        <img src="/images/mark_email_unread.png" alt="Mail illusions" />
      </div>
      {/* content */}
      <div className="mb-6 flex flex-col gap-4">
        <h1 className="text-[24px] font-semibold text-center gap-2">
          Confirm Your Email
        </h1>
        <p className="text-[14px] text-center line-height:1 mb-4">
          We just need to verify your email address. Please confirm that
          <b>name@gmail.com</b> belongs to you to complete your account setup
        </p>
      </div>
      {/* button */}
      <div className=" flex justify-center items-center flex-col gap-4">
        <Button>Open Inbox</Button>
        <Button className="mt-2 font-normal! text-[12px] text-[#000000]! p-4 bg-background! shadow-[0px_2px_4px_#0000001A]">
          Resend Link
        </Button>
      </div>
    </div>
  );
}
