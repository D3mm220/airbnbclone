import * as yup from "yup";

export const registerSchema = yup
  .object({
    name: yup.string().required().min(3).max(45),
    email: yup.string().email().required(),
    password: yup.string().min(6).max(45).required(),
    password_confirmation: yup
      .string()
      .oneOf([yup.ref("password")], "Confirm password not matched")
      .required(),
  })
  .required();

export type RegisterType = yup.InferType<typeof registerSchema>;
