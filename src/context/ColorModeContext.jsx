import React, { createContext, useState, useEffect } from 'react';

export const ColorModeContext = createContext();

export const ColorModeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    // Cek localStorage untuk preferensi mode
    const savedMode = localStorage.getItem('colorMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    // Simpan preferensi mode ke localStorage
    localStorage.setItem('colorMode', JSON.stringify(isDarkMode));
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const toggleColorMode = () => setIsDarkMode((prev) => !prev);

  return (
    <ColorModeContext.Provider value={{ isDarkMode, toggleColorMode }}>
      {children}
    </ColorModeContext.Provider>
  );
};