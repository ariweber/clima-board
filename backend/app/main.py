from fastapi import FastAPI
from routes.cities_router import router as cities_router
app = FastAPI()


@app.get("/health")
def health():
    return {"status": "ok"}

app.include_router(cities_router)