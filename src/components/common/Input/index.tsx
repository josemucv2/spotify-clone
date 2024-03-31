import s from "./input.module.scss";
import errorIcon from "@/assets/icons/errorRed.svg";

type InputPropsTypes = {
  content: string;
  icon?: string;
  errorMsg?: string;
  type?: "password" | "text";
  actionIcon?: () => void;
};

export const Input: React.FC<InputPropsTypes> = ({
  content,
  icon,
  errorMsg,
  type = "text",
  actionIcon,
}) => {
  return (
    <div className="space-y-3">
      <label>{content}</label>
      <div className={`${s.container} cursor-text flex`}>
        <input placeholder={content} className={s.input} type={type} />
        {icon && (
          <img
            src={icon}
            alt=""
            width={30}
            className="pr-3"
            onClick={actionIcon}
          />
        )}
      </div>
      {errorMsg && (
        <div className="flex items-center space-x-1">
          <img src={errorIcon} width={20} />
          <p className={s.text_error}>{errorMsg}</p>
        </div>
      )}
    </div>
  );
};
