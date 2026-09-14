import { useParams, useSearchParams } from 'react-router'
import CurrentWeather from '../../components/CurrentWeather/CurrentWeather'
import DailyForecast from '../../components/DailyForecast/DailyForecast'
import HourlyForecast from '../../components/HourlyForecast/HourlyForecast'
import Loading from '../../components/Loading/Loading'
import useFetch from '../../hooks/useFetch'
import type {
  CurrentWeatherType,
  DailyWeatherType,
  HourlyWeatherType,
} from '../../types/weather.types'
import { API_URL } from '../../utils/api.utils'
import './CityDetails.css'

export default function CityDetails() {
  const { cityName } = useParams()
  const [searchParams] = useSearchParams()
  const lat = searchParams.get('lat')
  const lon = searchParams.get('lon')

  const hasCoords = lat !== null && lon !== null

  const current = useFetch<CurrentWeatherType>(
    hasCoords ? `${API_URL}/weather/current?lat=${lat}&lon=${lon}` : null
  )
  const daily = useFetch<DailyWeatherType[]>(
    hasCoords ? `${API_URL}/weather/daily?lat=${lat}&lon=${lon}&days=5` : null
  )
  const hourly = useFetch<HourlyWeatherType[]>(
    hasCoords ? `${API_URL}/weather/hourly?lat=${lat}&lon=${lon}&hours=4` : null
  )

  if (!hasCoords) {
    return (
      <div className="city-details">
        <h1>{cityName}</h1>
        <p> חזור לעמוד החיפוש ובחר עיר מהרשימה</p>
      </div>
    )
  }

  return (
    <div className="city-details">
      <h1>{cityName}</h1>

      {current.loading && <Loading text="טוען מזג אוויר..." />}
      {current.error && <p className="error-message">{current.error}</p>}
      {current.data && <CurrentWeather weather={current.data} />}

      <h2>4 השעות הקרובות</h2>
      {hourly.loading && <Loading text="טוען תחזית שעתית..." />}
      {hourly.error && <p className="error-message">{hourly.error}</p>}
      {hourly.data && <HourlyForecast hours={hourly.data} />}

      <h2>תחזית ל-5 ימים</h2>
      {daily.loading && <Loading text="טוען תחזית..." />}
      {daily.error && <p className="error-message">{daily.error}</p>}
      {daily.data && <DailyForecast days={daily.data} />}
    </div>
  )
}
