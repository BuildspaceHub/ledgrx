import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signupSchema } from "../../libs/validations/auth";
import formatErrorMessages from "../../libs/formatters/auth";
import { CiLock, CiMail, CiUser } from "react-icons/ci";
import { FiLoader } from "react-icons/fi";
import FormField from "../../components/FormField";
import Button from "../../components/Button";

export default function SignUp() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    fullname: "",
  });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

    const { error } = signupSchema.validate(formData, { abortEarly: false });

    if (error) {
      const validationErrors = formatErrorMessages(error);
      console.log(validationErrors);
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }

    setFormData({ fullName: "", email: "", password: "" });
    navigate("/dashboard");
  };
  return (
    <div className="p-5 min-h-dvh flex items-center justify-center">
      <div className="w-full max-w-150">
        <div className="text-center mb-5.25">
          <h1 className=" text-3xl font-semibold mb-3">
            Join us on Ledgr<span className="text-brand">X</span>!
          </h1>
          <p className="text-sm">
            Fill your information below, or register up with your social
            account.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="mb-6">
          <div className="flex flex-col gap-1.5">
            <FormField
              label="Fullname"
              name="fullname"
              type="text"
              placeholder="John Doe"
              value={formData.fullname}
              onChange={handleChange}
              errors={errors}
              Icon={CiUser}
            />
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
          <Button
            disabled={isLoading}
            className={`mt-6 transition-colors ${
              isLoading
                ? "bg-green-300 cursor-not-allowed"
                : "bg-brand cursor-pointer"
            }`}
          >
            {isLoading ? <FiLoader className="animate-spin" /> : "Sign up"}
          </Button>
        </form>

        <div className="flex justify-center items-center gap-1">
          <hr className="w-full" />
          <p className="text-[14px] px-1 text-nowrap">Or login in with </p>
          <hr className="w-full" />
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
              <span className="text-brand ml-1">Log In</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
