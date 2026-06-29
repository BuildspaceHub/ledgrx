import React from "react";

function Login() {
  return (
    <main>
      <div className="mt-23.25 px-10">
        <p className=" text-2xl font-semibold pb-4">welcome Back</p>
        <div className="flex justify-center pb-5.25">
          <p className="text-sm w-61.5">
            Sign in to manage your expenses and stay on top of your finances.
          </p>
        </div>
        <div className="flex flex-col pb-4">
          <label className="text-start text-sm pb-1">Email</label>
          <input
            className="p-2 bg-[#D9D9D9] text-base outline-none rounded-lg"
            placeholder=""
          />
        </div>
        <div className="flex flex-col ">
          <label className="text-start pb-1 text-sm">Password</label>
          <input
            className="p-2 bg-[#D9D9D9] text-base outline-none rounded-lg"
            placeholder=""
          />
        </div>
        <p className="text-start pb-6 text-sm pt-3.25 font-normal text-green-500">
          Forgot password
        </p>
        <div className="w-full cursor-pointer rounded-[10px] mb-6 bg-green-500">
          <button className="text-white p-3 items-center text-sm">
            Log In{" "}
          </button>
        </div>
        <div className="w-full flex items-center shadow-[0px_4px_4px_0px_#0000001A] gap-9 mb-3.5 justify-center rounded-[10px]  bg-white">
          <img src="/images/google.svg" alt="google" />
          <button className="text-black p-3 items-center text-sm">
            Continue with Google{" "}
          </button>
        </div>
        <div className="w-full rounded-[10px] shadow-[0px_4px_4px_0px_#0000001A] gap-9 flex justify-center items-center bg-white">
          <img src="/images/apple.svg" alt="google" />
          <button className="text-black p-3 items-center text-sm">
            Continue with Apple
          </button>
        </div>
        <div className="mt-4">
          <p className="text-sm font-normal">
            Don’t have an account?
            <span className="text-green-500 ml-1">Sign up</span>
          </p>
        </div>
      </div>
    </main>
  );
}

export default Login;
