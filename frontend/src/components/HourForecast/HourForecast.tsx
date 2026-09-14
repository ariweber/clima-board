import type { HourlyWeatherType } from '../../types/weather.types'
import { getWeatherDescription } from '../../utils/weather.utils'
import './HourForecast.css'

type HourProps = {
  hour: HourlyWeatherType
}

export default function HourForecast({ hour }: HourProps) {
  return (
    <li className="hour-forecast">
      <span className="hour-forecast-time">{hour.time.slice(11, 16)}</span>
      <span>{getWeatherDescription(hour.weather_code)}</span>
      <span className="hour-forecast-temp">{Math.round(hour.temperature)}°</span>
    </li>
  )
}
