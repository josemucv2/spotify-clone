import s from "./sidenav.module.scss";
import { LogoSpotify } from "@/assets/SVGComponents/Logo";
export const SideNav = () => {
  return (
    <div className={s.container}>
      <LogoSpotify className="w-28 lg:w-36" />
    </div>
  );
};
