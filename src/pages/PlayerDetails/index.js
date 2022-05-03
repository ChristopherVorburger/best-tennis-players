import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./style.css";

import { IconContext } from "react-icons";
import { MdClose } from "react-icons/md";

import PlayerStat from "../../components/PlayerStat";

import usFlag from "../../assets/images/us-flag.png";
import { getName } from "../../utils/helpers/countryList";
import { useFetchData } from "../../utils/hooks/useFetchData";
import { url } from "../../config";

export default function PlayerDetails() {
  const { id } = useParams();
  let navigate = useNavigate();

  // Hook personnalisé useFetchData()
  const { data, status, error, execute } = useFetchData();

  useEffect(() => {
    execute(url);
  }, [execute]);

  // eslint-disable-next-line eqeqeq
  const matchedPlayer = data?.filter((player) => player.id == id);

  // Si aucun joue ne match, retour à l'accueil
  if (matchedPlayer?.length === 0) {
    navigate("/");
  }

  // Si une erreur est levée, on catch avec error boundary
  if (status === "error") {
    throw new Error(error.message);
  }

  return (
    <>
      {/* Si recherche de données : */}
      {status === "fetching" || status === "idle" ? (
        <div className="is-size-4 has-text-centered">
          <p>Chargement des données</p>
        </div>
      ) : (
        /* Sinon, rendu de la page */
        <div data-testid="player" className="main m-auto">
          {/* Section icone de retour à la page d'accueil */}
          <div className="close_icon">
            <IconContext.Provider value={{ color: "white", size: "50px" }}>
              <div data-testid="close-icon">
                <button
                  className="button is-ghost"
                  onClick={() => navigate("/")}
                >
                  <MdClose />
                </button>
              </div>
            </IconContext.Provider>
          </div>
          <div data-testid="player-details" className="player__details m-auto">
            {/* Header: Nom du joueur, drapeau et photo */}
            <div className="header">
              <div className="name tile is-child pl-6">
                <p className="name__firstname">
                  {matchedPlayer?.[0]?.firstname}
                </p>
                <p className="name__lastname">{matchedPlayer?.[0]?.lastname}</p>
              </div>
              <div className="subheader">
                <div className="flag__box">
                  <figure>
                    <img
                      className="flag__image"
                      src={matchedPlayer?.[0]?.country.picture}
                      alt="country flag"
                      onError={({ currentTarget }) => {
                        currentTarget.onerror = null;
                        currentTarget.src = usFlag;
                      }}
                    />
                  </figure>
                  <div className="code">{matchedPlayer?.[0]?.country.code}</div>
                </div>
                <div className="image__details">
                  <figure>
                    <img
                      className="image__position"
                      src={matchedPlayer?.[0]?.picture}
                      alt={`player ${matchedPlayer?.[0]?.lastname}`}
                    />
                  </figure>
                </div>
              </div>
            </div>
            {/* Statistiques du joueur en question, utilisation de display grid */}
            <div className="grid__layout">
              <div className="grid__item grid__rank">
                <PlayerStat
                  subtitle="RANK"
                  data={`#${matchedPlayer?.[0]?.data.rank}`}
                />
              </div>
              <div className="grid__item grid__points">
                <PlayerStat
                  subtitle="POINTS"
                  data={matchedPlayer?.[0]?.data.points}
                />
              </div>
              <div className="grid__item grid__country">
                <PlayerStat
                  subtitle="COUNTRY"
                  data={getName(`${matchedPlayer?.[0]?.country.code}`)}
                />
              </div>
              <div className="grid__item grid__career">
                <PlayerStat
                  subtitle="CAREER TITLES"
                  // .map sur les titres remportés par le joueurs
                  data={matchedPlayer?.[0]?.career.map((year) => {
                    return (
                      <div key={year.year} className="grid__titles">
                        <div className="is-flex">
                          <p className="grid__titles_year">{year.year} -</p>
                          <p className="grid__titles_title">
                            {year.titles.length}
                          </p>
                        </div>
                        <div>
                          {year.titles.map((title) => {
                            return (
                              <p key={title} className="grid__titles_title">
                                {title}
                              </p>
                            );
                          })}
                          <br />
                        </div>
                      </div>
                    );
                  })}
                />
              </div>
              <div className="grid__item grid__birthday">
                <PlayerStat subtitle="BIRTHDAY" data="31 / 08 / 1991" />
              </div>
              <div className="grid__item grid__age">
                <PlayerStat
                  subtitle="AGE"
                  data={matchedPlayer?.[0]?.data.age}
                />
              </div>
              <div className="grid__item grid__weight">
                <PlayerStat
                  subtitle="WEIGHT"
                  // Conversion grammes en kilogrammes
                  data={`${matchedPlayer?.[0]?.data.weight / 1000} kg`}
                />
              </div>
              <div className="grid__item grid__height">
                <PlayerStat
                  subtitle="HEIGHT"
                  data={`${matchedPlayer?.[0]?.data.height} cm`}
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
