import { create } from "zustand";
import type { City } from "../types/city.types";
import type { FavoriteType } from "../types/favorite.types";
import {
  getFavorites,
  addFavorite,
  removeFavorite,
} from "../api/favorites.api";
import { getUserName } from "../utils/user.utils";

type FavoritesStore = {
  favorites: FavoriteType[];
  error: string | null;
  get: () => Promise<void>;
  add: (city: City) => Promise<void>;
  remove: (cityId: number) => Promise<void>;
};

export const useFavoritesStore = create<FavoritesStore>((set) => ({
  favorites: [],
  error: null,

  get: async () => {
    const userName = getUserName();
    if (!userName) return;

    try {
      const favorites = await getFavorites(userName);
      set({ favorites, error: null });
    } catch (err) {
      set({ error: (err as Error).message });
    }
  },

  add: async (city) => {
    const userName = getUserName();
    if (!userName) return;

    try {
      const favorite = await addFavorite(city, userName);
      set((state) => ({
        favorites: [...state.favorites, favorite],
        error: null,
      }));
    } catch (err) {
      set({ error: (err as Error).message });
    }
  },

  remove: async (cityId) => {
    const userName = getUserName();
    if (!userName) return;

    try {
      await removeFavorite(userName, cityId);
      set((state) => ({
        favorites: state.favorites.filter(
          (favorite) => favorite.city_id !== cityId,
        ),
        error: null,
      }));
    } catch (err) {
      set({ error: (err as Error).message });
    }
  },
}));
