import React from "react";
import "./style.css";

export default function PlayerStat({ subtitle, data }) {
  return (
    <div className="m-2">
      <div className="card__data_subtitle ">{subtitle}</div>
      <div className="card__data_value">{data}</div>
    </div>
  );
}
