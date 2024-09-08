"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  if (typeof window === "undefined") {
    const value = localStorage.getItem("themeBlog");
    return value ?? "light";
  }
};
export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("themeBlog", theme);
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
