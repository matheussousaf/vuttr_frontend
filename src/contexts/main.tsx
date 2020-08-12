import React, { createContext, useContext } from "react";
import { Tool } from "@interfaces/index";

interface MainContext {
  tools: Tool[];
}

const MainContext = createContext({} as MainContext);

const MainProvider: React.FC = ({ children }) => {
  return (
    <MainContext.Provider value={{} as MainContext}>
      {children}
    </MainContext.Provider>
  );
};

export const useMainContext = () => useContext(MainContext);

export default Main;
