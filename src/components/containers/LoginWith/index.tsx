import { Button } from "@/components/common";
import GoogleIcon from "@/assets/icons/google.svg";
import FacebookIcon from "@/assets/icons/facebook.svg";
import AppleIcon from "@/assets/icons/apple.svg";

export const LoginWith = () => {
  const actionLogin = (value: string) => {
    alert(`iniciando sesión con ${value}`);
  };

  return (
    <div className="flex flex-col justify-center items-center my-0 mx-auto space-y-3 lg:w-[324px] w-[85%]">
      <Button
        content="Inicia sesión con Google"
        icon={GoogleIcon}
        action={() => actionLogin("google")}
      />
      <Button
        content="Inicia sesión con Facebook"
        icon={FacebookIcon}
        action={() => actionLogin("facebook")}
      />
      <Button
        content="Inicia sesión con Apple"
        icon={AppleIcon}
        action={() => actionLogin("Apple")}
      />
    </div>
  );
};
