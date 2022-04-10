import { memo } from "react";
import { StyledPageWrapper } from "../common/PageWrapper/styles";

const Main = () => {
  return (
    <StyledPageWrapper>
      <p>main</p>
    </StyledPageWrapper>
  );
};

export default memo(Main);
