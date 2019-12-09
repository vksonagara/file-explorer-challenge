import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const StyledNodeInfo = styled.div`
  padding: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  .info-line {
    margin: 1rem 0;
    .key {
      color: #2f363f;
    }
    .value {
      color: #81878c;
    }
  }
  .image {
    padding: 2rem 0;
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

export default function NodeInfo({ path }) {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec"
  ];
  const nodes = useSelector(state => state.tree);
  const node = nodes[path] || null;
  const { name, type, size, creator, date } = node;
  return (
    <StyledNodeInfo>
      {type === "file" ? (
        <div className="file-icon">
          <img src="/file.png" alt="file" />
          <div className="extension">
            {name.split(".")[1] ? `.${name.split(".")[1]}` : ""}
          </div>
        </div>
      ) : (
        <img src="/folder.png" alt="folder" className="image" />
      )}
      <div className="info-line">
        <span className="key">Name:</span> <span className="value">{name}</span>
      </div>
      <div className="info-line">
        <span className="key">Size:</span>{" "}
        <span className="value">{size}kb</span>
      </div>
      <div className="info-line">
        <span className="key">Creator Name:</span>{" "}
        <span className="value">{creator}</span>
      </div>
      <div className="info-line">
        <span className="key">Absolute Path:</span>{" "}
        <span className="value">{path}</span>
      </div>
      <div className="info-line">
        <span className="key">Created date:</span>{" "}
        <span className="value">
          {date.getDate()}th {months[date.getMonth()]}, {date.getFullYear()}
        </span>
      </div>
    </StyledNodeInfo>
  );
}
