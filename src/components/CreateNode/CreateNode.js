import React from "react";
import styled from "styled-components";
import InputForm from "./InputForm";

const StyledCreateNode = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
`;

export default function CreateNode() {
  return (
    <>
      <StyledCreateNode>
        <InputForm />
      </StyledCreateNode>
    </>
  );
}
