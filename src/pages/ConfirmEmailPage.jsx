import Button from "../components/Button";

export default function ConfirmEmailPage() {
  return (
    <div>
      {/* Image */}
      <div className="w-30 h-30 mx-auto mb-3">
        <img
          src="./Mail.png"
          alt="Mail illusionc:\Users\hakee\Downloads\Vector.png"
        />
      </div>
      {/* content */}
      <div className="mb-6 flex flex-col gap-4">
        <h1 className="text-[24px] font-semibold text-center">
          Confirm Your Email
        </h1>
        <p className="text-[14px]">
          We just need to verify your email address. Please confirm that{" "}
          <b>name@gmail.com</b> belongs to you to complete your account setup
        </p>
      </div>
      {/* button */}
      <Button label="Confirm email" />
      <button className="mt-5 font-normal text-[12px] text-[#FF4541]">
        Resend Link
      </button>
    </div>
  );
}
