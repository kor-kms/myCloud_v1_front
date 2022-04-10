import { memo } from "react";
import { StyledPageWrapper } from "../common/PageWrapper/styles";

const Doc = () => {
  return (
    <StyledPageWrapper>
      <p>doc</p>
    </StyledPageWrapper>
  );
};

export default memo(Doc);
