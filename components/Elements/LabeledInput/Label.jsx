const Label = ({ htmlFor, labelText }) => {
  return (
    <label htmlFor={htmlFor} className="block text-sm mb-2">
      {labelText}
    </label>
  );
};

export default Label;
