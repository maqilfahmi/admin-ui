import Header from "../Fragments/Header";
import Navbar from "../Fragments/Navbar";
import { useContext } from "react";
import { NotifContext } from "../../context/notifContext";
import { ColorModeContext } from "../../context/ColorModeContext"; // Import ColorModeContext
import SimpleBackdrop from "../Elements/Backdrop";
import CustomizedSnackbars from "../Elements/SnackBar";

const MainLayout = (props) => {
  const { children } = props;
  const { msg, setMsg, open, setOpen, isLoading, setIsLoading } = useContext(NotifContext);
  const { isDarkMode } = useContext(ColorModeContext); // Gunakan Dark Mode context

  return (
    <div
      className={`flex w-screen min-h-screen max-w-full ${
        isDarkMode ? "bg-special-mainBgDark text-white" : "bg-special-mainBg text-black"
      }`}
    >
      {/* navbar start */}
      <Navbar />
      {/* navbar end */}
      <div className="w-screen">
        {isLoading && (
          <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading} />
        )}
        {msg && (
          <CustomizedSnackbars
            severity={msg.severity}
            message={msg.desc}
            open={open}
            setOpen={setOpen}
          />
        )}
        {/* header start */}
        <Header />
        {/* header end */}
        {/* content start */}
        <main className="px-6 py-4">{children}</main>
        {/* content end */}
      </div>
    </div>
  );
};

export default MainLayout;