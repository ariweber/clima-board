import { useEffect, useState } from "react";
import type { City } from "../types/city.types";
import type { CurrentWeatherType } from "../types/weather.types";
import { API_URL } from "../utils/api.utils";

const DEFAULT_CITY = "ירושלים";
const STORAGE_KEY = "defaultCity";

type SavedDefaultCity = {
  date: string;
  city: City;
  weather: CurrentWeatherType;
};

export default function useDefaultCity() {
  const [saved, setSaved] = useState<SavedDefaultCity | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fromStorage = localStorage.getItem("defaultCity");
    if (fromStorage) {
      const parsed: SavedDefaultCity = JSON.parse(fromStorage);
      if (parsed.date === new Date().toDateString()) {
        setSaved(parsed);
        return;
      }
    }

    async function fetchDefaultCity() {
      try {
        const citiesResponse = await fetch(
          `${API_URL}/cities?city=${DEFAULT_CITY}`,
        );
        if (!citiesResponse.ok) throw new Error("Request failed");
        const cities: City[] = await citiesResponse.json();
        const city = cities[0];
        if (!city) throw new Error("City not found");

        const weatherResponse = await fetch(
          `${API_URL}/weather/current?lat=${city.latitude}&lon=${city.longitude}`,
        );
        if (!weatherResponse.ok) throw new Error("Request failed");
        const weather: CurrentWeatherType = await weatherResponse.json();

        const result = { date: new Date().toDateString(), city, weather };
        localStorage.setItem(STORAGE_KEY, JSON.stringify(result));
        setSaved(result);
      } catch (err) {
        setError((err as Error).message);
      }
    }

    fetchDefaultCity();
  }, []);

  return { city: saved?.city, weather: saved?.weather, error };
}
