import React from "react";
import styled from "styled-components";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";

const StyledNode = styled.div`
  height: 96px;
  margin-right: 1%;
  margin-bottom: 1rem;
  flex-basis: 15%;
  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    padding: 10%;
    height: 100%;
  }
`;

export default function Node(props) {
  const { name, type, path } = props.node;
  const handleClick = (event, data) => {
    console.log(data);
  };
  const MenuItemStyles = {
    backgroundColor: "red!"
  };

  return (
    <>
      <StyledNode>
        <ContextMenuTrigger id={path}>
          {type === "file" ? (
            <img src="/file.png" alt="file" />
          ) : (
            <img src="/folder.png" alt="file" />
          )}
          <div>{name}</div>
        </ContextMenuTrigger>
      </StyledNode>
      <ContextMenu
        id={path}
        style={{
          backgroundColor: "white",
          borderRadius: "5px",
          border: "1px solid rgba(221,224,228,0.50)",
          boxShadow: "0 12px 24px 0 rgba(0,0,0,0.05)",
          width: "200px",
          display: "flex",
          flexDirection: "column"
        }}
      >
        <MenuItem
          data={{ foo: "bar" }}
          onClick={handleClick}
          style={{
            color: "red"
          }}
        >
          ContextMenu Item 1
        </MenuItem>
        <MenuItem
          data={{ foo: "bar" }}
          onClick={handleClick}
          style={MenuItemStyles}
        >
          ContextMenu Item 2
        </MenuItem>
        <MenuItem divider />
        <MenuItem
          data={{ foo: "bar" }}
          onClick={handleClick}
          style={MenuItemStyles}
        >
          ContextMenu Item 3
        </MenuItem>
      </ContextMenu>
    </>
  );
}
