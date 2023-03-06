import NotFound from "./NotFound/NotFound";
import Index from "./Index/Index";
import IndexLayout from "../Layouts/IndexLayout/IndexLayout";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import HeroRegister from "./HeroRegister/HeroRegister";
import MangaForm from '../Pages/MangaForm/Mangaform'
import Auth from "./Auth/Auth";
import AuthorForm from "./AuthorForm/AuthorForm";

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
        path: "/",
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
        path: "/signup",
        element: <HeroRegister />,
      },
      {
        path: "/signin",
        element: <Auth />,
      },
      {
        path: "/mangas",
        element: <MangaForm />
      },
      {
        path: "/",
        element: <NotFound />,
      },
    ],
  },
  { path: "/notfound", element: <NotFound /> },
]);
