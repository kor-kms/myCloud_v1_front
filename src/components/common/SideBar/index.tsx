import { StyledSideBar } from "./styles";
import { NavLink } from "react-router-dom";
import SideBarWrapper from "./SideBarWrapper";
import { memo } from "react";
import usePathParams from "../../../hooks/usePathParams";

const SideBar = () => {
  const path: string = usePathParams();

  return (
    <StyledSideBar>
      <SideBarWrapper title="SOOSOO">
        <NavLink
          to="/main"
          className={
            path === "/main" ? "nested-nav-link-active" : "nested-nav-link"
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/doc"
          className={
            path === "/doc" ? "nested-nav-link-active" : "nested-nav-link"
          }
        >
          Doc
        </NavLink>
        <NavLink
          to="/file"
          className={
            path === "/file" ? "nested-nav-link-active" : "nested-nav-link"
          }
        >
          File
        </NavLink>
      </SideBarWrapper>
    </StyledSideBar>
  );
};

export default memo(SideBar);
