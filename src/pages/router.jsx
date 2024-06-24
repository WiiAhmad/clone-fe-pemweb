import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router} />;
}