import React from "react";
import { Form, Field, Formik } from "formik";
import styled from "styled-components";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { ADD_NODE } from "../../store/types";

const StyleInputForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  font-size: 14px;
  color: #535b62;
  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .field {
    padding: 1rem;
    margin-bottom: 1rem;
    background: #ffffff;
    border: 1px solid #dde0e4;
    border-radius: 8px;
  }
  .hidden-field {
    display: none;
  }
  .button {
    padding: 1rem 0;
    background: #4ab7ff;
    border-radius: 8px;
    border: none;
    color: #ffffff;
    &:hover {
      cursor: pointer;
    }
    &:disabled {
      opacity: 0.5;
    }
  }
  .error {
    color: red;
    padding-bottom: 1rem;
  }
  .success {
    color: green;
  }
  .error-field {
    border: 1px solid red;
  }
  .type {
    display: flex;
    justify-content: center;
    padding: 1rem;
    margin-bottom: 1rem;
    .label {
      display: block;
      text-align: center;
      padding: 0.5rem 1rem;
      border: 1px solid #dde0e4;
      width: 5rem;
      &:hover {
        cursor: pointer;
      }
    }
    .left-label {
      border-right: none;
      border-radius: 8px 0 0 8px;
    }
    .right-label {
      border-left: none;
      border-radius: 0 8px 8px 0;
    }
    input[name="type"]:checked + label {
      background: #4ab7ff;
      color: white;
    }
  }
`;

const InputForm = ({ errors, touched, isSubmitting, status }) => {
  return (
    <StyleInputForm>
      <Form className="form">
        <div className="type">
          <Field
            type="radio"
            name="type"
            className="hidden-field"
            id="file"
            value="file"
          />
          <label htmlFor="file" className="left-label label">
            File
          </label>
          <Field
            type="radio"
            name="type"
            className="hidden-field"
            id="folder"
            value="folder"
          />
          <label htmlFor="folder" className="right-label label">
            Folder
          </label>
        </div>
        <Field
          type="text"
          name="name"
          placeholder="Name"
          className={`field ${touched.name && errors.name && "error-field"}`}
        />
        {touched.name && errors.name && <p className="error">{errors.name}</p>}
        <Field
          type="text"
          name="creator"
          placeholder="Creator"
          className={`field ${touched.creator &&
            errors.creator &&
            "error-field"}`}
        />
        {touched.creator && errors.creator && (
          <p className="error">{errors.creator}</p>
        )}
        <Field
          type="number"
          name="size"
          placeholder="Size"
          className={`field ${touched.size && errors.size && "error-field"}`}
        />
        {touched.size && errors.size && <p className="error">{errors.size}</p>}
        {status && status.error && <p className="error">{status.error}</p>}
        <button type="submit" className="button" disabled={isSubmitting}>
          Create
        </button>
      </Form>
    </StyleInputForm>
  );
};

const FormikInputForm = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const nodes = useSelector(state => state.tree);

  return (
    <Formik
      initialValues={{
        name: "",
        creator: "",
        size: "",
        type: "file"
      }}
      onSubmit={(values, { setSubmitting, resetForm, setStatus }) => {
        if (nodes[`${pathname}/${values.name}`]) {
          console.log("found");
          setStatus({
            error: "File/Folder name already exists"
          });
          setSubmitting(false);
        } else {
          const date = new Date();
          dispatch({
            type: ADD_NODE,
            payload: { ...values, parent: pathname, date }
          });
          setSubmitting(false);
          resetForm();
        }
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .required("Name is required")
          .max(32, "Name max length is 32 characters only."),
        creator: Yup.string()
          .required("Creator is required")
          .max(64, "Creator max length is 64 characters only."),
        size: Yup.number()
          .positive("Size must be positive")
          .required("Size is required")
      })}
      render={props => <InputForm {...props} />}
    />
  );
};

// export default withFormik({
//   mapPropsToValues: () => ({
//     name: "",
//     creator: "",
//     size: "",
//     type: "file"
//   }),
//   validationSchema: Yup.object().shape({
//     name: Yup.string().required("Name is required"),
//     creator: Yup.string().required("Creator is required"),
//     size: Yup.number()
//       .positive("Size must be positive")
//       .required("Size is required")
//   }),
//   handleSubmit: values => {}
// })(InputForm);

export default FormikInputForm;
