import CurrentWeather from '../CurrentWeather/CurrentWeather'
import Loading from '../Loading/Loading'
import useCurrentWeather from '../../hooks/useCurrentWeather'
import type { City } from '../../types/city.types'
import './CompareCity.css'

type CompareCityProps = {
  city: City
}

export default function CompareCity({ city }: CompareCityProps) {
  const { data, loading, error } = useCurrentWeather(city)

  return (
    <div className="compare-city">
      <h2>{city.name}</h2>

      {loading && <Loading text="טוען מזג אוויר..." />}
      {error && <p className="error-message">{error}</p>}
      {data && <CurrentWeather weather={data} />}
    </div>
  )
}
