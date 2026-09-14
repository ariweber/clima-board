import useFetch from './useFetch'
import type { CurrentWeatherType } from '../types/weather.types'
import type { City } from '../types/city.types'
import { API_URL } from '../utils/api.utils'

export default function useCurrentWeather(city: City) {
  return useFetch<CurrentWeatherType>(
    `${API_URL}/weather/current?lat=${city.latitude}&lon=${city.longitude}`
  )
}
