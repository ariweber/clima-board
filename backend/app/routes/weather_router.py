from fastapi import APIRouter, Query
from services import weather_service

router = APIRouter(prefix="/api/weather")


@router.get("/current")
def current(
    lat: float = Query(ge=-90, le=90),
    lon: float = Query(ge=-180, le=180),
):
    return weather_service.get_current(lat, lon)


@router.get("/daily")
def daily(
    lat: float = Query(ge=-90, le=90),
    lon: float = Query(ge=-180, le=180),
    days: int = 5,
):
    return weather_service.get_daily(lat, lon, days)