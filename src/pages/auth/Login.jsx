import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import joi from "joi";

const loginSchema = joi.object({
  email: joi
    .string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "email required",
      "string.email": "invalid email",
    }),
  password: joi.string().required().messages({
    "string.empty": "password required",
  }),
});

function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLoading) return;

    setIsLoading(true);

    const { error } = loginSchema.validate(formData, { abortEarly: false });

    if (error) {
      const validationErrors = {};
      error.details.forEach((err) => {
        validationErrors[err.path[0]] = [err.message];
      });
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }

    if (
      formData.email === "johndoe@email.com" &&
      formData.password === "pass123"
    ) {
      setErrors({});
      navigate("/dashboard");
    } else {
      setErrors({ auth: ["The email or password you entered is incorrect."] });
      setIsLoading(false);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-23.25 px-10 w-[384px]">
        <p className=" text-2xl font-semibold text-center pb-4">Welcome Back</p>
        <div className="flex justify-center pb-5.25">
          <p className="text-sm text-center w-61.5">
            Sign in to manage your expenses and stay on top of your finances.
          </p>
        </div>
        <div className="flex flex-col pb-4">
          <label className="text-start text-sm pb-1">Email</label>
          <input
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className={`p-2 bg-[#D9D9D9] text-base outline-none rounded-lg border ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="johndoe@email.com"
          />
          {errors.email && (
            <span className="text-red-600 text-xs mt-1">{errors.email[0]}</span>
          )}
        </div>
        <div className="flex flex-col ">
          <label className="text-start pb-1 text-sm">Password</label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className={`p-2 bg-[#D9D9D9] text-base outline-none rounded-lg border ${
              errors.password ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="******"
          />
          {errors.password && (
            <span className="text-red-600 text-xs mt-1">
              {errors.password[0]}
            </span>
          )}
        </div>
        <p className="text-start pb-6 text-sm pt-3.25 font-normal text-green-500">
          Forgot password
        </p>

        <button
          type="submit"
          disabled={isLoading}
          className={`w-full p-3 text-sm text-white rounded-[10px] mb-6 transition-colors ${
            isLoading
              ? "bg-green-300 cursor-not-allowed"
              : "bg-green-500 cursor-pointer"
          }`}
        >
          {isLoading ? "Logging in..." : "Log In"}
        </button>
        <div className="w-full flex items-center shadow-[0px_4px_4px_0px_#0000001A] gap-9 mb-3.5 justify-center rounded-[10px]  bg-white">
          <a href="#" className="flex">
            <img src="/images/google.svg" alt="google" />
            <span className="text-black p-3 items-center text-sm">
              Continue with Google{" "}
            </span>
          </a>
        </div>
        <div className="w-full rounded-[10px] shadow-[0px_4px_4px_0px_#0000001A] gap-9 flex justify-center items-center bg-white">
          <a href="#" className="flex">
            <img src="/images/apple.svg" alt="google" />
            <span className="text-black p-3 items-center text-sm">
              Continue with Apple
            </span>
          </a>
        </div>
        <div className="mt-4 text-center">
          <p className="text-sm font-normal">
            Don’t have an account?
            <Link to="/auth/signup">
              <span className="text-green-500 ml-1">Sign up</span>
            </Link>
          </p>
        </div>
      </div>
    </form>
  );
}

export default Login;
