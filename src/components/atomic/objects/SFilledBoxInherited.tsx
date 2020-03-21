import React from 'react';
import styled from 'styled-components';
import { StyledDiv } from './SFilledBox';
import { IMode } from '../../../types/layoutTypes';
// types can be imported / exported

// inherits all styles from StyledDiv, old styles can be changed or new one added
const StyledDivInherited = styled(StyledDiv)<IMode>`
  width: 200px;
`;

const SFilledBoxInherited: React.FC<IMode> = ({ Mode }) => (
  <StyledDivInherited Mode={Mode} />
);

export default SFilledBoxInherited;
