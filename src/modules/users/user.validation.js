import Joi from "joi";

const userValidationSchema = Joi.object({
  name: Joi.string().min(3).max(15).required(),
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(new RegExp("^[A-Z][a-z0-9]{7,20}$"))

    .required(),
  repassword: Joi.ref("password"),
  age: Joi.number().min(9).max(90).required(),
});

const userLogInSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string()
    .pattern(new RegExp("^[A-Z][a-z0-9]{7,20}$"))
    .required(),
});

const updateUserValidationSchema = Joi.object({
  name: Joi.string().min(3).max(15).optional(),
  email: Joi.string().email().optional(),
  password: Joi.string()
    .pattern(new RegExp("^[A-Z][a-z0-9]{7,20}$"))

    .optional(),
  repassword: Joi.ref("password"),
  age: Joi.number().min(9).max(90).optional(),
});

export { userValidationSchema, userLogInSchema, updateUserValidationSchema };
