import { ADD_NODE, DELETE_NODE } from "./types";
import { omit } from "lodash";

function deleteNode(tree, path) {
  let resultTree = {};
  if (tree[path]) {
    if (tree[path].type === "file") {
      let parentPath = tree[path].parent;
      resultTree = omit(tree, [path]);
      if (parentPath && resultTree[parentPath]) {
        resultTree[parentPath].children = resultTree[
          parentPath
        ].children.filter(childPath => childPath !== path);
      }
    } else {
      let parentPath = tree[path].parent;
      let childPaths = tree[path].children;
      resultTree = omit(tree, [path]);
      if (parentPath && resultTree[parentPath]) {
        resultTree[parentPath].children = resultTree[
          parentPath
        ].children.filter(childPath => childPath !== path);
      }
      for (let childPath of childPaths) {
        resultTree = deleteNode(resultTree, childPath);
      }
    }
  }

  return resultTree;
}

function addNode(tree, { name, creator, size, type, parent, date }) {
  let resultTree = {};
  let path = `${parent}/${name}`;
  if (tree[path]) {
    return tree;
  } else {
    resultTree = {
      ...tree,
      [path]: { name, path, creator, size, type, date, parent, children: [] }
    };
    if (resultTree[parent]) {
      resultTree[parent].children.push(path);
    }
    return resultTree;
  }
}

export default function reducer(state, action) {
  switch (action.type) {
    case ADD_NODE: {
      const tree = addNode(state.tree, action.payload);
      return { ...state, tree };
    }
    case DELETE_NODE: {
      const tree = deleteNode(state.tree, action.payload);
      return { ...state, tree };
    }
    default:
      return state;
  }
}
