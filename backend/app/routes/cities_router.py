from fastapi import APIRouter, Query
from schemas.city_schema import CityOut
from services import cities_service

router = APIRouter(prefix="/api/cities")


@router.get("", response_model=list[CityOut])
def search_cities(city: str = Query(min_length=2, max_length=100)):
    return cities_service.search_cities(city)