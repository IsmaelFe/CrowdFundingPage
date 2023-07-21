import React from "react";
import PropTypes from "prop-types";

const Card = ({ content }) => {
  return (
    <div
      className={
        content.button === "Out of Stock"
          ? "container-card-out"
          : "container-card-1"
      }
    >
      <div className="container-card-tittle">
        <h4>{content.title}</h4>
        <span className="pledge">{content.pledge}</span>
      </div>
      <p>{content.text}</p>
      <div className="container-card-button">
        <span className="number">
          {content.number}
          <span className="number-text">{content.left}</span>
        </span>
        <button
          className={
            content.button === "Out of Stock" ? "select-out" : "select"
          }
        >
          {content.button}
        </button>
      </div>
    </div>
  );
};

Card.protoType = {
  content: PropTypes.object,
};

export default Card;
