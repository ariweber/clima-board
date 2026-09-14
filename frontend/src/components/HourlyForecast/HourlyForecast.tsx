import HourForecast from '../HourForecast/HourForecast'
import type { HourlyWeatherType } from '../../types/weather.types'
import './HourlyForecast.css'

type HourlyProps = {
  hours: HourlyWeatherType[]
}

export default function HourlyForecast({ hours }: HourlyProps) {
  return (
    <ul className="hourly-forecast">
      {hours.map((hour) => (
        <HourForecast key={hour.time} hour={hour} />
      ))}
    </ul>
  )
}
