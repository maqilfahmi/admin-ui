import Input from "./Input";
import Label from "./Label";

const LabeledInput = ({ type = 'text', labelText, placeholder, name, id }) => {
  return (
    <div className="mb-6">
      <Label htmlFor={id} labelText={labelText} />
      <Input type={type} placeholder={placeholder} name={name} id={id} />
    </div>
  );
};

export default LabeledInput;
