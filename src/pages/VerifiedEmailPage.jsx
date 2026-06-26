import React from "react";
import Button from "../components/Button";

export default function VerifiedEmailPage() {
  return (
    <div>
      {/* image */}
      <div className="w-30 h-30 mx-auto">
        <img src="./Vector.png" alt="checked button" />
      </div>
      {/* content */}
      <div className="mt-4 flex flex-col mb-6">
        <h1 className="text-center font-semibold text-[24px] mb-2">
          Email Verified!
        </h1>
        <p className="text-[14px]">
          Your email has been verified successfully. Your account is now ready
          to use
        </p>
      </div>
      {/* button */}
      <Button label="Go to dashboard" />
    </div>
  );
}
