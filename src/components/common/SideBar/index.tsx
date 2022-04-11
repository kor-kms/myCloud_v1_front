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
    useRecoilState<boolean>(SideBarContentsAtom);

  useEffect(() => {
    setContentOpen(true);
  }, [path, setContentOpen]);

  return (
    <StyledSideBar>
      <SideBarWrapper title="MY CLOUD">
        <SideBarItemWrapper
          isOpen={contentOpen}
          title={"Doc"}
          handleClick={() => setContentOpen((prev) => !prev)}
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
          isOpen={contentOpen}
          title={"File"}
          handleClick={() => setContentOpen((prev) => !prev)}
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
