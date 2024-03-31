import s from "./dasboard.module.scss";
import { CardPlay } from "@/components/containers";
import { artist } from "@/constants";
import React from "react";

export const Principal = () => {
  return (
    <div className="px-10 py-2">
      <p className={s.text_title}>Artistas Populares</p>
      <div className="flex w-full">
        {artist.map((element) => {
          return (
            <React.Fragment key={element._id}>
              <CardPlay
                title={element.artist}
                description={element.category}
                image={element.image}
                playlist={element.category === "Artist"}
              />
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};
