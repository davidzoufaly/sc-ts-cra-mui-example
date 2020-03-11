import React from "react";
import styled, { keyframes } from "styled-components";
import { gdTheme } from "../../../library/theme";
import { IMode } from "../../../types/layoutTypes";

// normal CSS syntax can be used, media Queries / transitions / SASS like nesting
const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

// styles can be exported and reused in other components -> SFilledBoxInherited
// media query example
export const StyledDiv = styled.div<IMode>`
  width: 100px;
  height: 100px;
  display: inline-block;
  background-color: ${({ Mode }) => gdTheme.colors.secondary[Mode].main};
  padding-bottom: ${gdTheme.spacing(5)};
  margin-right: ${gdTheme.spacing(2)};
  animation: ${rotate} 4s linear infinite;

  @media ${gdTheme.size.breakPoints.mobileM("max")} {
    width: 100%;
  }
`;

const SFilledBox: React.FC<IMode> = ({ Mode }) => {
  return <StyledDiv Mode={Mode} />;
};

export default SFilledBox;
