from fastapi import APIRouter, Query
from schemas.favorite_schema import FavoriteIn
from services import favorites_service

router = APIRouter(prefix="/api/favorites")


@router.get("", response_model=list[FavoriteIn])
def get_favorites(user_name: str = Query(min_length=1, max_length=100)):
    return favorites_service.get_favorites(user_name)


@router.post("", response_model=FavoriteIn, status_code=201)
def add_favorite(favorite: FavoriteIn):
    return favorites_service.add_favorite(favorite.model_dump())


@router.delete("/{city_id}", status_code=200)
def remove_favorite(city_id: int, user_name: str = Query(min_length=1, max_length=100)):
    favorites_service.remove_favorite(user_name, city_id)
    return {"message": "Favorite removed"}
