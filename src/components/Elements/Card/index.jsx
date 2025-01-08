import { useContext } from "react";
import { ColorModeContext } from "../../../context/ColorModeContext";

const Card = (props) => {
  const { title = false, desc, variant } = props;
  const { isDarkMode } = useContext(ColorModeContext); // Gunakan Dark Mode context

  // Kelas dinamis untuk judul
  const titleClasses = isDarkMode
    ? "bg-special-mainBgDark text-white"
    : "bg-special-mainBg text-black";

  // Kelas dinamis untuk body card
  const cardClasses = isDarkMode
    ? "bg-special-mainBgDark text-white"
    : "bg-white text-black";

  return (
    <div className={`flex flex-col flex-1 mb-6 rounded-lg shadow-xl ${cardClasses} ${variant}`}>
      {title && (
        <div
          className={`text-lg font-semibold px-4 py-2 rounded-t-lg ${titleClasses}`}
        >
          {title}
        </div>
      )}
      <div className="bg-white px-6 py-5 rounded-b-lg flex-1 text-black">
        {desc}
      </div>
    </div>
  );
};

export default Card;