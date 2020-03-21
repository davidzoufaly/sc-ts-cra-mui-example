import Button from '@material-ui/core/Button';
import { ButtonBaseProps } from '@material-ui/core/ButtonBase/ButtonBase';
import React from 'react';
import styled from 'styled-components';
import { gdTheme } from '../../../library/theme';
import { IMode } from '../../../types/layoutTypes';

// our styles has higher prefferency
// still can be used MUI props that are passed down to original Button component
const StyledButton = styled(({ Mode, ...props }) => <Button {...props} />)<
IMode
>`
    background-color: ${({ Mode }) => gdTheme.colors.primary[Mode].main};
    color: ${({ Mode }) => gdTheme.colors.textPrimary[Mode].main};
`;

const SButton: React.FC<IMode & ButtonBaseProps> = ({
  Mode,
  children,
  ...props
}) => (
  <StyledButton variant="contained" Mode={Mode} {...props}>
    {children}
  </StyledButton>
);

export default SButton;
