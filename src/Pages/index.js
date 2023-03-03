import NotFound from "./NotFound/NotFound";
import Index from "./Index/Index";
import IndexLayout from "../Layouts/IndexLayout/IndexLayout";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import HeroMain from "./HeroMain/HeroMain";
import HeroRegister from "./HeroRegister/HeroRegister";
import Auth from "./Auth/Auth";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/hero", element: <HeroMain /> },
      {
        path: "/signup",
        element: <MainLayout />,
        children: [{ path: "/signup", element: <HeroRegister /> }],
      },
      {
        path: "/signin",
        element: <MainLayout />,
        children: [{ path: "/signin", element: <Auth /> }],
      },
    ],
  },
  { path: "/*", element: <NotFound /> },
]);
