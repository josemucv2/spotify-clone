import { useState } from "react";
import { Input } from "@/components/common";
import closeEye from "@/assets/icons/closeEye.svg";
import openEye from "@/assets/icons/openEye.svg";

export const LoginUser = () => {
  const [viewPassword, setViewPassword] = useState(false);
  return (
    <div className="lg:px-[28%] px-[10%] space-y-10">
      <Input content="Correo electronico o nombre de usuario" />
      <Input
        content="Contraseña"
        icon={viewPassword ? openEye : closeEye}
        type={viewPassword ? "text" : "password"}
        actionIcon={() => setViewPassword(!viewPassword)}
      />
    </div>
  );
};
