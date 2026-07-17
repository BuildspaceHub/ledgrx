import { useState } from "react";
import { CiMail } from "react-icons/ci";
// helper
import FormatErrorMessages from "../../libs/formatters/auth";
import { forgotPasswordSchema } from "../../libs/validations/auth";
import { handleChange } from "../../libs/utils";
// shared uis
import BackButton from "../../components/BackButton";
import FormField from "../../components/FormField";
import Button from "../../components/Button";
import { RiLoader4Fill } from "react-icons/ri";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  function handleChange(e) {
    setEmail(e.target.value);
    setErrors({});
  }

  function requestPasswordLink(e) {
    e.preventDefault();
    try {
      if (isLoading) return;
      setIsLoading(true);
      setErrors({});

      const { error } = forgotPasswordSchema.validate({ email });
      if (error) {
        const formattedError = FormatErrorMessages(error);
        setErrors(formattedError);
        setIsLoading(false);
        return;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-dvh p-5">
      <BackButton />
      <div className="mt-4">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-4">Forgot Password</h2>
          <p className="text-sm">
            Please enter your email address. You will receive a link to create a
            new password via email
          </p>
        </div>
        <form onSubmit={requestPasswordLink} className="flex flex-col gap-2">
          <FormField
            type="email"
            placeholder="Johndoe@example.com"
            name="email"
            label="Email address"
            value={email}
            errors={errors}
            onChange={handleChange}
            Icon={CiMail}
          />
          <Button
            disabled={isLoading}
            className={`transition-colors ${
              isLoading
                ? "bg-brand-700 cursor-not-allowed"
                : "bg-brand cursor-pointer"
            }`}
          >
            {isLoading ? (
              <span>
                <RiLoader4Fill className="inline text-2xl mr-1 animate-spin" />
                Sending...
              </span>
            ) : (
              "Request Link"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
