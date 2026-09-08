from fastapi import APIRouter
from services import cities_service

router = APIRouter(prefix="/api/cities")

@router.get("")
def search_cities(city: str):
    return cities_service.search_cities(city)