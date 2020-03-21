import React from 'react';
import styled from 'styled-components';
import { gdTheme } from '../../../library/theme';
import { IMode } from '../../../types/layoutTypes';

// scss nesting
const StyledWrapper = styled.div<IMode>`
  width: 100%;
  height: 100%;
  padding: ${gdTheme.spacing(5)};
  position: absolute;
  background-color: ${({ Mode }) => gdTheme.colors.background[Mode].main};
  & > * {
    margin-bottom: ${gdTheme.spacing(5)};
  }
`;

const SWrapper: React.FC<IMode> = ({ Mode, children }) => (
  <StyledWrapper Mode={Mode}>{children}</StyledWrapper>
);

export default SWrapper;
