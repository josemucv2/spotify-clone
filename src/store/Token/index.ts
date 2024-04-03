import { persist, createJSONStorage } from "zustand/middleware";
import { create } from "zustand";
import { IAccessTokenSpotify } from "@/config/fetch";

interface IAccessToken {
  token: IAccessTokenSpotify;
  loadertoken: boolean;
  setLoaderToken: (load: boolean) => void;
  setAccessToken: (token: IAccessTokenSpotify) => void;
}

export const useTokenAccessStore = create(
  persist<IAccessToken>(
    (set) => ({
      token: {
        access_token: "",
        token_type: "Bearer",
        expires_in: 0,
      },
      loadertoken: false,
      setLoaderToken: (load: boolean) => set({ loadertoken: load }),
      setAccessToken: (token: IAccessTokenSpotify) => set({ token }),
    }),
    {
      name: "token-spotify-access",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
