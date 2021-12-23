import { createContext, ReactNode, useState } from "react";
import { ThemeContext } from "types";
import Navbar from "./Navbar";

export const themeContext = createContext({} as ThemeContext);

function Layout({ children }: { children: ReactNode }) {
  const [darkTheme, setDarkTheme] = useState<boolean>(false);
  return (
    <themeContext.Provider
      value={{ darkTheme: darkTheme, setDarkTheme: setDarkTheme }}
    >
      <Navbar />
      {children}
    </themeContext.Provider>
  );
}

export default Layout;
