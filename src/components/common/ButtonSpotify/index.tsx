import { SVGProps, FC } from "react";
import s from "./buttonSpotify.module.scss";

type ButonPropsTypes = {
  action: () => void;
  content: string;
  icon?: string;
  bg?: "bg_green_spotify" | "bg_white_spotify" | "bg_transparent_spotify";
  width?: string;
  height?: string;
  SVGComponent?: FC<SVGProps<SVGSVGElement>>;
};

export const ButtonSpotify: React.FC<ButonPropsTypes> = ({
  action,
  content,
  icon,
  bg = "bg_green_spotify",
  width = "w-full",
  height = "h-full",
  SVGComponent,
}) => {
  return (
    <button
      className={`${s.container} ${s[bg]} ${width} ${height} flex space-x-3`}
      onClick={action}
    >
      {icon && <img src={icon} alt="" />}
      {SVGComponent && <SVGComponent />}
      <span
        className={`m-auto ${bg !== "bg_transparent_spotify" && s.content}`}
      >
        {content}
      </span>
    </button>
  );
};
