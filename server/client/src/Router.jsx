// src/Router.jsx
import { createBrowserRouter, redirect } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import LoginPage from "./Pages/Login.jsx";
import RegisterPage from "./Pages/Register.jsx";
import UserPage from "./Pages/UserPage.jsx";
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
