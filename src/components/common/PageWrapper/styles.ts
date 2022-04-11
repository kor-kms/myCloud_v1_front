import styled from "styled-components";

export const StyledPageWrapper = styled.div`
  padding: 66px 22px 22px 22px;
  margin-left: 180px;
  height: calc(100vh);
  width: calc(100vw - 180px);
  background-color: ${(props) => props.theme.darkMode};
`;
