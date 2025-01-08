import React, { createContext, useState, useEffect } from "react";

// Membuat context untuk dark mode
export const DarkModeContext = createContext();

export const DarkModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Ambil state awal dari localStorage
  useEffect(() => {
    const storedMode = localStorage.getItem("isDarkMode");
    if (storedMode) {
      setIsDarkMode(JSON.parse(storedMode));
    }
  }, []);

  // Update class dark di body setiap kali state berubah
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }

    // Simpan state ke localStorage
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};