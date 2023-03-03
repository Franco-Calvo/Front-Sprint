import NotFound from "./NotFound/NotFound";
import Index from "./Index/Index";
import IndexLayout from "../Layouts/IndexLayout/IndexLayout";
import MainLayout from "../Layouts/MainLayout/MainLayout";

import {createBrowserRouter} from "react-router-dom";
import AuthorForm from "./AuthorForm/AuthorForm";

// @createBrowserRouter recibe un array de objetos, cada objeto tiene dos propiedades @Path la ruta @Element el elemento (componente de página que se renderizará en esa ruta)

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout />,
    children: [
      {
        index: true,
        element: <Index />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/author-form",
        element: <AuthorForm />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
  {path: "/notfound", element: <NotFound />},
]);
