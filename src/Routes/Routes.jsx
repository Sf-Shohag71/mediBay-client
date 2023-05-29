import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Blog from "../Pages/Blog/Blog";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import AllToys from "../Pages/AllToys/AllToys";
import FeaturedToyDetails from "../Pages/Home/FeaturedToys/FeaturedToyDetails";
import AddToy from "../Pages/AddToys/AddToy";
import ToyDetails from "../Pages/AllToys/ToyDetails";
import MyToys from "../Pages/MyToys/MyToys";
import PrivateRoute from "./PrivateRoute";
import UpdateToy from "../Pages/MyToys/UpdateToy";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/registration",
        element: <Registration></Registration>,
      },
      {
        path: "/allMedicines",
        element: <AllToys></AllToys>,
      },
      {
        path: "/addMedicine",
        element: <PrivateRoute><AddToy></AddToy></PrivateRoute>,
      },
      {
        path: "/medicine/:id",
        element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>,
        loader: ({ params }) => fetch(`https://toytronix-server.vercel.app/medicine/${params.id}`)
      },
      {
        path: "/myMedicines",
        element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
      },
      {
        path: "/updateToy/:id",
        element: <UpdateToy></UpdateToy>,
        loader: ({params})=>fetch(`https://toytronix-server.vercel.app/updateToy/${params.id}`)
      },
      {
        path: "/featuredToy/:id",
        element: <PrivateRoute><FeaturedToyDetails></FeaturedToyDetails></PrivateRoute>,
        loader: ({ params }) =>
          fetch(`https://toytronix-server.vercel.app/featuredToy/${params.id}`),
      },
    ],
  },
]);
export default router;
