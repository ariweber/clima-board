from typing import Annotated
from fastapi import APIRouter, Query
from schemas import weather_schema
from services import weather_service


router = APIRouter(prefix="/api/weather")

Lat = Annotated[float, Query(ge=-90, le=90)]
Lon = Annotated[float, Query(ge=-180, le=180)]


@router.get("/current", response_model=weather_schema.CurrentOut)
def current(lat: Lat, lon: Lon):
    return weather_service.get_current(lat, lon)


@router.get("/daily", response_model=list[weather_schema.DayOut])
def daily(lat: Lat, lon: Lon, days: int = 5):
    return weather_service.get_daily(lat, lon, days)


@router.get("/hourly", response_model=list[weather_schema.HourOut])
def hourly(lat: Lat, lon: Lon, hours: int = 24):
    return weather_service.get_hourly(lat, lon, hours)
