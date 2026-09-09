import requests
from fastapi import HTTPException




def fetch(url: str, params: dict) -> dict:
    try:
        response = requests.get(url=url, params=params, timeout=10)
    except requests.RequestException:
        raise HTTPException(502, "Weather service faild")

    data = response.json()
    if data.get("error"):
        raise HTTPException(502, "Weather service error")
    return data