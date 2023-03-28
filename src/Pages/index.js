import NotFound from "./NotFound/NotFound";
import Index from "./Index/Index";
import IndexLayout from "../Layouts/IndexLayout/IndexLayout";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import { createBrowserRouter } from "react-router-dom";
import HeroRegister from "./HeroRegister/HeroRegister";
import MangaForm from "../Pages/MangaForm/Mangaform";
import Auth from "./Auth/Auth";
import AuthorForm from "./AuthorForm/AuthorForm";
import ChapterForm from "./ChapterForm/ChapterForm";
import Manga from "./Manga/Manga";
import Author from "./Author/Author";
import MangasView from "./MangasView/MangasView";
import Page from "./Page/Pages";
import MyMangas from "../Components/MyMangas/MyMangas";
import AuthorProfile from "./AuthorProfile/Authorprofile"
import AdminPanel from "./AdminPanel/AdminPanel";
import CompanieForm from './CompanieForm/Companieform'
import NewRole from "./NewRole/Newrole";
import EditChapter from "./EditChapter/EditChapter";

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
        path: "/author/:id",
        element: <Author />,
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
        path: "/chapher-form/:manga_id",
        element: <ChapterForm />,
      },
      {
        path: "/create-mangas",
        element: <MangaForm />,
      },

      {
        path: "/create-company",
        element: <CompanieForm/>,
      },
      {
        path: "/mangas",
        element: <MangasView />,
      },
      {
        path: "/mymangas",
        element: <MyMangas />,
      },
      {
        path: "/adminPanel",
        element: <AdminPanel />,
      },
      {
        path: "/newRole",
        element: <NewRole/>,
      },
      {
        path: "/mangas/:id/:page",
        element: <Manga />,
      },
      {
        path: "/chapters/:id/:page",
        element: <Page />,
      },
      {
        path: "/edit/:manga_id",
        element: <EditChapter />,
      },
      {
        path: "/profile",
        element: <AuthorProfile />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
  { path: "/notfound", element: <NotFound /> },
]);
