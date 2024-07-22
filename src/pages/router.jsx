import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import Home from "./home/Home";
import NotFound from "./404/404";
import DefaultLayout from "@/components/layout/DefaultLayout";
import SignIn from "./Sign/SignIn";
import SignUp from "./Sign/SignUp";
import Products from "./Products/Products";
import Activities from "./Activities/Activities";   

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Navigate to="/home" replace />,
      },
      {
        path: "/home",
        element: <Outlet />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/activities",
        element: <Activities />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}
