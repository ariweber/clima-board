from pydantic import BaseModel


class CurrentOut(BaseModel):
    temperature: float
    wind_speed: float
    weather_code: int
    feels_like: float


class DayOut(BaseModel):
    date: str
    temp_max: float
    temp_min: float
    weather_code: int


class HourOut(BaseModel):
    time: str
    temperature: float
    wind_speed: float
    feels_like: float
    weather_code: int