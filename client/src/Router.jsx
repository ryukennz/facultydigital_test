// src/Router.jsx
import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "./components/Layout";
import Dashboard from "./Pages/Dashboard";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";
import UserPage from "./Pages/UserPage";
import Properties from "./Pages/Properties.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    loader: () => {
      const token = localStorage.getItem("user_auth");
      if (!token) {
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/users",
        element: <UserPage />,
      },
      {
        path: "/properties",
        element: <Properties />,
      },
    ],
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
