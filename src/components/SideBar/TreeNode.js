import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledTreeNode = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
  padding-left: ${props => props.level}rem;
  height: 2rem;
  &:hover {
    background: #eeeff1;
  }
  a {
    text-decoration: none;
  }
  .label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .node-label {
      display: flex;
      align-items: center;
      font-size: 16px;
      color: #2f363f;
      border: none;
      text-align: left;
      background: transparent;
      &:hover {
        cursor: pointer;
      }
      &:focus {
        outline: none;
      }
    }
  }
  .collapse {
    border: none;
    background: transparent;
    &:hover {
      cursor: pointer;
    }
    &:focus {
      outline: none;
    }
    .rotated {
      transform: rotate(180deg);
    }
  }
`;

export default function TreeNode(props) {
  const { node, getChildNodes, level } = props;
  const { name, path } = node;
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = event => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <StyledTreeNode level={level}>
        <div className="label">
          <Link className="node-label" to={path}>
            {name}
          </Link>
          {getChildNodes(node).filter(_node => _node.type === "folder")
            .length !== 0 && (
            <button onClick={handleToggle} className="collapse">
              {isOpen ? (
                <img src="/dropdown.svg" alt="dropdown" className="rotated" />
              ) : (
                <img src="/dropdown.svg" alt="dropdown" />
              )}
            </button>
          )}
        </div>
      </StyledTreeNode>
      {isOpen &&
        getChildNodes(node)
          .filter(_node => _node.type === "folder")
          .map(childNode => (
            <TreeNode
              {...props}
              node={childNode}
              key={childNode.path}
              level={level + 1}
            />
          ))}
    </>
  );
}
