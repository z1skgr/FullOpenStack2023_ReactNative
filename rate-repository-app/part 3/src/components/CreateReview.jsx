import React from "react";
import { Formik } from "formik";

import * as yup from "yup";
import CreateReviewForm from "./CreateReviewForm";

import { useNavigate } from "react-router-native";
import useCreateReview from "../hooks/useCreateReview";

const validationSchema = yup.object().shape({
  repositoryName: yup.string()
    .required("Repository name required"),
  ownerName: yup.string()
    .required("Repository owner name required"),
  rating: yup
    .number()
    .typeError("Must specify a number")
    .required("Rating required")
    .min(1, "Please give a number between 1 and 100")
    .max(100, "please give number between 1 and 100"),
  text: yup.string(),
});

const initialValues = {
  repositoryName: '',
  ownerName: '',
  rating: '',
  text: '',
};

export const CreateReviewContainer = ({ onSubmit }) => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit }) => <CreateReviewForm onSubmit={handleSubmit} />}
    </Formik>
  );
};

const CreateReview = () => {
  const [createReview, payload] = useCreateReview();
  const navigate = useNavigate();
  console.log(payload);

  const onSubmit = async (values) => {
    const { repositoryName, ownerName, rating, text } = values;
    try{
        const data = await createReview({repositoryName,ownerName,rating: Number(rating), text});
        console.log(data);
        navigate("/");
    }catch (e) {
        console.log(e);
    }


  };


  return <CreateReviewContainer onSubmit={onSubmit} />;
};

export default CreateReview;