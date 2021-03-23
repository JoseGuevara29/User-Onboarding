// Here goes the schema for the form
import * as yup from "yup";

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .required("Username is required, please fill out.")
    .min(3, "Username must be 3 characters long"),
  email: yup
    .string()
    .email("Must be a valid email address")
    .required("Email is required"),
  password: yup.string().required("Password is required"),
  terms: yup.boolean(),
});

export default formSchema;
