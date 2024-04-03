import { HTTPS } from "@/config/fetch";
import { ENDPOINTS } from "@/constants/enpoints";
import { IArtist } from "@/interfaces/artists";

interface IResponseArtist {
  artists: IArtist[];
}

export const getArtistServices = async () => {
  return await HTTPS.get<IResponseArtist>(
    `${ENDPOINTS.ARTIST}?ids=2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E`
  );
};
