import React from "react";
import { withFormik, Form, Field } from "formik";
import styled from "styled-components";

const StyleInputForm = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .field {
    padding: 1rem;
    margin-bottom: 1rem;
  }
`;

const InputForm = () => {
  return (
    <StyleInputForm>
      <Form className="form">
        <Field type="checkbox" name="type" className="field"></Field>
        <Field type="text" name="name" placeholder="Name" className="field" />
        <Field
          type="text"
          name="creator"
          placeholder="Creator"
          className="field"
        />
        <Field type="text" name="size" placeholder="Size" className="field" />
        <Field type="date" name="date" placeholder="Date" className="field" />
        <button type="submit" className="button">
          Submit
        </button>
      </Form>
    </StyleInputForm>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    name: "",
    creator: "",
    size: "",
    date: ""
  }),
  handleSubmit: values => {
    console.log("submitted");
  }
})(InputForm);
