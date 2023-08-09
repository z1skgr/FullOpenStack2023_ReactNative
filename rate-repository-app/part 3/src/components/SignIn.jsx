import React from 'react';
import { Formik } from 'formik';
import SignInForm from './SignInForm';
import * as yup from 'yup';

import useSignIn from "../hooks/useSignIn";

import { useNavigate } from "react-router-native";
import { useApolloClient } from "@apollo/client";

const validationSchema = yup.object().shape({
  username: yup.string()
    .required('username is required'),
  password: yup.string()
    .required('password is required'),
});

const initialValues = {
  username: '',
  password: '',
};

const SignIn = () => {
  const [signIn] = useSignIn();
  const navigate = useNavigate();

  const onSubmit = async (values) => {
      const { username, password } = values;

      //console.log(username)
      //console.log(password)
      try {
        const  data  = await signIn({ username, password });
        navigate("/");
        console.log(data);
      } catch (e) {
        console.log(e);
      }
    };
  return (
    <Formik initialValues={initialValues}
    onSubmit={onSubmit}
    validationSchema={validationSchema}>
      {({ handleSubmit }) => <SignInForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

export default SignIn;