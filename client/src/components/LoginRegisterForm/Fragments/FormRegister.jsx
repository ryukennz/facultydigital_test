import { useState } from "react";
import Button from "../Elements/Button";
import DontHaveAnAcc from "../Elements/DontHaveAnAcc";
import Input from "../Elements/Inputs";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function FormRegister() {
  const redirect = useNavigate();

  const [register, setRegister] = useState({
    username: "",
    password: "",
    firstName: "",
    lastName: "",
  });

  const handleChange = (e) => {
    const { value, name } = e.target;
    setRegister({
      ...register,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:9000/api/auth/register",
        data: register,
      });
      if (response.status === 201) {
        setRegister(response.data.data);
        toast.success(response.data.message);
        redirect("/login");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
      <Input
        onChange={handleChange}
        value={register.username}
        type={"text"}
        name={"username"}
        placeHolder={"Username"}
      />
      <Input
        onChange={handleChange}
        value={register.password}
        type={"password"}
        name={"password"}
        placeHolder={"******"}
      />
      <Input
        onChange={handleChange}
        value={register.firstName}
        type={"text"}
        name={"firstName"}
        placeHolder={"First name"}
      />
      <Input
        onChange={handleChange}
        value={register.lastName}
        type={"text"}
        name={"lastName"}
        placeHolder={"Last name"}
      />
      <Button buttonName="Sign up" />
      <DontHaveAnAcc
        onClick={() => redirect("/login")}
        dontHaveAcc="Already have an account?"
        signUp=" Sign in"
      />
    </form>
  );
}

export default FormRegister;
