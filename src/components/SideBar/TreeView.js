import React from "react";
import { values } from "lodash";
import { useSelector } from "react-redux";
import TreeNode from "./TreeNode";

function TreeView() {
  const nodes = useSelector(state => state.tree);

  const getChildNodes = node => {
    if (!node.children) return [];
    return node.children.map(path => nodes[path]);
  };
  const rootNode = values(nodes).filter(node => node.isRoot === true)[0];
  const childNodes = getChildNodes(rootNode).filter(
    _node => _node.type === "folder"
  );

  // render every children on root node
  return (
    <>
      {childNodes.map(node => (
        <TreeNode
          key={node.path}
          node={node}
          getChildNodes={getChildNodes}
          level={1}
        />
      ))}
    </>
  );
}

export default TreeView;
