import { CheckBox } from "@/components/common";
import s from "./login.module.scss";
import { LoginWith, LoginUser } from "@/components/containers";
import { ButtonSpotify } from "@/components/common";
export const Login = () => {
  const login = () => {
    alert("iniciando sesion");
  };
  return (
    <div className={s.container}>
      <div className={s.element}>
        <h1 className={s.title}>Inicia sesión en Spotify</h1>
        <LoginWith />
        <hr className="lg:mx-[100px] mx-[40px] my-[32px]" />
        <LoginUser />
        <div className="lg:px-[28%] px-[10%] space-y-10 my-[32px]">
          <CheckBox />
          <ButtonSpotify
            content="Iniciar sesión"
            action={login}
            height="h-16"
            bg_green
          />
        </div>
        <div className="flex flex-col justify-center items-center my-10 space-y-7">
          <p className={`${s.text_password} underline`}>
            ¿Se te ha olvidado la contraseña?
          </p>
          <hr className="lg:mx-[100px] mx-[40px] my-[32px] w-[72%]" />
          <div className="flex space-x-3 items-center">
            <p className={s.not_account}>¿No tienes cuenta?</p>
            <p className={s.text_password}>Suscríbete a Spotify</p>
          </div>
        </div>
      </div>
    </div>
  );
};
