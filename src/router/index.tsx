import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { AuthLayout, Dashboard } from "../layouts";
import { Login } from "../views/Auth/Login";
import { Principal } from "@/views/Dashboard";

const elementsRoutes = createRoutesFromElements(
  <Route>
    <Route element={<Dashboard />} path="/">
      <Route path="" element={<Principal />}></Route>
    </Route>
    <Route element={<AuthLayout />} path="/login">
      <Route path="" element={<Login />} />
      <Route path="Register" element={<Login />} />
    </Route>
  </Route>
);

export const router = createBrowserRouter(elementsRoutes);
