import React from 'react';

import { withName } from '../hoc/withName';

const HocUsage: React.FC<{ name?: string; age: number }> = ({ name, age }) => {
  return (
    <p>
      Hello {name}, you are this {age} old.
    </p>
  );
};

export default withName(HocUsage);
