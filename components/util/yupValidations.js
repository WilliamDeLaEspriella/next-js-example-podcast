import * as Yup from "yup";

export const firstNameValidation = Yup.string().required("First Name is required");
export const lastNameValidation = Yup.string().required("Last Name is required");
export const emailValidation = Yup.string()
  .email("Email is invalid")
  .required("Email is required");
export const passwordValidation = Yup.string()
  .min(6, "Password must be at least 6 characters")
  .required("Password is required");
export const confirmPasswordValidation = Yup.string()
  .oneOf([Yup.ref("password"), null], "Passwords must match")
  .required("Confirm Password is required");
