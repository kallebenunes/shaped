import { useContext, useState } from "react";
import reactLogo from "./assets/react.svg";

import Home from "./pages/Home";
import AuthenticationPage from "./pages/AuthenticationPages";
import GlobalStyle from "./styles/globaStyles";
import { GlobalContext, GlobalContextProvider } from "./contexts/globalContext";

function App() {
  const { isLogged } = useContext(GlobalContext)
  console.log(isLogged)

  return (
    <>
      <GlobalStyle />
      {isLogged ? <Home /> : <AuthenticationPage />}
    </>
  );
}

export default App;
