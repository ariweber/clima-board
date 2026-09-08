from fastapi import APIRouter

router = APIRouter(prefix="/api/weather")


@router.get("/current")
def current(
    lat: float = Query(ge=-90, le=90),
    lon: float = Query(ge=-180, le=180),
):
    return {"status": "ok"}
