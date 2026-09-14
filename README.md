# Clima Board

A simple weather website. You can search for cities, see the weather, save
favorite cities, and compare two cities.

Weather data comes from Open-Meteo (https://open-meteo.com) .



## Backend

Python + FastAPI. The routes are:

- `/api/cities` - search a city by name
- `/api/weather/current` - the weather now
- `/api/weather/daily` - forecast for the next days
- `/api/weather/hourly` - forecast for the next hours
- `/api/favorites` - get, add or delete a favorite city



## Frontend

React + TypeScript + Vite. The pages are:

- `/` - welcome, type your name
- `/dashboard` - hello + the weather in Jerusalem
- `/search` - search a city
- `/city/:cityName` - full forecast for one city
- `/favorites` - your saved cities
- `/compare` - two cities side by side


## Install
```
cd backend
python -m venv .venv
.venv/Scripts/activate      
pip install -r requirements.txt

cd fronted
npm install
```

## How do you run?

Open two terminals. Start the backend first.

Backend run it from the `backend/app`

```
cd backend/app
uvicorn main:app --reload 
```

Frontend:

```
cd fronted
npm run dev
```

Now open http://localhost:5173

