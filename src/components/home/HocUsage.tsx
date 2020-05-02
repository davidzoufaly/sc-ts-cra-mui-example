import React from 'react';

import { withName } from '../hoc/withName';

const HocUsage: React.FC<{ name?: string }> = ({ name }) => {
  return <p>Hello {name}</p>;
};

export default withName(HocUsage);
