import React from "react";
import NewPedalForm from "../NewPedalForm/NewPedalForm";
import Pedal from "../Pedal/Pedal";
import "../../Pedals.css";
import { Link, useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function AllPedals({ pedals, setPedals, user}) {
  console.log(user);

  return (
    <div className="pedals">
      <h1 className="pedals-head">Pedals</h1>
      <div className="pedal-nav-links">
        <Link className="new-pedal-link" to="./newpedal">
          Make New Pedal
        </Link>
        <Link className="my-pedals-link" to="./mypedals">
          My Pedal Collection
        </Link>
      </div>
      {pedals.map((p) => {
        return (
          <Pedal
            name={p.name}
            image={p.image}
            effectsType={p.effect_type}
            stereo={p.stereo}
            ins={p.number_of_inputs}
            outs={p.number_of_outputs}
            price={p.price}
          />
        );
      })}
    </div>
  );
}

export default AllPedals;
