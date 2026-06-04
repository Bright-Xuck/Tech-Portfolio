import { useState, createContext } from "react";

export const ThemeProvider = createContext(null);

export default function ThemeContext({ children }) {
  const [present, SetPresent] = useState(true); 

  return (
    <ThemeProvider.Provider value={{present, SetPresent}}>{children}</ThemeProvider.Provider>
  );
}
