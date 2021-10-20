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
      <div className="blocSavoirPlus">
        <div className="divFormation">
          <div className="divImageFormation">
            <img
              className="imageFormation"
              src="/images/Ellipse_2.png"
              alt=""
            />
          </div>
          <h3 className="titreFormation">Formation XXX sujet</h3>
          <ul className="contenuFormation">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ul>
        </div>
        <div className="divFormation">
          <div className="divImageFormation">
            <img
              className="imageFormation"
              src="/images/Ellipse_2.png"
              alt=""
            />
          </div>
          <h3 className="titreFormation">Formation XXX sujet</h3>
          <ul className="contenuFormation">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ul>
        </div>
        <div className="divFormation">
          <div className="divImageFormation">
            <img
              className="imageFormation"
              src="/images/Ellipse_2.png"
              alt=""
            />
          </div>
          <h3 className="titreFormation">Formation XXX sujet</h3>
          <ul className="contenuFormation">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ul>
        </div>
        <div className="divFormation">
          <div className="divImageFormation">
            <img
              className="imageFormation"
              src="/images/Ellipse_2.png"
              alt=""
            />
          </div>
          <h3 className="titreFormation">Formation XXX sujet</h3>
          <ul className="contenuFormation">
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
