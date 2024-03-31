import s from "./card.module.scss";

type CardPropsTypes = {
  title: string;
  description: string;
  image: string;
  playlist?: boolean;
};

export const CardPlay: React.FC<CardPropsTypes> = ({
  title,
  description,
  image,
  playlist,
}) => {
  return (
    <div className={s.container}>
      <img
        src={image}
        alt=""
        className={`${
          playlist ? s.border_image_album : s.border_image_artist
        } ${s.image_width_height}`}
      />
      <div className="mt-3 space-y-4">
        <div className={s.title}>{title}</div>
        <div>{description}</div>
      </div>
    </div>
  );
};
