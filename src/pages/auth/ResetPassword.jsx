import React from "react";
import { CiLock } from "react-icons/ci";
// helpers
import formatErrorMessages from "../../libs/formatters/auth";
import { resetPasswordSchema } from "../../libs/validations/auth";
// shared UIs
import FormField from "../../components/FormField";
import BackButton from "../../components/BackButton";
import Button from "../../components/Button";

export default function ResetPasswordPage() {
  const [formData, setFormData] = React.useState({
    password: "",
    confirmPassword: "",
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    try {
      if (isLoading) return;
      setErrors({});
      setIsLoading(true);

      const { error } = resetPasswordSchema.validate({
        password,
        confirmPassword,
      });

      if (error) {
        const validationErrors = formatErrorMessages(error);
        setErrors(validationErrors);
        return;
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="min-h-dvh p-4">
      <BackButton />
      <div className="mt-5">
        <div className="text-center">
          <h1 className="font-bold text-[25px] mb-4">Create A New Password</h1>
          <p className="text-[14px] text-center mb-4">
            Your new password must not be the same as the previous used
            password.
          </p>
        </div>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1.5">
            <FormField
              type="password"
              label="New Password"
              placeholder="John******"
              errors={errors}
              value={formData.password}
              onChange={handleChange}
              Icon={CiLock}
            />
            <FormField
              type="password"
              label="Confirm Password"
              placeholder="John******"
              errors={errors}
              value={formData.confirmPassword}
              onChange={handleChange}
              Icon={CiLock}
            />
          </div>

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
              "Reset Password"
            )}
          </Button>
        </form>
      </div>
    </div>
  );
}
