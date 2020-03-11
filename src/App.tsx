import { StylesProvider } from "@material-ui/core";
import React from "react";
import { usePrefferedMode } from "./hooks/usePrefferedMode";
import Home from "./Pages/Home";
import { ModeContext } from "./context/ModeContext";

const App = () => {
  // mode const should be passed to React.createContext in bigger app for easier scalling
  const mode = usePrefferedMode();

  return (
    <ModeContext.Provider value={mode}>
      {/* Styled components has higher specifity than MUI thanks to StylesProvider wrapper */}
      <StylesProvider injectFirst>
        <Home/> 
      </StylesProvider>
    </ModeContext.Provider>
  );
};

export default App;
