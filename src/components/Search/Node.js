import React, { useState } from "react";
import styled from "styled-components";
import NodeInfo from "../NodeInfo/NodeInfo";
import Modal from "../Modal/Modal";

const StyledNode = styled.button`
  width: 100%;
  display: flex;
  padding: 1rem;
  background: transparent;
  border: none;
  justify-content: space-between;
  div {
    display: flex;
  }
  img {
    height: 1rem;
  }
  &:hover {
    cursor: pointer;
    background: #eeeff1;
  }
  &:focus {
    outline: none;
  }
`;

export default function Node({ node: { name, type, path } }) {
  const [infoPath, setInfoPath] = useState("");
  const handleInfoClose = () => {
    setInfoPath("");
  };
  const handleClick = () => {
    setInfoPath(path);
  };
  return (
    <>
      <StyledNode onClick={handleClick}>
        <div>
          {type === "file" ? (
            <img src="/file.png" alt="file" />
          ) : (
            <img src="/folder.png" alt="folder" />
          )}
          <p>{name}</p>
        </div>
        <p>{path}</p>
      </StyledNode>
      <Modal
        isOpen={infoPath !== ""}
        handleClose={handleInfoClose}
        title="File Info"
      >
        {infoPath !== "" && <NodeInfo path={infoPath} />}
      </Modal>
    </>
  );
}
