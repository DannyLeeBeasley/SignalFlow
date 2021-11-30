import React from "react";
import { useEffect, useState } from "react";
import "./Pedalboard.css";
import { useHistory } from 'react-router'

function Pedalboard({ name, pedals, stereo, id, addNewPedalboard, pedalboards, setPedalboards, handleDeletePedalboard }) {
  console.log("pedalTester", pedals);

  const history = useHistory()

  // const [pedalboardToViewPedals, pedalboardToViewPedals] = useState(pedalboardToView.)

 

  return (
    <div className="pedalboard-card">
      <div className="pedalboard-pedal-card-header">{name}</div>
      <h2 className="signal-flow-header">Signal Flow:</h2>
      <h2>⇇Output⇇⇇⇇Input⇇</h2>
      <div className="pedalboard">
        <div className="signal-flow-arrow">⇇</div>
        {pedals.map((pedal) => {
          console.log(pedals, "boom")
          return (
            <div className="pedalboard-pedal-card">
              <div className="pedalboard-pedal-card-title">{pedal.name}</div>
              <img
                className="pedalboard-pedal-card-image"
                alt={pedal.name}
                src={pedal.image}
              />
            </div>
          );
        })}
        <div className="signal-flow-arrow">⇇</div>
      </div>
      <button className="update-pedalboard" onClick="">
        Update
      </button>
      <button className="delete-pedalboard" onClick={handleDeletePedalboard}>
        Delete
      </button>
      <br />
      <br />
    </div>
  );
}

export default Pedalboard;
