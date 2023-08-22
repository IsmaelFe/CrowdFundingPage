import React from "react";
import PropTypes from "prop-types";

const Nav_bar = ({ rezise, open, openM }) => {
  return (
    <nav className="nav-bar">
      <img src="../../public/images/logo.svg"></img>
      <div className="nav-bar-2">
        {rezise > 780 ? (
          <ul>
            <li>About</li>
            <li>Descover</li>
            <li>Get Started</li>
          </ul>
        ) : (
          <button className="menu" onClick={openM}>
            {open ? (
              <img src="../../public/images/icon-close-menu.svg"></img>
            ) : (
              <img src="../../public/images/icon-hamburger.svg"></img>
            )}
          </button>
        )}
      </div>
    </nav>
  );
};

Nav_bar.propTypes = {
  rezise: PropTypes.number,
  open: PropTypes.bool,
  openM: PropTypes.func,
};

export default Nav_bar;
