// src/App.jsx
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/authContext"; // Import AuthContext
import SignInPage from "./pages/signIn";
import SignUpPage from "./pages/signUp";
import ErrorRoute from "./pages/errorRoute";
import ForgotPasswordPage from "./pages/forgotPassword";
import DashboardPage from "./pages/dashboard";
import BalancePage from "./pages/balance";
import GoalPage from "./pages/goal";
import ExpensePage from "./pages/expense";

const App = () => {
  const { isLoggedIn } = useContext(AuthContext);

  // Fungsi untuk memastikan halaman hanya bisa diakses oleh pengguna yang sudah login
  const RequireAuth = ({ children }) => {
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
      element: <SignInPage />,
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
      element: <BalancePage />,
    },
    {
      path: "/goal",
      element: <GoalPage />,
    },
    {
      path: "/expense",
      element: <ExpensePage />,
    },
  ]);

  return <RouterProvider router={myRouter} />;
};

export default App;
