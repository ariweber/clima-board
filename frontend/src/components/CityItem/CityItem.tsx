import { Link } from 'react-router'
import type { City } from '../../types/city.types'
import FavoriteToggle from '../FavoriteToggle/FavoriteToggle'
import './CityItem.css'

type CityItemProps = {
  city: City
}

export default function CityItem({ city }: CityItemProps) {
  return (
    <li className="city-item">
      <Link to={`/city/${city.name}?lat=${city.latitude}&lon=${city.longitude}`}>
        {city.name}-{city.country}
      </Link>
      <FavoriteToggle city={city} />
    </li>
  )
}
