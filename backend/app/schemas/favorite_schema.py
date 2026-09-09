from pydantic import BaseModel


class FavoriteIn(BaseModel):
    user_name: str
    city_id: int
    city_name: str
    country: str
    latitude: float
    longitude: float

