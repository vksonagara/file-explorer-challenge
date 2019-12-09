import React, { useState } from "react";
import styled from "styled-components";
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import Modal from "../Modal/Modal";
import NodeInfo from "../NodeInfo/NodeInfo";
import { DELETE_NODE } from "../../store/types";

const StyledNode = styled.div`
  margin-right: 1%;
  margin-bottom: 1rem;
  flex-basis: 15%;
  padding: 0.5rem 0;
  background-color: transparent;
  transition: background-color 0.5s;
  &:hover {
    cursor: pointer;
    background-color: ${props =>
      props.type === "folder"
        ? "rgba(71, 184, 255, 0.2)"
        : "rgba(253, 205, 84, 0.2)"};
    border-radius: 8px;
  }
  div.react-contextmenu-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 10%;
    height: 100%;
  }
  div.label {
    padding-top: 20px;
  }
  div.file-icon {
    position: relative;
  }
  div.extension {
    position: absolute;
    bottom: 10px;
    left: 10px;
    color: white;
  }
`;

export default function Node({ node: { name, type, path } }) {
  const history = useHistory();
  const dispatch = useDispatch();
  const [infoPath, setInfoPath] = useState("");
  const handleInfoClose = () => {
    setInfoPath("");
  };
  const openNode = ({ path, type }) => {
    if (type === "folder") {
      history.push(path);
    } else {
      setInfoPath(path);
    }
  };
  const handleClick = (event, { path, type, action }) => {
    if (action === "open") {
      openNode({ path, type });
    } else if (action === "info") {
      setInfoPath(path);
    } else {
      dispatch({ type: DELETE_NODE, payload: path });
    }
  };

  const handleDoubleClick = ({ path, type }) => event => {
    openNode({ path, type });
  };

  return (
    <>
      <StyledNode onDoubleClick={handleDoubleClick({ path, type })} type={type}>
        <ContextMenuTrigger id={path}>
          {type === "file" ? (
            <div className="file-icon">
              <img src="/file.png" alt="file" />
              <div className="extension">
                {name.split(".")[1] ? `.${name.split(".")[1]}` : ""}
              </div>
            </div>
          ) : (
            <img src="/folder.png" alt="file" />
          )}
          <div className="label">{name}</div>
        </ContextMenuTrigger>
      </StyledNode>
      <ContextMenu id={path}>
        <MenuItem data={{ path, type, action: "open" }} onClick={handleClick}>
          Open
        </MenuItem>
        <MenuItem data={{ path, type, action: "info" }} onClick={handleClick}>
          Get Info
        </MenuItem>
        <MenuItem
          data={{ path, type, action: "delete" }}
          onClick={handleClick}
          className="delete"
        >
          Delete
        </MenuItem>
      </ContextMenu>
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
