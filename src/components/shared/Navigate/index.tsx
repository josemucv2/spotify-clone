import s from "./navigate.module.scss";
import {
  SVGComponentHome,
  LogoSpotify,
  SVGComponentSearch,
  SVGComponentLibrary,
  SVGComponentsWorld,
} from "@/assets/SVGComponents";
import { ButtonSpotify } from "@/components/common";

import { IconsNavigate, Actions } from "@/components/containers";

export const NavigateDashboard = () => {
  const actions = (text: string) => {
    alert(text);
  };
  return (
    <div className="space-y-5">
      <div className={s.container}>
        <LogoSpotify className="h-9" />
        <div className="flex flex-col pt-7 space-y-10">
          <IconsNavigate SVGComponent={SVGComponentHome} label="Inicio" />
          <IconsNavigate SVGComponent={SVGComponentSearch} label="Buscar" />
        </div>
      </div>

      <div className={`${s.container} space-y-5`}>
        <IconsNavigate
          SVGComponent={SVGComponentLibrary}
          label="Tu biblioteca"
        />

        <Actions
          title="Crea tu primera lista"
          description="Es muy facil, te echaremos una mano"
          textButton="Crea lista"
          action={() => actions("Creando lista")}
        />

        <Actions
          title="Encuentra podcast que quieras seguir"
          description="Te avisaremos cuando salgan nuevos episodios"
          textButton="Explorar podcasts"
          action={() => actions("buscando podcast")}
        />
        <div className="flex flex-wrap">
          <p className="mr-[32px] mt-14 text-sm text-slate-300 cursor-pointer">
            Legal
          </p>
          <p className="mr-[32px] mt-14 text-sm text-slate-300 cursor-pointer">
            Centro de seguridad y privacidad
          </p>
          <p className="mr-[32px] mt-14 text-sm text-slate-300 cursor-pointer">
            Politica de privacidad
          </p>
          <p className="mr-[32px] mt-14 text-sm text-slate-300 cursor-pointer">
            Cookies
          </p>
          <p className="mr-[32px] mt-14 text-sm text-slate-300 cursor-pointer">
            Informacion sobre los anuncios
          </p>
          <p className="mr-[32px] mt-14 text-sm text-slate-300 cursor-pointer">
            Accesibilidad
          </p>
        </div>
        <ButtonSpotify
          content="Español de españa"
          bg="bg_transparent_spotify"
          action={() => actions("cambiar idioma")}
          width="inline px-10 py-3"
          SVGComponent={SVGComponentsWorld}
        />
      </div>
    </div>
  );
};
