import * as React from "react";

// Reducer de la fonction useFetchData()
const reducer = (state, action) => {
  switch (action.type) {
    case "fetching":
      return { status: "fetching", data: null, error: null };
    case "done":
      return { status: "done", data: action.payload, error: null };
    case "fail":
      return { status: "error", data: null, error: action.error };
    default:
      throw new Error("Action non supporté");
  }
};

const initialState = {
  data: null,
  error: null,
  status: "idle",
};

// Hook personnalisé pour récuperer les données ds l'API
function useFetchData() {
  const [state, dispatch] = React.useReducer(reducer, initialState);
  const { data, error, status } = state;

  const execute = React.useCallback((url) => {
    dispatch({ type: "fetching" });
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        data.players.map((player, index) => {
          return {
            ...player,
            // Ajout de données manquantes
            career: [
              {
                year: 2021,
                titles: [
                  "ATP Masters 1000 Paris (indoor/Hard)",
                  "Wimbledon (Outdoor/Grass)",
                  "Roland Garros (Outdoor/Clay)",
                  "Belgrade 2 (Outdoor/Clay)",
                  "Austalian Open (Outdoor/Hard)",
                ],
              },
              {
                year: 2020,
                titles: [
                  "ATP Masters 1000 Rome (Outdoor/Clay)",
                  "ATP Masters 1000 Cincinnati (Outdoor/Hard)",
                  "Dubai (Outdoor/Hard)",
                  "Australian Open (Outdoor/Hard)",
                ],
              },
              {
                year: 2019,
                titles: [
                  "ATP Masters 1000 Paris (Indoor/Hard)",
                  "Tokyo (Outdoor/Hard)",
                ],
              },
            ],
          };
        })
      )
      .then((data) => dispatch({ type: "done", payload: data }))
      .catch((error) => dispatch({ type: "fail", error }));
  }, []);

  return { data, error, status, execute };
}

export { useFetchData };
