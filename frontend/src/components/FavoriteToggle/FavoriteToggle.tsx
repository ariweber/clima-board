import type { City } from "../../types/city.types";
import { useFavoritesStore } from "../../store/favorites.store";
import "./FavoriteToggle.css";

type FavoriteToggleProps = {
  city: City;
};

export default function FavoriteToggle({ city }: FavoriteToggleProps) {
  const favorites = useFavoritesStore((state) => state.favorites);
  const addFavorite = useFavoritesStore((state) => state.add);
  const removeFavorite = useFavoritesStore((state) => state.remove);

  const isFavorite = favorites.some((favorite) => favorite.city_id === city.id);

  const toggleFavorite = () => {
    if (isFavorite) {
      removeFavorite(city.id);
    } else {
      addFavorite(city);
    }
  };

  return (
    <button
      className={`favorite-toggle ${isFavorite ? "is-favorite" : ""}`}
      onClick={toggleFavorite}
      title={isFavorite ? "הסר מהמועדפים" : "הוסף למועדפים"}
    >
      {isFavorite ? "★" : "☆"}
    </button>
  );
}
