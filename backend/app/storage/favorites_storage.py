import json

FILE = "db/favorites.json"


def load_favorites() -> list[dict]:
    try:
        with open(FILE, encoding="utf-8") as f:
            return json.load(f)
    except (FileNotFoundError, json.JSONDecodeError):
        return []


def save_favorites(favorites: list[dict]) -> None:
    with open(FILE, "w", encoding="utf-8") as f:
        json.dump(favorites, f, ensure_ascii=False, indent=2)

        