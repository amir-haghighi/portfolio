import React, { createContext, useContext, useState } from "react";

const nightModeContext = createContext(undefined);

export const NightModeProvider = ({ children }) => {
  const [nightMode, setNightMode] = useState(false);
  const ontoggle = () => {
    setNightMode((nightMode) => !nightMode);
  };
  return (
    <nightModeContext.Provider
      value={{ nightMode: nightMode, toggleNightMode: ontoggle }}
    >
      {children}
    </nightModeContext.Provider>
  );
};
export const useNightModeContext = () => useContext(nightModeContext);
