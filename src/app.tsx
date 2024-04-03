import { RouterProvider } from "react-router-dom";
import { router } from "./router/index.tsx";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import React from "react";

export const App = () => {
  return (
    <React.Fragment>
      <ToastContainer />
      <RouterProvider router={router} />
    </React.Fragment>
  );
};
