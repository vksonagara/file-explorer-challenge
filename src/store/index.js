import { createStore } from "redux";
import reducer from "./reducer";

const INITIAL_STATE = {
  tree: {
    "/root": {
      name: "root",
      path: "/root",
      type: "folder",
      size: 783,
      creator: "vinod sonagara",
      date: new Date(),
      isRoot: true,
      parent: null,
      children: [
        "/root/apps",
        "/root/pictures",
        "/root/videos",
        "/root/docs",
        "/root/a.pdf",
        "/root/b.jpg"
      ]
    },
    "/root/apps": {
      name: "apps",
      path: "/root/apps",
      parent: "/root",
      type: "folder",
      size: 783,
      creator: "vinod sonagara",
      date: new Date(),
      children: []
    },
    "/root/pictures": {
      name: "pictures",
      path: "/root/pictures",
      type: "folder",
      parent: "/root",
      size: 783,
      creator: "vinod sonagara",
      date: new Date(),
      children: []
    },
    "/root/videos": {
      name: "videos",
      path: "/root/videos",
      type: "folder",
      parent: "/root",
      size: 783,
      creator: "vinod sonagara",
      date: new Date(),
      children: []
    },
    "/root/docs": {
      name: "docs",
      path: "/root/docs",
      type: "folder",
      parent: "/root",
      size: 783,
      creator: "vinod sonagara",
      date: new Date(),
      children: ["/root/docs/work", "/root/docs/c.pdf", "/root/docs/d.docx"]
    },
    "/root/a.pdf": {
      name: "a.pdf",
      path: "/root/a.pdf",
      type: "file",
      parent: "/root",
      size: 783,
      creator: "vinod sonagara",
      date: new Date(),
      children: []
    },
    "/root/b.jpg": {
      name: "b.jpg",
      path: "/root/b.jpg",
      type: "file",
      parent: "/root",
      size: 783,
      creator: "vinod sonagara",
      date: new Date(),
      children: []
    },
    "/root/docs/work": {
      name: "work",
      path: "/root/docs/work",
      type: "folder",
      parent: "/root/docs",
      size: 783,
      creator: "vinod sonagara",
      date: new Date(),
      children: ["/root/docs/work/e.pdf", "/root/docs/work/f.ts"]
    },
    "/root/docs/c.pdf": {
      name: "c.pdf",
      path: "/root/docs/c.pdf",
      type: "file",
      parent: "/root/docs",
      size: 783,
      creator: "vinod sonagara",
      date: new Date(),
      children: []
    },
    "/root/docs/d.docx": {
      name: "d.docx",
      path: "/root/docs/d.docx",
      type: "file",
      parent: "/root/docs",
      size: 783,
      creator: "vinod sonagara",
      date: new Date(),
      children: []
    },
    "/root/docs/work/e.pdf": {
      name: "e.pdf",
      path: "/root/docs/work/e.pdf",
      type: "file",
      parent: "/root/docs/work",
      size: 783,
      creator: "vinod sonagara",
      date: new Date(),
      children: []
    },
    "/root/docs/work/f.ts": {
      name: "f.ts",
      path: "/root/docs/work/f.ts",
      type: "file",
      parent: "/root/docs/work",
      size: 783,
      creator: "vinod sonagara",
      date: new Date(),
      children: []
    }
  }
};

const store = createStore(reducer, INITIAL_STATE);

export default store;
