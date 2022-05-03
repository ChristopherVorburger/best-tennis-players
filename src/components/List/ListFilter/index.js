import React, { useEffect } from "react";

import ListCard from "../ListCard";

import { useFetchData } from "../../../utils/hooks/useFetchData";
import { url } from "../../../config";

export default function ListFilter({ query }) {
  // Hook personnalisé useFetchData()
  const { data, status, execute } = useFetchData();

  useEffect(() => {
    execute(url);
  }, [execute]);

  // Filtre des joueurs en fonction de la valeur de l'input de recherche
  const filteredPlayers = data?.filter(
    ({ lastname, firstname }) =>
      lastname?.toLowerCase()?.includes(query) ||
      firstname?.toLowerCase()?.includes(query) ||
      lastname?.includes(query) ||
      firstname?.includes(query)
  );

  return (
    <>
      {/* Si recherche de données : */}
      {status === "fetching" && (
        <div className="is-size-4 has-text-centered">
          <p>Chargement des données</p>
        </div>
      )}
      {/* Si aucun résultat :*/}
      {filteredPlayers?.length === 0 ? (
        <div className="is-size-4 has-text-centered">
          Aucun joueur trouvé
          <br />
          Veuillez essayer un autre nom
        </div>
      ) : (
        /* Sinon affichage des joueurs triés par rang */
        filteredPlayers
          ?.sort(function (a, b) {
            return a.data.rank - b.data.rank;
          })
          .map((player) => {
            return <ListCard key={player.id} player={player} />;
          })
      )}
    </>
  );
}
