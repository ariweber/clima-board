import type { CurrentWeatherType } from '../../types/weather.types'
import { getWeatherDescription } from '../../utils/weather.utils'
import './CurrentWeather.css'

type CurrentProps = {
  weather: CurrentWeatherType
}

export default function CurrentWeather({ weather }: CurrentProps) {
  return (
    <div className="current-weather">
      <p className="current-temp">{Math.round(weather.temperature)}°</p>
      <p>{getWeatherDescription(weather.weather_code)}</p>
      <p>מרגיש כמו {Math.round(weather.feels_like)}°</p>
      <p>רוח {weather.wind_speed} קמ"ש</p>
    </div>
  )
}
