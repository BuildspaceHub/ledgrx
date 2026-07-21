import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// Helpers
import formatErrorMessages from "../../utils/formatters/auth";
import { loginSchema } from "../../libs/validations/auth";
// Shared UIs
import FormField from "../../components/FormField";
import { CiLock, CiMail } from "react-icons/ci";
import { FiLoader } from "react-icons/fi";
import Button from "../../components/Button";
import { RiLoader4Fill } from "react-icons/ri";
import AuthService from "../../apis/auth";
import { toast } from "react-toastify";

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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (isLoading) return;
      setIsLoading(true);

      const { error } = loginSchema.validate(formData, { abortEarly: false });
      if (error) {
        const validationErrors = formatErrorMessages(error);
        setErrors(validationErrors);
        setIsLoading(false);
        return;
      }

      const data = await AuthService.loginUser(formData);
      if (data.success) {
        toast.success(data.message);
        navigate("/dashboard");
      } else {
        toast.error(data.message);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="p-5 min-h-dvh flex items-center justify-center">
      <div className="w-full max-w-150 mt-5">
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
          <Link
            to="/auth/forgot-password"
            className="block text-start mb-6 text-sm font-normal text-brand"
          >
            Forgot password?
          </Link>
          <Button
            disabled={isLoading}
            className={`transition-colors ${
              isLoading
                ? "bg-brand-700/90 cursor-not-allowed text-gray-600"
                : "bg-brand cursor-pointer"
            }`}
          >
            {isLoading ? (
              <span>
                <RiLoader4Fill className="inline text-2xl mr-1 animate-spin" />
                Logging in...
              </span>
            ) : (
              "Log In"
            )}
          </Button>
        </form>
        <div className="w-full h-12.5 flex items-center shadow-[0px_2px_4px_0px_#0000001A] gap-9 mb-3.5 justify-center rounded-[10px] bg-background">
          <a href="#" className="flex">
            <img src="/images/google.svg" alt="google" />
            <span className="text-(--text) p-3 items-center text-sm">
              Continue with Google
            </span>
          </a>
        </div>
        <div className="w-full h-12.5 rounded-[10px] shadow-[0px_2px_4px_0px_#0000001A] gap-9 flex justify-center items-center bg-background">
          <a href="#" className="flex">
            <img src="/images/apple.svg" alt="google" />
            <span className="text-(--text) p-3 items-center text-sm">
              Continue with Apple
            </span>
          </a>
        </div>
        <p className="text-xs font-normal mt-8 text-center">
          Don’t have an account?
          <Link to="/auth/signup">
            <span className="text-brand ml-1">Sign up</span>
          </Link>
        </p>
      </div>
    </div>
  );
}
