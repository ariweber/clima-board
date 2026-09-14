import { useState } from "react";
import CompareColumn from "../../components/CompareColumn/CompareColumn";
import useFetch from "../../hooks/useFetch";
import type { City } from "../../types/city.types";
import { API_URL } from "../../utils/api.utils";
import "./Compare.css";

export default function Compare() {
  const [firstQuery, setFirstQuery] = useState("");
  const [secondQuery, setSecondQuery] = useState("");

  const [first, setFirst] = useState<City | null>(null);
  const [second, setSecond] = useState<City | null>(null);

  const firstUrl =
    firstQuery.trim().length >= 2
      ? `${API_URL}/cities?city=${firstQuery.trim()}`
      : null;
  const secondUrl =
    secondQuery.trim().length >= 2
      ? `${API_URL}/cities?city=${secondQuery.trim()}`
      : null;

  const firstResults = useFetch<City[]>(firstUrl);
  const secondResults = useFetch<City[]>(secondUrl);

  return (
    <div className="compare">
      <h1>השוואה</h1>

      <div className="compare-columns">
        <CompareColumn
          citiesResult={firstResults}
          city={first}
          onSearch={setFirstQuery}
          onSelect={setFirst}
        />

        <CompareColumn
          citiesResult={secondResults}
          city={second}
          onSearch={setSecondQuery}
          onSelect={setSecond}
        />
      </div>
    </div>
  );
}
