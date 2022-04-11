import styled from "styled-components";

export const StyledTitle = styled.div`
  width: 100%;
  height: 52px;
  padding: 0px 16px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  transition: 0.4s;
  & > span {
    margin-right: 6px;
  }
  &:hover {
    background-color: ${(props) => props.theme.lightMainColor};
  }
`;
