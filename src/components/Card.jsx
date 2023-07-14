import React from "react";

const Card = () => {
  let tittle = "Bamboo Stand";
  let span = "Pledge $25 or more";
  let text = "texto";
  let number = 101;
  let textButton = "Select Removed";

  return (
    <div className="container-card-1">
      <div className="container-card-tittle">
        <h4>{tittle}</h4>
        <span className="pledge">{span}</span>
      </div>
      <p>{text}</p>
      <div className="container-card-button">
        <span className="number">
          {number}
          <span className="number-text">{number}</span>
        </span>
        <button className="select">{textButton}</button>
      </div>
    </div>
  );
};

export default Card;
