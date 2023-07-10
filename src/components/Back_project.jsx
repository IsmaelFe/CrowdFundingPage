import React from "react";

const Back_project = () => {
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
          <button className="button-back-1"> Back this project</button>
          <div className="button-back-2">
            <img src="../../public/images/icon-bookmark.svg"></img>
            <p>Bookmark</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Back_project;
