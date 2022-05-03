import React from "react";
import "./style.css";

import List from "../../components/List";

import tennisBall from "../../assets/images/tennis-ball.png";

export default function Home() {
  return (
    <div className="home">
      <List className="home__list" />
      <div className="home__image" data-testid="tennis-ball-img">
        <img src={tennisBall} alt="tennis ball" />
      </div>
    </div>
  );
}
