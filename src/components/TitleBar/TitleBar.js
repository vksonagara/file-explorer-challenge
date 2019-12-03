import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { trimEnd } from "lodash";
import Breadcrumb from "../Breadcrumb/Breadcrumb";
import Search from "../Search/Search";

const StyledTitleBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  .titlebar-left {
    display: flex;
    align-items: center;
  }
  .titlebar-icon {
    margin-right: 1rem;
  }
`;

export default function TitleBar() {
  const { pathname } = useLocation();
  const pathnames = trimEnd(pathname, "/").split("/");
  pathnames.pop();
  const path = pathnames.join("/");

  return (
    <StyledTitleBar>
      <div className="titlebar-left">
        <Link to={path}>
          <img
            className="titlebar-icon"
            src="/arrow-green-circle.png"
            alt="arrow-green-circle"
          />
        </Link>
        <Breadcrumb />
      </div>
      <div>
        <Search />
      </div>
    </StyledTitleBar>
  );
}
