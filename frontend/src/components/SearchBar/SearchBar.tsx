import { useState } from "react";
import "./SearchBar.css";

type SearchBarProps = {
  onSearch: (value: string) => void;
};

export default function SearchBar(props: SearchBarProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSearch(value);
  };

  return (
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        className="search-input"
        type="text"
        placeholder="חפש עיר..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button className="search-button" type="submit">
        חפש
      </button>
    </form>
  );
}
