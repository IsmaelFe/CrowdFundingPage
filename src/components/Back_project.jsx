import React from "react";
import PropTypes from "prop-types";

const Back_project = ({ change, changeM, rezise }) => {
  return (
    <div className="container-back">
      <img
        className="logo-mastercraft"
        src="../../public/images/logo-mastercraft.svg"
        alt="logo"
      ></img>
      <div className="container-back-1">
        <h1>Mastercraft Bamboo Monitor Riser</h1>
        <p>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </p>
        <div className="container-back-2">
          <button className="button-back-1" style={{ fontWeight: "700" }}>
            Back this project
          </button>
          <button onClick={change} className="button-back-2">
            <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fill-rule="evenodd">
                <circle
                  fill={changeM ? "#147b74" : "#2F2F2F"}
                  cx="28"
                  cy="28"
                  r="28"
                />
                <path
                  fill={changeM ? "#FFFFFF" : "#B1B1B1"}
                  d="M23 19v18l5-5.058L33 37V19z"
                />
              </g>
            </svg>
            {rezise > 780 ? (
              <p
                style={
                  changeM
                    ? { fontWeight: "700", color: "#147b74" }
                    : { fontWeight: "700" }
                }
              >
                Bookmark
              </p>
            ) : null}
          </button>
        </div>
      </div>
    </div>
  );
};

Back_project.propTypes = {
  change: PropTypes.func,
  changeM: PropTypes.bool,
  rezise: PropTypes.number,
};

export default Back_project;
