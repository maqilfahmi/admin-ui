// src/context/authContext.jsx
import React, { createContext, useState, useContext, useEffect } from 'react';

// Membuat AuthContext
export const AuthContext = createContext();

// Membuat AuthContextProvider
export const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");

  // Cek status login dengan memeriksa token dari localStorage
  const checkLoginStatus = () => {
    const token = localStorage.getItem("refreshToken");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    checkLoginStatus();
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, name, setName }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook untuk menggunakan AuthContext
export const useAuth = () => useContext(AuthContext);
