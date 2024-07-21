import { createBrowserRouter, RouterProvider, Outlet, Navigate } from "react-router-dom";
import Home from "./home/Home";
import NotFound from "./404/404";
import DefaultLayout from "@/components/layout/DefaultLayout";
import SignIn from "./Sign/SignIn";
import SignUp from "./Sign/SignUp";
import Products from "./Products/Products";
import Activities from "./Activities/Activities"; 
import Dashboard from "./Dashboard/Dashboard";
import ProtectedRoute from "@/components/security/ProtectedRoute"; // Import the ProtectedRoute component
import DashboardLayout from "@/components/layout/dashboard/DashboardLayout";
import CRUDproducts from "./CRUDproducts/products";

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
      }
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "/dashboard/products",
        element: <CRUDproducts />,
      }
    ],
  }
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}