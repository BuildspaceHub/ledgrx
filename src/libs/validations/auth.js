import Joi from "joi";

export const loginSchema = Joi.object({
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      "string.empty": "Email required",
      "string.email": "Invalid email",
    }),
  password: Joi.string().required().messages({
    "string.empty": "Password required",
  }),
});

export const forgotPasswordSchema = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required!",
    "string.email": "Please enter a valid email",
  }),
});

export const resetPasswordSchema = Joi.object({
  password: Joi.string().min(8).required().messages({
    "string.min": "Password must be at least 8 characters long",
    "string.empty": "Password is required",
  }),
  confirmPassword: Joi.string().valid(Joi.ref("password")).required().messages({
    "string.only": "Passwords do not match",
    "string.empty": "Confirm Password is required",
  }),
});
