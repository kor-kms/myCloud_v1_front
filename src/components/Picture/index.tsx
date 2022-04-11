import { memo } from "react";
import { StyledPageWrapper } from "../common/PageWrapper/styles";

const Picture = () => {
  return (
    <StyledPageWrapper>
      <p>Picture</p>
    </StyledPageWrapper>
  );
};

export default memo(Picture);
