import type { City } from '../../types/city.types'
import './CityCompareList.css'

type CityCompareListProps = {
  cities: City[]
  onSelect: (city: City) => void
}

export default function CityCompareList({ cities, onSelect }: CityCompareListProps) {
  if (cities.length === 0) {
    return <p>לא נמצאו תוצאות</p>
  }

  return (
    <ul className="city-compare-results">
      {cities.map((city) => (
        <li key={city.id}>
          <button onClick={() => onSelect(city)}>
            {city.name}-{city.country}
          </button>
        </li>
      ))}
    </ul>
  )
}
