import { Link } from 'react-router'
import type { FavoriteType } from '../../types/favorite.types'
import { useFavoritesStore } from '../../store/favorites.store'
import './FavoriteCity.css'

type FavoriteCityProps = {
  favorite: FavoriteType
}

export default function FavoriteCity({ favorite }: FavoriteCityProps) {
  const removeFavorite = useFavoritesStore((state) => state.remove)

  return (
    <li className="favorite-city">
      <Link
        to={`/city/${favorite.city_name}?lat=${favorite.latitude}&lon=${favorite.longitude}`}
      >
        {favorite.city_name}-{favorite.country}
      </Link>
      <button
        className="favorite-remove-button"
        onClick={() => removeFavorite(favorite.city_id)}
        title="הסר מהמועדפים"
      >
        הסר
      </button>
    </li>
  )
}
