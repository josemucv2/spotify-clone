import s from "./style.module.scss";
import { FC, SVGProps } from "react";

type IConsNavigatePropsTypes = {
  SVGComponent: FC<SVGProps<SVGSVGElement>>;
  label: string;
};

export const IconsNavigate: FC<IConsNavigatePropsTypes> = ({
  SVGComponent,
  label,
}) => {
  return (
    <li className={`flex items-center cursor-pointer ${s.icons_text}`}>
      <SVGComponent className={s.icons} />
      {label}
    </li>
  );
};
