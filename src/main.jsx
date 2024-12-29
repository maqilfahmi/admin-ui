// src/main.jsx
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ThemeContextProvider } from './context/themeContext.jsx';
import { AuthContextProvider } from './context/authContext.jsx';  // Pastikan ini benar
import { NotifContextProvider } from './context/notifContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthContextProvider>  {/* Membungkus dengan AuthContextProvider */}
      <NotifContextProvider>
        <ThemeContextProvider>
          <App />
        </ThemeContextProvider>
      </NotifContextProvider>
    </AuthContextProvider>
  </StrictMode>
);
