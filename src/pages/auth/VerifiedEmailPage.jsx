import React from "react";
import Button from "../../components/Button";

export default function VerifiedEmailPage() {
  return (
    <div className="min-h-screen p-5">
      {/* image */}
      <div className="w-25 h-25 mx-auto bg-[#55B7220F] rounded-2xl gap-2 p-5 mt-5">
        <img src="/images/Group.png" alt="hurray" />
      </div>
      {/* content */}
      <div className="mt-4 flex flex-col mb-6">
        <h1 className="text-center font-semibold text-[24px] mb-4">
          Email Verified!
        </h1>
        <p className="text-[14px] text-center line-heigth:1 mb-1">
          Your email has been verified successfully. Your account is now ready
          to use
        </p>
      </div>
      {/* button */}
      <Button>Go to dashboard</Button>
    </div>
  );
}
