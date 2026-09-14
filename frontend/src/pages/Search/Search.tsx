import { useState } from "react";
import SearchBar from "../../components/SearchBar/SearchBar";
import CitiesList from "../../components/CitiesList/CitiesList";
import Loading from "../../components/Loading/Loading";
import useFetch from "../../hooks/useFetch";
import type { City } from "../../types/city.types";
import { API_URL } from "../../utils/api.utils";
import "./Search.css";

export default function Search() {
  const [city, setCity] = useState("");

  const url = city.trim().length >= 2 ? `${API_URL}/cities?city=${city.trim()}` : null;

  const { data, loading, error } = useFetch<City[]>(url);

  return (
    <div className="search">
      <h1>חיפוש</h1>

      <SearchBar onSearch={setCity} />

      {loading && <Loading text="מחפש ערים..." />}
      {error && <p className="error-message">{error}</p>}
      {data && <CitiesList cities={data} />}
    </div>
  );
}
