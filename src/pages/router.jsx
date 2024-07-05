import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import Home from "./home/Home";
import NotFound from "./404/404";
import DefaultLayout from "@/components/layout/DefaultLayout";
import Contact from "./contact/Contact";
import SignIn from "./Sign/SignIn";
import SignUp from "./Sign/SignUp";

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
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/signin",
        element: <SignIn />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}