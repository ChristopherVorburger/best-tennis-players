import React from "react";
import "./style.css";

import tennisBall from "../../assets/images/tennis-ball.png";

export default function Home() {
  return (
    <div className="home">
      <div>List</div>
      <div className="home__image" data-testid="tennis-ball-img">
        <img src={tennisBall} alt="tennis ball" />
      </div>
    </div>
  );
}
