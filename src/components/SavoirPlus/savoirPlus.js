import React from "react";
import "./savoirPlus.css";

export default function SavoirPlus() {
  return (
    <div id="Frame" data-name="Savoir plus" className="Frame">
      <div className="Ellipse-1-outer">
        <img
          id="Ellipse-1"
          data-name="Ellipse 1"
          alt="Ellipse 1"
          className="Ellipse-1"
          src="/images/Ellipse_1.png"
        />
        <div className="blocTitre2">
          <h1 className="titrePage">Envie d'en savoir plus ?</h1>
          <h2 className="explicationPage">
            Découvrez nos formations d’une heure en Legal design ... Bénéficiez
            d’une heure de coaching en plus après la formation
          </h2>

          <div className="contactezNous">Contactez-nous !</div>
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
