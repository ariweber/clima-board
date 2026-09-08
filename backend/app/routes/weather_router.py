from fastapi import APIRouter
from services import weather_service

router = APIRouter(prefix="/api/weather")


@router.get("/current")
def current(lat: float, lon: float):
    return weather_service.get_current(lat, lon)


@router.get("/daily")
def daily(lat: float, lon: float, days: int = 5):
    return weather_service.get_daily(lat, lon, days)