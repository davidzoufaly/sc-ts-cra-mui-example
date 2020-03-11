import React from "react";
import styled from "styled-components";
import { gdTheme } from "../../../library/theme";
import { Mode } from "../../../hooks/usePrefferedMode";

interface StyledPar {
  Mode: Mode;
  Color?: string;
  as?: any;
}

const StyledPar = styled.p<StyledPar>`
  font-size: ${gdTheme.typography.fontSize.paragraph};
  color: ${({ Mode, Color }) =>
    Color ? Color : gdTheme.colors.textPrimary[Mode].main};
`;

const SParagraph: React.FC<StyledPar> = ({ Mode, Color, as, children }) => {
  return (
    <StyledPar Mode={Mode} Color={Color} as={as}>
      {children}
    </StyledPar>
  );
};

export default SParagraph;
