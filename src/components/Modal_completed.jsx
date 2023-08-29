import React from "react";
import PropTypes from "prop-types";

export const Modal_completed = ({ close }) => {
  return (
    <div className="container-completed">
      <div className="container-completed-1">
        <div>
          <img src="/public/icon-check.svg" alt="check"></img>
        </div>
        <h3>Thanks for your support!</h3>
        <p>Your pledge brings us one step closer to sharing Mastercraft</p>
        <p>Bamboo Monitor Riser worldwide. You will get an email once</p>
        <p>our campaign is completed.</p>
        <button onClick={close}>Got it!</button>
      </div>
    </div>
  );
};

Modal_completed.propTypes = {
  open: PropTypes.func,
  close: PropTypes.func,
};

export default Modal_completed;
