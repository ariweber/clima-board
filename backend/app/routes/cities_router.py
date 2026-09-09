from fastapi import APIRouter, Query
from services import cities_service

router = APIRouter(prefix="/api/cities")

@router.get("")
def search_cities(city: str = Query(min_length=2, max_length=100)):
    return cities_service.search_cities(city)