import React from "react";
import { createRoot } from "react-dom/client";
import "./assets/styles/globals.scss";
import { router } from "./router/index.tsx";

import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
