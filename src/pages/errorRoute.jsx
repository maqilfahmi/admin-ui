import { useRouteError } from "react-router-dom";
import Logo from "../components/Elements/Logo";
import { useContext } from "react";
import { ColorModeContext } from "../context/ColorModeContext";

const ErrorRoute = () => {
  const error = useRouteError();
  const { isDarkMode } = useContext(ColorModeContext); // Gunakan Dark Mode Context

  return (
    <div
      className={`flex justify-center min-h-screen items-center flex-col ${
        isDarkMode ? "bg-special-mainBgDark text-white" : "bg-special-mainBg text-black"
      }`}
    >
      <Logo />
      <h1 className="text-2xl font-bold mt-3 mb-1">Sorry,</h1>
      <p>
        {error.status} | {error.statusText || error.message}
      </p>
    </div>
  );
};

export default ErrorRoute;