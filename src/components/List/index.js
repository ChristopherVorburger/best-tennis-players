import React, { useState } from "react";
import ListFilter from "./ListFilter";
import "./style.css";

export default function List() {
  // State de la requête dans l'input de recherche
  const [query, setQuery] = useState("");

  return (
    <div data-testid="list-players" className="list">
      <input
        data-testid="list-input"
        aria-label="input-search-player"
        className="list__input input mb-6 is-size-5"
        type="text"
        placeholder="Rechercher un joueur"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ListFilter query={query} />
    </div>
  );
}
