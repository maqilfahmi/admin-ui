const Button = ({ children }) => {
  return (
    <button
      className="h-12 rounded-md text-sm bg-primary w-full text-white"
      type="submit"
    >
      {children}
    </button>
  );
};

export default Button;
