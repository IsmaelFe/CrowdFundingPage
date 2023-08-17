import React from "react";
import PropTypes from "prop-types";

const Nav_bar = ({ rezise }) => {
  return (
    <nav className="nav-bar">
      <img src="../../public/images/logo.svg"></img>
      <div className="nav-bar-2">
        {rezise > 700 ? (
          <ul>
            <li>About</li>
            <li>Descover</li>
            <li>Get Started</li>
          </ul>
        ) : (
          <ul>
            <img src="../../public/images/icon-hamburger.svg"></img>
          </ul>
        )}
      </div>
    </nav>
  );
};

Nav_bar.propTypes = {
  rezise: PropTypes.number,
};

export default Nav_bar;
