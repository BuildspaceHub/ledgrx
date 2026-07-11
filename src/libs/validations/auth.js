import Joi from "joi";

export const resetPasswordSchema = Joi.object({
  password: Joi.string()
    .min(8)
    .max(20)
    .message("Password must be more than 8 characters")
    .required(),
  confirmPassword: Joi.string()
    .min(8)
    .max(20)
    .message("Password must match the above inputed password")
    .required(),
});

export const forgotPasswordSchema = Joi.object({
  email: Joi.string().email().message("Please enter a valid email!").required(),
});
