import { createContext, ReactNode, SetStateAction, useState } from "react";


interface GlobalContextProps {
  children: ReactNode;
}

interface GlobalContextValue {
  isLoginPage: boolean,
  isLogged: boolean,
  setIsLoginPage: React.Dispatch<SetStateAction<boolean>>
  setIsLogged: React.Dispatch<SetStateAction<boolean>>
}

export const GlobalContext = createContext<GlobalContextValue>({} as GlobalContextValue);

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
