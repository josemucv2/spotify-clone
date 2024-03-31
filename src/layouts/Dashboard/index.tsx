import {
  FooterDashboard,
  HeaderDashboard,
  NavigateDashboard,
} from "@/components/shared";
import s from "./dashboard.module.scss";
import { Outlet } from "react-router-dom";

export const Dashboard = () => {
  return (
    <div className="p-4 space-y-4">
      <div className="flex space-x-4">
        <NavigateDashboard />
        <div className={s.container}>
          <HeaderDashboard />
          <div className={s.container_children}>
            <Outlet />
          </div>
        </div>
      </div>
      <FooterDashboard />
    </div>
  );
};
