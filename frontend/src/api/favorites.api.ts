import type { City } from "../types/city.types";
import type { FavoriteType } from "../types/favorite.types";
import { API_URL } from "../utils/api.utils";

export async function getFavorites(userName: string): Promise<FavoriteType[]> {
  const response = await fetch(`${API_URL}/favorites?user_name=${userName}`);
  if (!response.ok) throw new Error("Request failed");
  return response.json();
}

export async function addFavorite(
  city: City,
  userName: string,
): Promise<FavoriteType> {
  const favorite: FavoriteType = {
    user_name: userName,
    city_id: city.id,
    city_name: city.name,
    country: city.country,
    latitude: city.latitude,
    longitude: city.longitude,
  };

  const response = await fetch(`${API_URL}/favorites`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(favorite),
  });
  if (!response.ok) throw new Error("Request failed");
  return response.json();
}

export async function removeFavorite(
  userName: string,
  cityId: number,
): Promise<void> {
  const response = await fetch(
    `${API_URL}/favorites/${cityId}?user_name=${userName}`,
    { method: "DELETE" },
  );
  if (!response.ok) throw new Error("Request failed");
}
