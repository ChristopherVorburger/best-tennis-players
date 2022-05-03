import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import PlayerStat from "../../PlayerStat";

import { getName } from "../../../utils/helpers/countryList";

export default function Card({ player }) {
  const { id, firstname, lastname, picture, data, country } = player;

  return (
    <Link
      className=""
      to={`/player/${id}`}
      name={`link-to-${lastname}`}
      data-testid={`link-to-${lastname}`}
    >
      <article data-testid="player" className="card media">
        <div className="media-left">
          <figure className="image">
            <img src={picture} alt="player" />
          </figure>
        </div>
        <div className="media-content">
          <div className="content">
            <p data-testid="player-name" className="list__name is-size-4 mt-6">
              {firstname} {lastname}
            </p>
          </div>
          <div className="stats__home is-flex is-justify-content-space-between pt-3 mr-6">
            <PlayerStat subtitle="RANK" data={`#${data.rank}`} />
            <PlayerStat subtitle="POINTS" data={data.points} />
            {/* Utilisation du package country-list pour convertir le code pays en nom */}
            <PlayerStat subtitle="COUNTRY" data={getName(`${country.code}`)} />
          </div>
        </div>
      </article>
    </Link>
  );
}
