import { ButtonSpotify } from "@/components/common";
import s from "./headerDashboard.module.scss";
import { useNavigate } from "react-router-dom";

import { SVGComponentPreview, SVGComponentNext } from "@/assets/SVGComponents";
export const HeaderDashboard = () => {
  const goPage = useNavigate();

  return (
    <div className="flex justify-between px-10 py-5">
      <div className="flex space-x-3">
        <div className={s.botton_next_preview}>
          <SVGComponentPreview />
        </div>
        <div className={s.botton_next_preview}>
          <SVGComponentNext />
        </div>
      </div>
      <div className="flex space-x-8 items-center">
        <p className={s.text_register}>Registrate</p>
        <ButtonSpotify
          content="Iniciar Sesion"
          bg="bg_white_spotify"
          action={() => goPage("/login")}
          width="inline px-10"
        />
      </div>
    </div>
  );
};
