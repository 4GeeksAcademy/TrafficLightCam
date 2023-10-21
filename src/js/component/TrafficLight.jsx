import React, { useState } from 'react';

function TrafficLight() {
  const [color, setColor] = useState("red");
  const [showPurpleLight, setShowPurpleLight] = useState(false);

  const changeColor = (newColor) => {
    setColor(newColor);
  };

  const cycleColors = () => {
    if (color === "red") {
      changeColor("yellow");
    } else if (color === "yellow") {
      changeColor("green");
    } else if (color === "green") {
      changeColor("red");
    }
  };

  const addPurple = () => {
    setShowPurpleLight(true); 
  };

  return (
    <div className="traffic-light">
      <div
        className={`red light ${color === "red" ? "glow" : ""}`}
        onClick={() => changeColor("red")}
      ></div>
      <div
        className={`yellow light ${color === "yellow" ? "glow" : ""}`}
        onClick={() => changeColor("yellow")}
      ></div>
      <div
        className={`green light ${color === "green" ? "glow" : ""}`}
        onClick={() => changeColor("green")}
      ></div>
      {showPurpleLight && ( 
        <div
          className={`purple light ${color === "purple" ? "glow" : ""}`}
          onClick={() => changeColor("purple")}
        ></div>
      )}
       <div className="button-container">
      <button onClick={cycleColors}>Cycle Colors</button>
      <button onClick={addPurple}>Add Purple</button>
    </div></div>
  );
}

export default TrafficLight;
