import { useEffect } from 'react'
import FavoritesList from '../../components/FavoritesList/FavoritesList'
import { useFavoritesStore } from '../../store/favorites.store'
import './Favorites.css'

export default function Favorites() {
  const favorites = useFavoritesStore((state) => state.favorites)
  const error = useFavoritesStore((state) => state.error)
  const getFavorites = useFavoritesStore((state) => state.get)

  useEffect(() => {
    getFavorites()
  }, [getFavorites])

  return (
    <div className="favorites">
      <h1>מועדפים</h1>

      {error && <p className="error-message">{error}</p>}
      {!error && <FavoritesList favorites={favorites} />}
    </div>
  )
}
