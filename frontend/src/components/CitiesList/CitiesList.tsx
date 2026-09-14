import type { City } from '../../types/city.types'
import CityItem from '../CityItem/CityItem'
import './CitiesList.css'

type CitiesListProps = {
  cities: City[]
}

export default function CitiesList({ cities }: CitiesListProps) {
  if (cities.length === 0) {
    return <p>לא נמצאו תוצאות</p>
  }

  return (
    <ul className="search-results">
      {cities.map((city) => (
        <CityItem key={city.id} city={city} />
      ))}
    </ul>
  )
}
