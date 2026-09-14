import DayForecast from '../DayForecast/DayForecast'
import type { DailyWeatherType } from '../../types/weather.types'
import './DailyForecast.css'

type DailyProps = {
  days: DailyWeatherType[]
}

export default function DailyForecast({ days }: DailyProps) {
  return (
    <ul className="daily-forecast">
      {days.map((day) => (
        <DayForecast key={day.date} day={day} />
      ))}
    </ul>
  )
}
