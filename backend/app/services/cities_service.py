from services.fetch_services import fetch

CITY_URL= "https://geocoding-api.open-meteo.com/v1/search"


def search_cities(city: str) -> list[dict]:
    data = fetch(CITY_URL, {"name": city, "count": 10, "language": "en"})
    return clean_cities(data.get("results", []))
  


def clean_cities(cities: list[dict]) -> list[dict]:
    cities_list = []
    for city in cities:
        cities_list.append({
            "id": city["id"],
            "name": city["name"],
            "country": city.get("country", ""),
            "latitude": city["latitude"],
            "longitude": city["longitude"],
        })
    return cities_list


