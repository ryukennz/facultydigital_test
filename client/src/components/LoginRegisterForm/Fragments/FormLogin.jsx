import { useState } from "react";
import Button from "../Elements/Button";
import DontHaveAnAcc from "../Elements/DontHaveAnAcc";
import Input from "../Elements/Inputs";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
function FormLogin() {
  const redirect = useNavigate();
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });

  const onChange = (e) => {
    const { value, name } = e.target;
    setLogin({
      ...login,
      [name]: value,
    });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios({
        method: "POST",
        url: "http://localhost:9000/api/users/login",
        data: login,
      });
      if (response.status === 200) {
        setLogin(response.data);
        toast.success(response.data.message);
        redirect("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };
  return (
    <form className="space-y-4 md:space-y-6" onSubmit={onSubmit}>
      <Input
        onChange={onChange}
        value={login.username}
        type={"text"}
        name={"username"}
        placeHolder={"Username"}
      />
      <Input
        onChange={onChange}
        value={login.password}
        type={"password"}
        name={"password"}
        placeHolder={"******"}
      />
      <Button buttonName="Sign in" />
      <DontHaveAnAcc
        onClick={() => redirect("/register")}
        dontHaveAcc="Don’t have an account yet?"
        signUp=" Sign up"
      />
    </form>
  );
}

export default FormLogin;
