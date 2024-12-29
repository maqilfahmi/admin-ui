import Button from "../Elements/Button";
import CheckBox from "../Elements/CheckBox";
import LabeledInput from "../Elements/LabeledInput";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useContext } from "react";
import CustomizedSnackbars from "../Elements/SnackBar";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom"; 
import { AuthContext } from "../../context/authContext";
import { NotifContext } from "../../context/notifContext";

const FormSignIn = () => {
  const { setMsg, setOpen, setIsLoading } = useContext(NotifContext);
  const { setIsLoggedIn, setName } = useContext(AuthContext);  // Mengambil setName untuk menyimpan nama pengguna
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });

  const onErrors = (errors) => console.error(errors);

  const onFormSubmit = async (data) => {
    setIsLoading(true);
    try {
      const response = await axios.post(
        "https://jwt-auth-eight-neon.vercel.app/login",
        {
          email: data.email,
          password: data.password,
        }
      );
      setIsLoading(false); 

      const decoded = jwtDecode(response.data.refreshToken); // Decode token JWT untuk mendapatkan nama
      console.log("Decoded token:", decoded);

      if (response.status === 200) {
        setOpen(true);
        setMsg({ severity: "success", desc: "Login berhasil!" });
        
        // Menyimpan token dan nama ke localStorage dan state
        localStorage.setItem("refreshToken", response.data.refreshToken);
        setIsLoggedIn(true);
        setName(decoded.name);  // Set nama yang diambil dari token ke context
        navigate("/");  // Arahkan ke halaman utama setelah login
      }
    } catch (error) {
      setIsLoading(false);

      if (error.response) {
        setOpen(true);
        setMsg({ severity: "error", desc: error.response.data.msg });
      } else {
        setOpen(true);
        setMsg({ severity: "error", desc: "Terjadi kesalahan, coba lagi." });
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onFormSubmit, onErrors)}>
      <div className="mb-6">
        <LabeledInput
          label="Email address"
          type="email"
          placeholder="hello@example.com"
          name="email"
          register={register("email", {
            required: "Email address is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Invalid email address format",
            },
          })}
        />
        {errors?.email && <div className="text-red-500">{errors.email.message}</div>}
      </div>
      <div className="mb-6">
        <LabeledInput
          label="Password"
          type="password"
          placeholder="*************"
          name="password"
          register={register("password", {
            required: "Password is required",
          })}
        />
        {errors?.password && (
          <div className="text-red-500">{errors.password.message}</div>
        )}
      </div>
      <div className="mb-3">
        <CheckBox
          label="Keep me signed in"
          name="status"
          register={register("status")}
        />
      </div>
      <Button variant="bg-primary w-full text-white" type="submit">
        Login
      </Button>
    </form>
  );
};

export default FormSignIn;
