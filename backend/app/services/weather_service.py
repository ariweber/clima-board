from services.fetch_services import fetch

WEATHER_URL = "https://api.open-meteo.com/v1/forecast"


def get_current(lat: float, lon: float) -> dict:
    data = fetch(
        WEATHER_URL,
        {
            "latitude": lat,
            "longitude": lon,
            "current": "temperature_2m,wind_speed_10m,weather_code,apparent_temperature",
            "timezone": "auto",
        },
    )
    current = data["current"]
    return {
        "temperature": current["temperature_2m"],
        "wind_speed": current["wind_speed_10m"],
        "weather_code": current["weather_code"],
        "feels_like": current["apparent_temperature"],
    }


def get_daily(lat: float, lon: float, day_count: int) -> list:
    data = fetch(
        WEATHER_URL,
        {
            "latitude": lat,
            "longitude": lon,
            "daily": "temperature_2m_max,temperature_2m_min,weather_code",
            "forecast_days": day_count,
            "timezone": "auto",
        },
    )

    return get_days_list(data["daily"])


def get_days_list(daily: object) -> list[dict]:
    days_list = []
    for i in range(len(daily["time"])):
        days_list.append(
            {
                "date": daily["time"][i],
                "temp_max": daily["temperature_2m_max"][i],
                "temp_min": daily["temperature_2m_min"][i],
                "weather_code": daily["weather_code"][i],
            }
        )
    return days_list


def get_hourly(lat: float, lon: float, hour_count: int) -> list:
    data = fetch(
        WEATHER_URL,
        {
            "latitude": lat,
            "longitude": lon,
            "hourly": "temperature_2m,weather_code,wind_speed_10m,apparent_temperature",
            "forecast_hours": hour_count,
            "timezone": "auto",
        },
    )

    return get_hours_list(data["hourly"])


def get_hours_list(hourly: object) -> list[dict]:
    hours_list = []
    for i in range(len(hourly["time"])):
        hours_list.append(
            {
                "time": hourly["time"][i],
                "temperature": hourly["temperature_2m"][i],
                "wind_speed": hourly["wind_speed_10m"][i],
                "feels_like": hourly["apparent_temperature"][i],
                "weather_code": hourly["weather_code"][i],
            }
        )
    return hours_list
