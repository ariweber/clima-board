import requests  

CURRENT_URL = "https://api.open-meteo.com/v1/forecast"

def get_current(lat: float, lon: float) -> dict:
    response = requests.get(CURRENT_URL, params={
       "latitude": lat,
       "longitude": lon,
       "current": "temperature_2m,wind_speed_10m,weather_code,apparent_temperature",
       "timezone": "auto",
       })
    data = response.json()
    current = data["current"]


    return {
        "temperature": current["temperature_2m"],
        "wind_speed": current["wind_speed_10m"],
        "weather_code": current["weather_code"],
        "feels_like": current["apparent_temperature"],
    }


print(get_current(52.52,13.41))