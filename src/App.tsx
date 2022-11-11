import { useState } from "react";
import reactLogo from "./assets/react.svg";

import Home from "./pages/Home";
import AuthenticationPage from "./pages/AuthenticationPages";
import GlobalStyle from "./styles/globaStyles";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  return (
    <>
      <GlobalStyle />
      {isLogged ? <Home /> : <AuthenticationPage />}
    </>
  );
}

export default App;
