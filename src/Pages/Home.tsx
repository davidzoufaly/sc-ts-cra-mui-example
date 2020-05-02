import React, { useContext } from 'react';

import SButton from '../components/atomic/buttons/SButton';
import SWrapper from '../components/atomic/layout/SWrapper';
import Boxes from '../components/home/Boxes';
import WrapperTest from '../components/home/FunctionAsChildren';
import Greeting from '../components/home/HocUsage';
import Texts from '../components/home/Texts';
import { ModeContext } from '../context/ModeContext';

const Home: React.FC = () => {
  const Mode = useContext(ModeContext);

  // Props has to be capitalize or StyledComponents passed them to DOM like HTML attributes
  return (
    <SWrapper Mode={Mode}>
      <Boxes Mode={Mode} />
      <Texts Mode={Mode} />
      <WrapperTest data={{ firstName: 'Alooha', lastName: 'Awad' }}>
        {data => {
          return (
            <>
              <p>{data.firstName}</p>
              <p>{data.lastName}</p>
            </>
          );
        }}
      </WrapperTest>
      <Greeting />
      <SButton Mode={Mode}>Button</SButton>
    </SWrapper>
  );
};

export default Home;
