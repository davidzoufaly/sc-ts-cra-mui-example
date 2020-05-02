import React from 'react';

import { IMode } from '../../types/layoutTypes';
import SFilledBox from '../atomic/objects/SFilledBox';
import SFilledBoxInherited from '../atomic/objects/SFilledBoxInherited';

const Boxes: React.FC<IMode> = ({ Mode }) => (
  <>
    <SFilledBox Mode={Mode} />
    <SFilledBoxInherited Mode={Mode} />
  </>
);

export default Boxes;
