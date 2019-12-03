import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { values } from "lodash";
import Node from "./Node";

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
    padding: 2%;
    height: 96px;
    margin-right: 1%;
    margin-bottom: 1rem;
    flex-basis: 15%;
  }
`;

export default function NodeList() {
  const nodes = useSelector(state => state.tree);
  const { pathname } = useLocation();
  let childNodes = [];
  if (values(nodes).filter(node => node.path === pathname).length !== 0)
    childNodes = nodes[pathname].children.map(path => nodes[path]);

  return (
    <StyledNodeList>
      {childNodes.map(node => (
        <Node key={node.path} node={node} />
      ))}

      <div className="add-node">
        <img src="/add.png" alt="add" />
      </div>
    </StyledNodeList>
  );
}
