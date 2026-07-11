import { Link } from "react-router-dom";
import { useState } from "react";
import { z } from "zod";

const signupSchema = z.object({
  fullName: z.string().min(1, "Fullname required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z
    .string()
    .min(8, "Password is too short. Minimum length is 8 characters"),
});

function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullName: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const result = signupSchema.safeParse(formData);
    if (!result.success) {
      setErrors(result.error.flatten((issue) => issue.message).fieldErrors);
      setSuccessMessage("");
      return;
    }

    setErrors({});
    setSuccessMessage("Sign-up successful! Welcome aboard.");
    setFormData({ fullName: "", email: "", password: "" });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-23.25 px-10 w-[384px] ">
        <p className=" text-2xl font-semibold text-center pb-4">Sign Up</p>
        <div className="flex justify-center pb-5.25">
          <p className="text-sm text-center w-61.5">
            Fill your information below, or register up with your social
            account.
          </p>
        </div>
        {successMessage && (
          <div className="bana" style={{ color: "green", padding: "10px" }}>
            {successMessage}
          </div>
        )}

        <div className="flex  flex-col pb-4 min-h-21.25">
          <label className="text-start text-sm pb-1">Fullname</label>

          <input
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className={`p-2 w-full bg-[#D9D9D9] text-base outline-none rounded-lg border ${
              errors.fullName ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="John Doe"
          />

          {errors.fullName && (
            <span className="text-red-600 text-xs mt-1">
              {errors.fullName[0]}
            </span>
          )}
        </div>
        <div className="flex flex-col mb-4  ">
          <label className="text-start pb-1 text-sm">Email</label>

          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={`p-2 w-full bg-[#D9D9D9] text-base outline-none rounded-lg border ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="johndoe@email.com"
          />
          {errors.email && (
            <span className="text-red-600 text-xs mt-1">{errors.email[0]}</span>
          )}
        </div>
        <div className="flex flex-col mb-4 min-h-21.25 ">
          <label className="text-start pb-1 text-sm">Password</label>

          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className={`p-2 w-full bg-[#D9D9D9] text-base outline-none rounded-lg border ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="********"
          />
          {errors.password && (
            <span className="text-red-600 text-xs mt-1">
              {errors.password[0]}
            </span>
          )}
        </div>

        <div className="w-full cursor-pointer text-center rounded-[10px] mb-6 bg-green-500">
          <button className="text-white p-3 items-center text-sm">
            Sign up{" "}
          </button>
        </div>

        <div className="flex justify-center items-center">
          <hr className="w-17.5" />
          <p className="text-[14px] px-1">Or login in with </p>
          <hr className="w-17.5" />
        </div>

        <div className="flex items-center w-full mt-6 gap-4  justify-center">
          <a href="#" className="text-black  text-sm">
            <img
              className="w-7.5 h-7.5"
              src="/images/google.svg"
              alt="google"
            />
          </a>

          <a href="#" className=" text-black  text-sm">
            <img className="w-7.5 h-7.5" src="/images/apple.svg" alt="apple" />
          </a>
        </div>

        <div className="mt-4 text-center">
          <p className="text-sm font-normal">
            Already have an account?
            <Link to="/auth/login">
              <span className="text-green-500 ml-1">Log In</span>
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default SignUp;
