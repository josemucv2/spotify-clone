import s from "./actions.module.scss";
import { ButtonSpotify } from "@/components/common";

type ActionsPropsTypes = {
  title: string;
  description: string;
  textButton: string;
  action: () => void;
};

export const Actions: React.FC<ActionsPropsTypes> = ({
  title,
  description,
  textButton,
  action,
}) => {
  return (
    <div className={`${s.container} space-y-4`}>
      <div className={s.title}>{title}</div>
      <div>{description}</div>
      <ButtonSpotify
        content={textButton}
        action={action}
        bg="bg_white_spotify"
        width="inline px-4 py-3"
      />
    </div>
  );
};
