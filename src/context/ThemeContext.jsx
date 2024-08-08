"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

const getFromLocalStorage = () => {
  const value = localStorage.getItem("theme");
  return value; // Ensure it always returns a valid theme
};

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(getFromLocalStorage);

  useEffect(() => {
    console.log("Current theme:", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    console.log(theme);
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
