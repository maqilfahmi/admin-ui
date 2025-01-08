import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErrorRoute from "./pages/errorRoute";
import ForgotPasswordPage from "./pages/forgotPassword";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import GoalPage from "./pages/goal";
import ExpensePage from "./pages/expense";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./context/authContext";

const App = () => {
    const { isLoggedIn } = useContext(AuthContext);
    const [isDarkMode, setIsDarkMode] = useState(() => {
      const savedMode = localStorage.getItem('colorMode');
      return savedMode ? JSON.parse(savedMode) : false;
    });

    useEffect(() => {
      // Terapkan mode yang tersimpan di localStorage saat aplikasi dimuat
      if (isDarkMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
    }, [isDarkMode]);

    const toggleColorMode = () => {
      setIsDarkMode((prevMode) => {
        const newMode = !prevMode;
        localStorage.setItem('colorMode', JSON.stringify(newMode));
        return newMode;
      });
    };

    const RequireAuth = ({ children }) => {
      useEffect(() => {
        const savedMode = localStorage.getItem('colorMode');
        if (savedMode && JSON.parse(savedMode) !== isDarkMode) {
          setIsDarkMode(JSON.parse(savedMode));
        }
      }, [isLoggedIn]);

      return isLoggedIn ? children : <Navigate to="/login" />;
    };

    const myRouter = createBrowserRouter([
      {
        path: "/",
        element: <RequireAuth><DashboardPage /></RequireAuth>,
        errorElement: <ErrorRoute />,
      },
      {
        path: "/login",
        element: <SignInPage toggleColorMode={toggleColorMode} isDarkMode={isDarkMode} />,
      },
      {
        path: "/register",
        element: <SignUpPage />,
      },
      {
        path: "/forgot-password",
        element: <ForgotPasswordPage />,
      },
      {
        path: "/balance",
        element: <RequireAuth><BalancePage /></RequireAuth>,
      },
      {
        path: "/goal",
        element: <RequireAuth><GoalPage /></RequireAuth>,
      },
      {
        path: "/expense",
        element:<RequireAuth><ExpensePage /></RequireAuth>,
      },
    ]);

    return (
      <>
        <RouterProvider router={myRouter} />
      </>
    );
};

export default App;