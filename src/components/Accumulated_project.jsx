import React from "react";

const Accumulated_project = () => {
  return (
    <div className="container-accumulated">
      <div className="container-accumulated-1">
        <div className="container-number">
          <h3>$89,914</h3>
          <p>of $100,000 backed</p>
        </div>
        <hr></hr>
        <div className="container-number">
          <h3>5,007</h3>
          <p>total backers</p>
        </div>
        <hr></hr>
        <div className="container-number">
          <h3>56</h3>
          <p>days left</p>
        </div>
      </div>
      <input className="range" type="range"></input>
    </div>
  );
};

export default Accumulated_project;
