import { createContext, ReactNode, useState } from "react";

export const GlobalContext = createContext({});

interface GlobalContextProps {
  children: ReactNode;
}

export function GlobalContextProvider({ children }: GlobalContextProps) {

  const [isLoginPage, setIsLoginPage] = useState(true)
  const [isLogged, setIsLogged] = useState(false)

  const globalContextValue = {
    isLoginPage, 
    setIsLoginPage,
    isLogged,
    setIsLogged
  };

  return (
    <GlobalContext.Provider value={globalContextValue}>
      {children}
    </GlobalContext.Provider>
  );
}
