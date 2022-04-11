import { StyledSideBar } from "./styles";
import { NavLink } from "react-router-dom";
import SideBarWrapper from "./SideBarWrapper";
import { memo, useEffect } from "react";
import usePathParams from "../../../hooks/usePathParams";
import SideBarItemWrapper from "./SideBarItemWrapper";
import { useRecoilState } from "recoil";
import { SideBarContentsAtom } from "../../../store/sideBar";

const SideBar = () => {
  const path: string = usePathParams();
  const [contentOpen, setContentOpen] =
    useRecoilState<Number[]>(SideBarContentsAtom);

  const handleOpen = (index: Number) => {
    if (contentOpen.includes(index)) {
      setContentOpen(contentOpen.filter((id) => id !== index));
    } else {
      setContentOpen([...contentOpen, index]);
    }
  };

  return (
    <StyledSideBar>
      <SideBarWrapper title="MY CLOUD">
        <SideBarItemWrapper
          isOpen={contentOpen.includes(0) ? true : false}
          title={"Doc"}
          handleClick={() => handleOpen(0)}
        >
          <NavLink
            to="/note"
            className={
              path === "/note" ? "nested-nav-link-active" : "nested-nav-link"
            }
          >
            Note
          </NavLink>
          <NavLink
            to="/self"
            className={
              path === "/self" ? "nested-nav-link-active" : "nested-nav-link"
            }
          >
            Self Intro
          </NavLink>
          <NavLink
            to="/tech"
            className={
              path === "/tech" ? "nested-nav-link-active" : "nested-nav-link"
            }
          >
            Tech
          </NavLink>
        </SideBarItemWrapper>

        <SideBarItemWrapper
          isOpen={contentOpen.includes(1) ? true : false}
          title={"File"}
          handleClick={() => handleOpen(1)}
        >
          <NavLink
            to="/picture"
            className={
              path === "/picture" ? "nested-nav-link-active" : "nested-nav-link"
            }
          >
            Picture
          </NavLink>

          <NavLink
            to="/etc"
            className={
              path === "/etc" ? "nested-nav-link-active" : "nested-nav-link"
            }
          >
            ETC
          </NavLink>
        </SideBarItemWrapper>
      </SideBarWrapper>
    </StyledSideBar>
  );
};

export default memo(SideBar);
