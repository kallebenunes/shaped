import { useState } from "react";
import reactLogo from "./assets/react.svg";

import Home from "./pages/Home";
import AuthenticationPage from "./pages/AuthenticationPages";
import GlobalStyle from "./styles/globaStyles";
import { GlobalContextProvider } from "./contexts/globalContext";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <GlobalContextProvider>
      <GlobalStyle />
      {isLogged ? <Home /> : <AuthenticationPage />}
    </GlobalContextProvider>
  );
}

export default App;
