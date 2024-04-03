import { persist, createJSONStorage } from "zustand/middleware";
import { create } from "zustand";
import { IArtist } from "@/interfaces/artists";

interface IArtistsStore {
  listArtist: IArtist[];
  loadArtists: boolean;
  setLoadArtist: (load: boolean) => void;
  setListArtist: (artist: IArtist[]) => void;
}

export const useArtistsStore = create(
  persist<IArtistsStore>(
    (set) => ({
      listArtist: [],
      loadArtists: false,
      setListArtist: (list: IArtist[]) => set({ listArtist: list }),
      setLoadArtist: (load: boolean) => set({ loadArtists: load }),
    }),
    {
      name: "artist-spotify",
      storage: createJSONStorage(() => localStorage),
    }
  )
);
