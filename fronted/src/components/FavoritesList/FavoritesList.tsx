import { Link } from 'react-router'
import type { FavoriteType } from '../../types/favorite.types'
import FavoriteCity from '../FavoriteCity/FavoriteCity'
import './FavoritesList.css'

type FavoritesListProps = {
  favorites: FavoriteType[]
}

export default function FavoritesList({ favorites }: FavoritesListProps) {
  if (favorites.length === 0) {
    return (
      <p>
        אין עדיין ערים במועדפים. אפשר להוסיף מעמוד <Link to="/search">החיפוש</Link>
      </p>
    )
  }

  return (
    <ul className="favorites-list">
      {favorites.map((favorite) => (
        <FavoriteCity key={favorite.city_id} favorite={favorite} />
      ))}
    </ul>
  )
}
