import { createBrowserRouter } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import LoginPage from "./Pages/Login";
import RegisterPage from "./Pages/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

export default router;
