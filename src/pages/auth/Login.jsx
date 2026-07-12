import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import joi from "joi";
import formatErrorMessages from "../../libs/formatters/auth";
import { loginSchema } from "../../libs/validations/auth";
import FormField from "../../components/FormField";
import { CiLock, CiMail } from "react-icons/ci";
import Button from "../../components/Button";
import { FiLoader } from "react-icons/fi";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isLoading) return;
    setIsLoading(true);

    const { error } = loginSchema.validate(formData, { abortEarly: false });
    if (error) {
      const validationErrors = formatErrorMessages(error);
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }
  };

  return (
    <div className="p-5 min-h-dvh flex items-center">
      <div className="w-full max-w-150">
        <div className="text-center mb-5.25">
          <h1 className=" text-3xl font-bold mb-3">Welcome Back!</h1>
          <p className="text-sm">
            Sign in to manage your expenses and stay on top of your finances.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex flex-col gap-1.5">
            <FormField
              label="Email"
              name="email"
              type="email"
              placeholder="Johndoe@example.com"
              value={formData.email}
              onChange={handleChange}
              errors={errors}
              Icon={CiMail}
            />
            <FormField
              label="Password"
              name="password"
              type="password"
              placeholder="John********"
              value={formData.password}
              onChange={handleChange}
              errors={errors}
              Icon={CiLock}
            />
          </div>
          <p className="text-start mb-6 text-sm font-normal text-brand">
            Forgot password?
          </p>
          <Button
            disabled={isLoading}
            className={`w-full transition-colors ${
              isLoading
                ? "bg-green-300 cursor-not-allowed"
                : "bg-brand cursor-pointer"
            }`}
          >
            {isLoading ? <FiLoader className="animate-spin" /> : "Log In"}
          </Button>
        </form>

        <div className="w-full flex items-center shadow-[0px_4px_4px_0px_#0000001A] gap-9 mb-3.5 justify-center rounded-[10px] bg-white">
          <a href="#" className="flex">
            <img src="/images/google.svg" alt="google" />
            <span className="text-black p-3 items-center text-sm">
              Continue with Google
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
    </div>
  );
}
