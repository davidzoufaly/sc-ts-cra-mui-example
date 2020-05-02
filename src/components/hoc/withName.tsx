import React, { ReactElement } from 'react';

export const withName = <P extends object>(
  Component: React.ComponentType<P>
): React.FC<P> => (props): ReactElement => {
  const name = 'Mark is example of HOC';
  return <Component {...props} name={name} />;
};
