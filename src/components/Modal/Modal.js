import React from "react";
import ReactModal from "react-modal";
import styled from "styled-components";

const StyledContent = styled.div`
  font-family: "lato", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  .header {
    display: flex;
    font-size: 18px;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    position: relative;
    .center {
      position: absolute;
      left: 50%;
      flex: 0 1 auto;
      transform: translateX(-50%);
    }
    .right {
      border: none;
      background: transparent;
      display: flex;
      align-items: center;
      &:hover {
        cursor: pointer;
      }
      &:focus {
        outline: none;
      }
    }
  }
`;

export default function Modal({ isOpen, title, handleClose, children }) {
  return (
    <ReactModal
      isOpen={isOpen}
      style={{
        overlay: {
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: "transparent"
        },
        content: {
          position: "absolute",
          top: "40px",
          left: "40px",
          right: "40px",
          bottom: "40px",
          border: "1px solid rgba(221,224,228,0.70)",
          background: "#fff",
          overflow: "auto",
          WebkitOverflowScrolling: "touch",
          borderRadius: "8px",
          outline: "none",
          padding: "2rem 1rem",
          boxShadow: "0 16px 64px 0 rgba(0,0,0,0.08)",
          width: "25%",
          height: "60%",
          margin: "auto"
        }
      }}
      ariaHideApp={false}
    >
      <StyledContent>
        <div className="header">
          <h2 className="center">{title}</h2>
          <button onClick={handleClose} className="right">
            <img src="/close.svg" alt="close" />
          </button>
        </div>
        {children}
      </StyledContent>
    </ReactModal>
  );
}
