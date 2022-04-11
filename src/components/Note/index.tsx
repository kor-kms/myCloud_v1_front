import { memo } from "react";
import { StyledPageWrapper } from "../common/PageWrapper/styles";

const Note = () => {
  return (
    <StyledPageWrapper>
      <p>Note</p>
    </StyledPageWrapper>
  );
};

export default memo(Note);
