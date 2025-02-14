import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Moves from "./pages/Moves";
import AppLayout from "./layout/AppLayout";
import { GetAPIData } from "./api/GetAPIData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,

    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/moves",
        element: <Moves />,
        loader: GetAPIData
      },

      {
        path: "/contact",
        element: <Contact />
      }
    ]
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
