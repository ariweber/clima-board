import type { DailyWeatherType } from '../../types/weather.types'
import { getWeatherDescription } from '../../utils/weather.utils'
import './DayForecast.css'

type DayProps = {
  day: DailyWeatherType
}

export default function DayForecast({ day }: DayProps) {
  return (
    <li className="day-forecast">
      <span>{day.date}</span>
      <span>{getWeatherDescription(day.weather_code)}</span>
      <span>
        {Math.round(day.temp_min)}°   {Math.round(day.temp_max)}°
      </span>
    </li>
  )
}
