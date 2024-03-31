import { ButtonSpotify } from "@/components/common";
import s from "./footerDashboar.module.scss";
export const FooterDashboard = () => {
  const goRregigister = () => {
    alert("Registrandote");
  };
  return (
    <div className={`${s.container} flex justify-between`}>
      <div className="space-y-2">
        <div className="font-bold text-base">Muestra de Spotify</div>
        <div className="text-base">
          Registrate para disfrutar canciones yu podcast sin limites, con
          ainuncios ocacionales. no hace falta tarjeta de credito
        </div>
      </div>
      <ButtonSpotify
        content="Registrate gratis"
        width="inline px-10 py-6"
        bg="bg_white_spotify"
        action={goRregigister}
      />
    </div>
  );
};
