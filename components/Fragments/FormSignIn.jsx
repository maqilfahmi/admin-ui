import Button from "../Elements/Button";
import Checkbox from "../Elements/Checkbox";
import LabeledInput from "../Elements/LabeledInput/Index";

const FormSignIn = () => {
    return (
        <form action="">
            <div classname="mb-6">
                <LabeledInput/>
            </div>
            <div classname="mb-6">
                <LabeledInput/>
            </div>
            <div className="mb-3">
                <Checkbox/>
            </div>
            <Button/>
        </form>
      );
    };
    
export default FormSignIn;