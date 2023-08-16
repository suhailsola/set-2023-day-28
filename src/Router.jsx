import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Public from "./pages/Public";
import Private from "./pages/Private";
import Page404 from "./pages/404";
import Home from "./pages/Home";
import { useContext } from "react";
import { AdminContext } from "./App";

function Router() {
  const { isAdmin, setIsAdmin } = useContext(AdminContext);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/public",
      element: <Public />,
    },
    {
      path: "/private",
      element: isAdmin ? <Private /> : <Navigate to={"/"} />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "*",
      element: <Page404 />,
      // element: <Navigate to={"/"} />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default Router;
