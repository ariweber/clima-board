import requests

URL= "https://geocoding-api.open-meteo.com/v1/search"

def search_cities(city: str) -> list[dict]:
    response = requests.get(URL, params={"name": city, "count": 10, "language": "en"})
    data = response.json()
    return clean_cities(data.get("results", []))
  


def clean_cities(cities: list[dict]) -> list[dict]:
    cities = []
    for city in cities:
        cities.append({
            "id": city["id"],
            "name": city["name"],
            "country": city.get("country", ""),
            "latitude": city["latitude "],
            "longitude": city["longitude"],
        })
    return cities


