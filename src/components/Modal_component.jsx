import React from "react";

const Modal_component = () => {
  return (
    <div className="container-modal">
      <div className="container-modal-1">
        <h2>Back this project</h2>
        <p>
          Want to support us in bringing Mastercraft Bamboo Monitor Rise out in
          the world?
        </p>
        <form className="form-modal">
          <div className="selected selected-pledge">
            <input type="radio" id="pledge"></input>
            <label htmlFor="pledge">Pledge whith no reward</label>
            <p>
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </p>
          </div>
          <div className="selected selected-1">
            <input type="radio" id="bamboo"></input>
            <label htmlFor="bamboo">Bamboo stand</label>
            <span>Pledge $25 or more</span>
            <div className="selected-number">
              101
              <span>left</span>
            </div>
            <p>
              You get an ergonomic stand made of natural bamboo. You&apos;ve
              helped us launch our promotional campaign, and you’ll be added to
              a special Backer member list.
            </p>
          </div>
          <div className="selected selected-1">
            <input type="radio" id="blackE"></input>
            <label htmlFor="blackE">Black Edition Stand</label>
            <span>Pledge $75 or more</span>
            <div className="selected-number">
              64
              <span>left</span>
            </div>
            <p>
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </p>
          </div>
          <div className="selected selected-1">
            <input type="radio" id="mahogany"></input>
            <label htmlFor="mahogany">Mahogany Special Edition</label>
            <span>Pledge $200 or more</span>
            <div className="selected-number">
              0<span>left</span>
            </div>
            <p>
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal_component;
