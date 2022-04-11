import { memo } from "react";
import { StyledTitle } from "./styles";
import { ReactComponent as Arrow } from "assets/icons/NavArrow.svg";

const SideBarItemWrapper = ({
  isOpen,
  children,
  title,
  handleClick,
}: {
  isOpen: boolean;
  title: string;
  children: JSX.Element | JSX.Element[];
  handleClick: () => void;
}) => {
  return (
    <>
      <StyledTitle onClick={handleClick}>
        <span>{title}</span>
        {isOpen ? (
          <Arrow width={16} height={16} />
        ) : (
          <Arrow
            width={16}
            height={16}
            style={{ transform: "rotate(180deg)" }}
          />
        )}
      </StyledTitle>
      {isOpen && children}
    </>
  );
};

export default memo(SideBarItemWrapper);
