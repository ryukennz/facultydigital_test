import { createBrowserRouter, redirect } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import UserPage from "./Pages/UserPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
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
  {
    path: "/users",
    element: <UserPage />,
    loader: () => {
      const token = localStorage.getItem("user_auth");
      if (!token) {
        return redirect("/login");
      }
      return null;
    },
  },
]);

export default router;
