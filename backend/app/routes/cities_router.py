from fastapi import APIRouter
from services import open_meteo

router = APIRouter(prefix="/api/cities")

@router.get("")
def search_cities(city: str):
    return open_meteo.search_cities(city)