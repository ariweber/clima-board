import { Link } from 'react-router'
import CurrentWeather from '../CurrentWeather/CurrentWeather'
import Loading from '../Loading/Loading'
import useDefaultCity from '../../hooks/useDefaultCity'
import './DefaultCity.css'

export default function DefaultCity() {
  const { city, weather, error } = useDefaultCity()

  if (error) {
    return <p className="error-message">{error}</p>
  }

  if (!city || !weather) {
    return <Loading text="טוען עיר..." />
  }

  return (
    <div className="default-city">
      <h2>{city.name}</h2>

      <CurrentWeather weather={weather} />

      <Link to={`/city/${city.name}?lat=${city.latitude}&lon=${city.longitude}`}>
        לתחזית המלאה
      </Link>
    </div>
  )
}
