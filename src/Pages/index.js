import NotFound from "./NotFound/NotFound";
import Index from "./Index/Index";
import IndexLayout from "../Layouts/IndexLayout/IndexLayout";

import { createBrowserRouter } from "react-router-dom";
import HeroMain from "./HeroMain/HeroMain";
import HeroRegister from "./HeroRegister/HeroRegister";
import Auth from "./Auth/Auth";
// @createBrowserRouter recibe un array de objetos, cada objeto tiene dos propiedades @Path la ruta @Element el elemento (componente de página que se renderizará en esa ruta)

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout />,
    children: [
      { path: "/", element: <Index /> },
      { path: "/hero", element: <HeroMain /> },
      { path: "/register", element: <HeroRegister /> },
      { path: "/signin", element: <Auth /> },
    ],
  },
  { path: "/*", element: <NotFound /> },
]);
