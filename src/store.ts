import { create } from "zustand";

interface GameQuery {
  genreID?: number;
  platformID?: number;
  sortOrder?: string;
  searchText?: string;
}

interface GameQueryStore {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setGenreId: (genreID: number) => void;
  setPlatformId: (platformID: number) => void;
  setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
  gameQuery: {},

  setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),

  setGenreId: (genreID) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, genreID } })),

  setPlatformId: (platformID) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, platformID } })),

  setSortOrder: (sortOrder) =>
    set((store) => ({ gameQuery: { ...store.gameQuery, sortOrder } })),
}));

export default useGameQueryStore;
