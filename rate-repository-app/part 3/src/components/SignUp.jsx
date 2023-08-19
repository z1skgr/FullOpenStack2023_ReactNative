import React from "react";

import SignUpForm from "./SignUpForm";
import useSignIn from "../hooks/useSignIn";
import useSignUp from "../hooks/useSignUp";

import { useNavigate } from "react-router-native";
import { Formik } from "formik";
import * as yup from "yup";

const validationSchema = yup.object().shape({
  username: yup
    .string()
    .required("Username required")
    .min(1, "Minimum length: 1")
    .max(30, "Max length: 30"),
  password: yup
    .string()
    .required("Password required")
    .min(5, "Minimum length: 5")
    .max(50, "Max length: 50"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords do not match")
    .required("Password confirm required"),
});

const initialValues = {
  username: '',
  password: '',
  confirmPassword: '',
};

export const SignUpContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <SignUpForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const SignUp = () => {
  const [signUp] = useSignUp();
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
    const { username, password } = values;
    console.log(username, password);

    try {
         const  data  = await signUp({ username, password });
         console.log(data);
         await signIn({ username, password });
         navigate("/");
    } catch (e) {
         console.log(e);
    }
  };

  return <SignUpContainer onSubmit={onSubmit} />;
};

export default SignUp;