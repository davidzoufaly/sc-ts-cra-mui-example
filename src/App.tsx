import { StylesProvider } from '@material-ui/core';
import React from 'react';

import { ModeContext } from './context/ModeContext';
import { usePrefferedMode } from './hooks/usePrefferedMode';
import Home from './Pages/Home';

const App = () => {
  const mode = usePrefferedMode();

  return (
    <ModeContext.Provider value={mode}>
      {/* Styled components has higher specifity than MUI thanks to StylesProvider wrapper */}
      <StylesProvider injectFirst>
        <Home />
      </StylesProvider>
    </ModeContext.Provider>
  );
};

export default App;
