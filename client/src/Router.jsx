import { createBrowserRouter } from "react-router-dom";
import MainPage from "./Pages/MainPage";
import LoginPage from "./Pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default router;
