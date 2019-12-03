import React from "react";
import styled from "styled-components";
import TitleBar from "../TitleBar/TitleBar";
import NodeList from "../NodeList/NodeList";

const StyledMainContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 1rem 3rem;
`;

export default function MainContent() {
  return (
    <StyledMainContent>
      <TitleBar />
      <NodeList />
    </StyledMainContent>
  );
}
