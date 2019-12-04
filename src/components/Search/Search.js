import React from "react";
import styled from "styled-components";

const StyledSearch = styled.input`
  box-sizing: border-box;
  background: #ffffff;
  border: 1px solid #dde0e4;
  border-radius: 8px;
  background-image: url("/search.svg");
  background-position: 10px 10px;
  background-repeat: no-repeat;
  padding: 14px 20px 14px 40px;
  font-size: 14px;
  color: #afb2b6;
  &:focus {
    outline: none;
    width: 400px;
  }
`;

export default function Search() {
  return (
    <>
      <StyledSearch type="text" placeholder="Search for anything" />
    </>
  );
}
