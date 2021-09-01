import React from "react";
import "./cours.css";

export default function Cours() {
  return (
    <div id="Frame" data-name="Cours" className="Frame">
      <div className="Ellipse-1-outer">
        <img
          id="Ellipse-1"
          data-name="Ellipse 1"
          alt="Ellipse 1"
          className="Ellipse-1"
          src="/images/Ellipse_1.png"
        />
        <div className="blocTitre">
          <h1 className="titrePage">Liste de nos cours</h1>
          <h2 className="explicationPage">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
        </div>
      </div>
      <div className="blocVideo">
        <div className="video"></div>
        <div className="video"></div>
        <div className="video"></div>
        <div className="video"></div>
        <div className="video"></div>
        <div className="video"></div>
      </div>
    </div>
  );
}
