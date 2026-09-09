from pydantic import BaseModel


class CityOut(BaseModel):
    id: int
    name: str
    country: str
    latitude: float
    longitude: float