import React, { Fragment } from "react";
import styled from "styled-components";
import { useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { last, reverse } from "lodash";

const StyledBreadcrumb = styled.div`
  font-size: 24px;
  color: #81878c;
  display: flex;
  align-items: center;
  a {
    text-decoration: none;
    color: #81878c;
  }
`;

const Highlight = styled.p`
  color: #001800;
`;

export default function Breadcrumb() {
  const nodes = useSelector(state => state.tree);
  const { pathname } = useLocation();
  const current = last(pathname.split("/").filter(node => node !== ""));
  let parentPathNodes = [];
  let currentPath = pathname;
  while (nodes[currentPath] && nodes[currentPath].parent) {
    currentPath = nodes[currentPath].parent;
    parentPathNodes.push(nodes[currentPath]);
  }
  parentPathNodes = reverse(parentPathNodes);

  return (
    <StyledBreadcrumb>
      {parentPathNodes.map((node, index) => (
        <Fragment key={index}>
          <Link to={node.path}>{node.name}</Link> /{" "}
        </Fragment>
      ))}
      <Highlight>{current}</Highlight>
    </StyledBreadcrumb>
  );
}
