import React from 'react';
import styled from 'styled-components';
import { gdTheme } from '../../../library/theme';
import { TMode } from '../../../hooks/usePrefferedMode';

interface StyledPar {
  Mode: TMode;
  Color?: string;
  as?: any;
}

const StyledPar = styled.p<StyledPar>`
  font-size: ${gdTheme.typography.fontSize.paragraph};
  color: ${({ Mode, Color }) => Color || gdTheme.colors.textPrimary[Mode].main};
`;

const SParagraph: React.FC<StyledPar> = ({
  Mode, Color, as, children,
}) => (
  <StyledPar Mode={Mode} Color={Color} as={as}>
    {children}
  </StyledPar>
);

export default SParagraph;
