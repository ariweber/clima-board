from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.cities_router import router as cities_router
from routes.weather_router import router as weather_router

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*", "http://localhost:8000"],
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def health():
    return {"status": "ok"}


app.include_router(cities_router)
app.include_router(weather_router)
