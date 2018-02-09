import React from "react";

const rangebar = props => {
  return (
    <div className="jumbotron">
      <h2>{props.name}</h2>
      <p>Total: 0</p>
      <input type="range" max={540} min={36} step={36} />
    </div>
  );
};

export default rangebar;
