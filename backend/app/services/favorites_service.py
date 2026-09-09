from fastapi import HTTPException
from storage.favorites_storage import load_favorites, save_favorites


def get_favorites(user_name: str) -> list[dict]:
    favorites = load_favorites()
    return [favorite for favorite in favorites if favorite["user_name"] == user_name]


def find_favorite(user_name: str, city_id: int) -> dict | None:
    favorites = load_favorites()
    for favorite in favorites:
        if favorite["user_name"] == user_name and favorite["city_id"] == city_id:
            return favorite
    return None


def add_favorite(favorite: dict) -> dict:
    if find_favorite(favorite["user_name"], favorite["city_id"]):
        raise HTTPException(409, "City is already in favorites")
    favorites = load_favorites()
    favorites.append(favorite)
    save_favorites(favorites)
    return favorite


def remove_favorite(user_name: str, city_id: int) -> None:
    if not find_favorite(user_name, city_id):
        raise HTTPException(404, "Favorite not found")
    favorites = load_favorites()
    favorites = [
        favorite
        for favorite in favorites
        if not (favorite["user_name"] == user_name and favorite["city_id"] == city_id)
    ]
    save_favorites(favorites)
