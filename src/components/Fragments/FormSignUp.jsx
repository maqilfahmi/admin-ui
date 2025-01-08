import Button from "../Elements/Button";
import LabeledInput from "../Elements/LabeledInput";
import { useContext } from "react";
import { ColorModeContext } from "../../context/ColorModeContext";

const FormSignUp = () => {
  const { isDarkMode } = useContext(ColorModeContext); // Gunakan context untuk Dark Mode

  return (
    <form action="">
      <div className="mb-6">
        <LabeledInput
          label="Name"
          type="text"
          placeholder="John Doe"
          name="name"
          className={`${
            isDarkMode
              ? "bg-gray-800 text-white border-gray-600"
              : "bg-white text-black border-gray-300"
          }`}
        />
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Email Address"
          type="email"
          placeholder="hello@example.com"
          name="email"
          className={`${
            isDarkMode
              ? "bg-gray-800 text-white border-gray-600"
              : "bg-white text-black border-gray-300"
          }`}
        />
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Password"
          type="password"
          placeholder="*"
          name="password"
          className={`${
            isDarkMode
              ? "bg-gray-800 text-white border-gray-600"
              : "bg-white text-black border-gray-300"
          }`}
        />
      </div>
      <Button variant="bg-primary w-full text-white" type="submit">
        Sign Up
      </Button>
    </form>
  );
};

export default FormSignUp;