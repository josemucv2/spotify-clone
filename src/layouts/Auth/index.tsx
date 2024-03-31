import { Outlet } from "react-router-dom";
import { SideNav, Footer } from "@/components/shared";
import STYLE_AUTH from "./auth.module.scss";

export const AuthLayout = () => {
  return (
    <div className={STYLE_AUTH.container}>
      <SideNav />
      <Outlet />
      <Footer />
    </div>
  );
};
