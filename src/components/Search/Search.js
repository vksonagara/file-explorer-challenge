import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { values, includes } from "lodash";
import Node from "./Node";

const StyledContainer = styled.div`
  position: relative;
  input {
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
    width: 250px;
    transition: width 0.5s;
    &:focus {
      outline: none;
      width: 400px;
    }
  }
  .search-content {
    position: absolute;
    background-color: #fff;
    width: 100%;
    border: 1px solid rgba(221, 224, 228, 0.7);
    border-radius: 8px;
    margin-top: 0.5rem;
    box-shadow: 0 16px 64px 0 rgba(0, 0, 0, 0.08);
    visibility: hidden;
    opacity: 0;
    transition: opacity 1s;
    padding: 1rem 0;
    box-sizing: border-box;
    p {
      padding: 0 1rem;
    }
    z-index: 1;
  }
`;

export default function Search() {
  const nodes = useSelector(state => state.tree);
  const [searchText, setSearchText] = useState("");
  const [matchedNodes, setMatchedNodes] = useState([]);
  const handleSearchInput = event => {
    setSearchText(event.target.value);
    setMatchedNodes(
      values(nodes).filter(node => includes(node.name, event.target.value))
    );
  };

  return (
    <>
      <StyledContainer>
        <input
          type="text"
          placeholder="Search for anything"
          value={searchText}
          onChange={handleSearchInput}
        />
        <div
          className="search-content"
          style={searchText ? { opacity: 1, visibility: "visible" } : undefined}
        >
          {matchedNodes.map(node => (
            <Node key={node.path} node={node} />
          ))}
          {matchedNodes.length === 0 && <p>No files/folders found!</p>}
        </div>
      </StyledContainer>
    </>
  );
}
