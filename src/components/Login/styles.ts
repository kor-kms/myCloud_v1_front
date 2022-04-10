import * as M from "styles/StyleModule";
import styled from "styled-components";

export const StyledLoginPage = styled.section`
  top: 45%;
  left: 50%;
  position: relative;
  align-items: center;
  width: 396px;
  height: 430px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
  transform: translate(-50%, -50%);
`;

export const StyledButtonWrapper = styled.div`
  width: 396px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const StyledInputWrapper = styled.div`
  width: 396px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
`;

export const StyledLogo = styled.div`
  width: 400px;
  height: 86px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  & > span {
    ${M.dragNone}
    &:first-child {
      font-size: 3.5rem;
      font-weight: bolder;
      color: ${(props) => props.theme.mainColor};
      letter-spacing: 8px;
    }
  }
`;
