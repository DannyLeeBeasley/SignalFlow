import React, { Component } from "react";
import Pedalboard from "./Pedalboard.js";
import "./Pedalboard.css";
import { Link } from "react-router-dom";

function Pedalboards({ pedalboards, addNewPedalboard, user, handleDeletePedalboard }) {
  console.log("test", pedalboards);
  return (
    <div>
      <h1 className="pedalboard-head">My Pedalboards</h1>
      <div className="pedalboard-body">
        <Link className="new-pedalboard-link" to="./newpedalboard">
          Make New Pedalboard
        </Link>
        <br />
        <br />
      </div>
      {pedalboards.map((pedalboard) => {
        return (
          <Pedalboard
          className="pedalboard"
          key={pedalboard.id}
          user={user}
          pedalboard={pedalboard}
          name={pedalboard.name}
          image={pedalboard.image}
          description={pedalboard.description}
          handleDeletePedalboard={handleDeletePedalboard}
          />
        );
      })}
    </div>
  );
}

export default Pedalboards;
