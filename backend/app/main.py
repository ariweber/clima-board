from fastapi import FastAPI
from routes.cities_router import router as cities_router
from routes.weather_router import router as weather_router
app = FastAPI()


@app.get("/health")
def health():
    return {"status": "ok"}

app.include_router(cities_router)
app.include_router(weather_router)