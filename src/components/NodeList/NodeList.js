import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { values } from "lodash";
import Node from "./Node";
import Modal from "../Modal/Modal";
import CreateNode from "../CreateNode/CreateNode";

const StyledNodeList = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  flex-flow: row wrap;
  justify-content: flex-start;
  .add-node {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    margin-right: 1%;
    margin-bottom: 1rem;
    flex-basis: 15%;
    border: none;
    background: transparent;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      outline: none;
    }
  }
`;

export default function NodeList() {
  const nodes = useSelector(state => state.tree);
  const [showModal, setShowModal] = useState(false);
  const { pathname } = useLocation();
  let childNodes = [];
  if (values(nodes).filter(node => node.path === pathname).length !== 0)
    childNodes = nodes[pathname].children.map(path => nodes[path]);

  const handleAddNode = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  return (
    <>
      <StyledNodeList>
        {childNodes.map(node => (
          <Node key={node.path} node={node} />
        ))}

        <button className="add-node" onClick={handleAddNode}>
          <img src="/add.png" alt="add" />
        </button>
      </StyledNodeList>
      <Modal
        isOpen={showModal}
        handleClose={handleModalClose}
        title="Create New"
      >
        {showModal && <CreateNode />}
      </Modal>
    </>
  );
}
