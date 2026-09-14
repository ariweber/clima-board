export type CurrentWeatherType = {
  temperature: number
  wind_speed: number
  weather_code: number
  feels_like: number
}

export type HourlyWeatherType = {
  time: string
  temperature: number
  wind_speed: number
  feels_like: number
  weather_code: number
}

export type DailyWeatherType = {
  date: string
  temp_max: number
  temp_min: number
  weather_code: number
}
