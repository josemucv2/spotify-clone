import s from "./dasboard.module.scss";
import { CardPlay } from "@/components/containers";
import { artist } from "@/constants";
import React, { useEffect } from "react";
import { getArtistServices } from "@/services/Artists";
import { useArtistsStore } from "@/store/Artists";
import { useTokenAccessStore } from "@/store/Token";
import { HTTPS } from "@/config/fetch";
import { toast } from "react-toastify";
import { LogoSpotify } from "@/assets/SVGComponents";

export const Principal = () => {
  const { setListArtist } = useArtistsStore();
  const { loadertoken, setLoaderToken, setAccessToken } = useTokenAccessStore();

  const getArtist = async () => {
    try {
      const data = await getArtistServices();
      setListArtist(data.artists);
    } catch (error: unknown) {
      console.log(error, "ajsdsjn");
    }
  };

  const getToken = async () => {
    setLoaderToken(true);
    try {
      const data = await HTTPS.getToken();
      HTTPS.setToken(data.access_token);
      setAccessToken(data);
      getArtist();
    } catch (error: unknown) {
      if (error instanceof Error) {
        toast(error.message);
      }
    } finally {
      setLoaderToken(false);
    }
  };

  useEffect(() => {
    getToken();
  }, []);
  return (
    <React.Fragment>
      {loadertoken ? (
        <div className="loading_token flex flex-row justify-center items-center">
          <LogoSpotify className="h-1/4 fadeIn" />
        </div>
      ) : (
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
      )}
    </React.Fragment>
  );
};
