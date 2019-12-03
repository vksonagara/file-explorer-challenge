import React from "react";
import styled from "styled-components";
import TreeView from "./TreeView";

const StyledSideBar = styled.div`
  width: 16rem;
  background: #f9fafc;
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  .root {
    font-weight: 700;
    font-size: 12px;
    color: #afb2b6;
    letter-spacing: 0;
    padding: 0.75rem 1rem;
    align-items: center;
  }
`;

function SideBar() {
  return (
    <StyledSideBar>
      <div className="root">ROOT</div>
      <TreeView />
    </StyledSideBar>
  );
}

export default SideBar;
