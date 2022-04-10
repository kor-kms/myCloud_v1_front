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
          홈
        </NavLink>
        <NavLink
          to="/kindergarten"
          className={
            path === "/kindergarten"
              ? "nested-nav-link-active"
              : "nested-nav-link"
          }
        >
          우리 유치원
        </NavLink>
      </SideBarWrapper>
    </StyledSideBar>
  );
};

export default memo(SideBar);
