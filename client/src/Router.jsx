import { createBrowserRouter, redirect } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
    loader: () => {
      const token = localStorage.getItem("user_auth");
      if (!token) {
        return redirect("/login");
      }
      return null;
    },
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      const token = localStorage.getItem("user_auth");
      if (token) {
        return redirect("/");
      }
      return null;
    },
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default router;
