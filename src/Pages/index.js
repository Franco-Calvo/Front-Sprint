import NotFound from "./NotFound/NotFound";
import Index from "./Index/Index"
import IndexLayout from "../Layouts/IndexLayout/IndexLayout"

import { createBrowserRouter } from "react-router-dom";

// @createBrowserRouter recibe un array de objetos, cada objeto tiene dos propiedades @Path la ruta @Element el elemento (componente de página que se renderizará en esa ruta)

export const router = createBrowserRouter([
  {
    path: "/",
    element: <IndexLayout/>,
    children: [{
      path: "/",
      element: <Index/>
    },{
      path: "/*",
      element: <NotFound/>
    }]
  },
  {path: "/notfound", element: <NotFound/>}
])