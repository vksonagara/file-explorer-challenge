import React from "react";
import styled from "styled-components";

const StyledNode = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 2%;
  height: 96px;
  margin-right: 1%;
  margin-bottom: 1rem;
  flex-basis: 15%;
`;

export default function Node(props) {
  const { name, type } = props.node;
  return (
    <StyledNode>
      {type === "file" ? (
        <img src="/file.png" alt="file" />
      ) : (
        <img src="/folder.png" alt="file" />
      )}
      <div>{name}</div>
    </StyledNode>
  );
}
