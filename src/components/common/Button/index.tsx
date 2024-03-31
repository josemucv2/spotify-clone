import s from "./button.module.scss";

type ButtonPropsTypes = {
  content: string;
  icon?: string;
  action: () => void;
};

export const Button: React.FC<ButtonPropsTypes> = ({
  icon,
  content,
  action,
}) => {
  return (
    <button className={s.container} onClick={action}>
      <img src={icon} alt="" />
      <span className="m-auto">{content}</span>
    </button>
  );
};
