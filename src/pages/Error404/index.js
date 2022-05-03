import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

import outImage from "../../assets/images/tennis-out.jpg";

export default function Error404() {
  const navigate = useNavigate();

  return (
    <div className="has-text-centered">
      <p className="is-size-1 has-text-white mb-6">OUT !</p>
      <div className="mb-6">
        <figure
          className="image__out m-auto
"
        >
          <img src={outImage} alt="tennis ball out" />
        </figure>
      </div>
      <p className="is-size-4 has-text-white mb-6">
        Désolé, cette page n'existe pas.
      </p>
      <div>
        <button
          className="button has-text-danger"
          onClick={() => navigate("/")}
        >
          Retour à la page d'accueil
        </button>
      </div>
    </div>
  );
}
