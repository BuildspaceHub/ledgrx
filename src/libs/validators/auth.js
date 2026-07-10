import Joi from "joi";

export const forgotPasswordSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required!",
    "string.email": "Please enter a valid email",
  }),
});

export const resetPasswordSchema = Joi.object({
  password: Joi.string().min(8).required().messages({
    "string.min": "Password must be at least 8 characters long",
    "any.required": "Password is required",
  }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "any.only": "Passwords do not match",
    "any.required": "Confirm Password is required",
  }),
});
