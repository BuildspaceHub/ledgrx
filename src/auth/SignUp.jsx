function SignUp() {
  return (
    <main>
      <div className="mt-23.25 px-10">
        <p className=" text-2xl font-semibold pb-4">Sign Up</p>
        <div className="flex justify-center pb-5.25">
          <p className="text-sm w-61.5">
            Fill your information below, or register up with your social
            account.
          </p>
        </div>
        <div className="flex flex-col pb-4">
          <label className="text-start text-sm pb-1">Fullname</label>
          <input
            className="p-2 bg-[#D9D9D9] text-base outline-none rounded-lg"
            placeholder=""
          />
        </div>
        <div className="flex flex-col mb-4  ">
          <label className="text-start pb-1 text-sm">Email</label>
          <input
            className="p-2 bg-[#D9D9D9] text-base outline-none rounded-lg"
            placeholder=""
          />
        </div>
        <div className="flex flex-col mb-4 ">
          <label className="text-start pb-1 text-sm">Password</label>
          <input
            className="p-2 bg-[#D9D9D9] text-base outline-none rounded-lg"
            placeholder=""
          />
        </div>

        <div className="w-full cursor-pointer rounded-[10px] mb-6 bg-green-500">
          <button className="text-white p-3 items-center text-sm">
            Sign up{" "}
          </button>
        </div>

        <div className="flex justify-center items-center">
          <hr className="w-17.5" />
          <p className="text-[14px] px-1">Or login in with </p>
          <hr className="w-17.5" />
        </div>

        <div className="flex justify-center">
          <button className="text-black p-3 items-center text-sm">
            <img className="w-7.5" src="/images/google.svg" alt="google" />
          </button>

          <button className=" text-black p-3 items-center text-sm">
            <img className="w-7.5" src="/images/apple.svg" alt="google" />
          </button>
        </div>
        <div className="mt-4">
          <p className="text-sm font-normal">
            Already have an account?
            <span className="text-green-500 ml-1">Log In</span>
          </p>
        </div>
      </div>
    </main>
  );
}

export default SignUp;
