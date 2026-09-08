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

def get_daily(lat: float, lon: float, day_count: int) -> list:
    response = requests.get(CURRENT_URL, params={
       "latitude": lat,
       "longitude": lon,
       "daily": "temperature_2m_max,temperature_2m_min,weather_code",
       "forecast_days": day_count,
       "timezone": "auto" 
    })
    data = response.json()
    return get_days_list(data["daily"])

def get_days_list(daily: object) -> list[dict]:
    days_list = []
    for i in range(len(daily["time"])):
        days_list.append({
            "date": daily["time"][i],
            "tamp_max": daily["temperature_2m_max"][i],
            "tamp_min": daily["temperature_2m_min"][i],
            "weather_code": daily["weather_code"][i],           
        })
    return days_list    

print(get_daily(31.77, 35.22, 3))
    # https://api.open-meteo.com/v1/forecast?latitude=31.77&longitude=35.22&daily=temperature_2m_max,temperature_2m_min,weather_code&forecast_days=3&timezone=auto




        

