import React, { createContext, useContext, useState } from "react";

const nightModeContext = createContext(undefined);

export const NightModeProvider = ({ children }) => {
  const [nightMode, setNightMode] = useState(false);
  const [color, setColor] = useState();
  const [backgroundColor, setBackgroundColor] = useState("#D3D3D3");
  const [navColor, setNavColor] = useState("white");
  const [navbackgroundColor, setNavbackgroundColor] = useState("#2C3440");

  const ontoggle = () => {
    if (nightMode == false) {
      setColor("ivory");
      setNavColor("black");
      setBackgroundColor("#2D3440");
      setNavbackgroundColor("lightgray");
    } else {
      setColor("black");
      setNavColor("white");
      setBackgroundColor("#D3D3D3");
      setNavbackgroundColor("#2C3440");
    }
    setNightMode((nightMode) => !nightMode);
  };
  return (
    <nightModeContext.Provider
      value={{
        nightMode: nightMode,
        toggleNightMode: ontoggle,
        color: color,
        backgroundColor: backgroundColor,
        nav: { color: navColor, backgroundColor: navbackgroundColor },
      }}
    >
      {children}
    </nightModeContext.Provider>
  );
};
export const useNightModeContext = () => useContext(nightModeContext);
