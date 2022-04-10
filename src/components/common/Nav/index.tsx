import { memo, useLayoutEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Logout, NavLogo, NavTitle, StyledLogo, StyledNav } from "./styles";

const Nav = () => {
  const navigate = useNavigate();

  return (
    <StyledNav>
      <StyledLogo onClick={() => navigate("/")}>
        <NavLogo
          src="https://www.emojiall.com/images/240/apple/2601.png?ezimgfmt=rs:240x240/rscb2/ng:webp/ngcb2"
          alt="LOGO"
        />
        <NavTitle>MY CLOUD</NavTitle>
      </StyledLogo>
    </StyledNav>
  );
};

export default memo(Nav);
