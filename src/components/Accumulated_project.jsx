import React from "react";
import PropTypes from "prop-types";

const Accumulated_project = ({ accumulate }) => {
  let style = {
    width: "80%",
  };

  return (
    <div className="container-accumulated">
      <div className="container-accumulated-1">
        <div className="container-number">
          <h3>{`$${accumulate.accumulated.toLocaleString()}`}</h3>
          <p>of 100,000 backed</p>
        </div>
        <hr></hr>
        <div className="container-number">
          <h3>{accumulate.backers.toLocaleString()}</h3>
          <p>total backers</p>
        </div>
        <hr></hr>
        <div className="container-number">
          <h3>{accumulate.days.toLocaleString()}</h3>
          <p>days left</p>
        </div>
      </div>
      <div className="range">
        <div className="range-1" style={style}></div>
      </div>
    </div>
  );
};

Accumulated_project.propTypes = {
  accumulate: PropTypes.object,
};

export default Accumulated_project;
