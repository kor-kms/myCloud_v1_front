import { memo } from "react";
import { StyledPageWrapper } from "../common/PageWrapper/styles";

const Self = () => {
  return (
    <StyledPageWrapper>
      <p>Self</p>
    </StyledPageWrapper>
  );
};

export default memo(Self);
