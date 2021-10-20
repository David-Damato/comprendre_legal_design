import React from "react";
import "./accueilContenu.css";
/* import ellipse1 from "/images/Ellipse_1.png"; */
/* import ellipse2 from "images/Ellipse_2.png";
import ellipse3 from "images/Ellipse_3.png";
import ellipse4 from "images/Ellipse_4.png"; */

export default function Accueil() {
  return (
    <div data-name="Accueil" className="Frame">
      <div className="Ellipse-1-outer">
        <img
          id="Ellipse-1"
          data-name="Ellipse 1"
          alt="Ellipse 1"
          className="Ellipse-1"
          src="/images/Ellipse_1.png"
        />
        <div className="blocTitre">
          <h1 className="titrePage">Apprendre le legal design</h1>
          <h2 className="explicationPage">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </h2>
        </div>
      </div>
      <div className="blocAccueil">
        <div className="grandVideo"></div>

        <div className="blocMail">
          <div className="titreMail">
            Envie de faire partie des XXX abonnés à ce cours ?
          </div>
          <div className="blocInputMail">
            <input className="inputMail" type="email" />
            <button className="buttonCours">Recevoir le cours</button>
          </div>
        </div>

        <div className="blocSuivreCours">
          <div className="titreSuivreCours">Pourquoi suivre ce cours ?</div>
          <div className="divWrap">
            <div className="ficheSuivreCours">
              <img className="imageCours" src="/images/Ellipse_2.png" alt="" />
              <div className="textCours">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </div>
            </div>
            <div className="ficheSuivreCours">
              <img className="imageCours" src="/images/Ellipse_2.png" alt="" />
              <div className="textCours">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </div>
            </div>
            <div className="ficheSuivreCours">
              <img className="imageCours" src="/images/Ellipse_2.png" alt="" />
              <div className="textCours">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </div>
            </div>
          </div>
        </div>

        {/*         <div className="Rectangle-66-outer">
          <div
            id="Rectangle-66"
            data-name="Rectangle 66"
            alt="Rectangle 66"
            className="Rectangle-66"
          ></div>
        </div>
        <div className="Comment--a-fonctionn-outer">
          <div
            id="Comment--a-fonctionn"
            data-name="Comment ça fonctionne ?"
            className="Comment--a-fonctionn"
          >
            <div key="0">Comment ça fonctionne ?</div>
          </div>
        </div>
        <div className="Lorem-ipsum-dolor-si-1-outer">
          <div
            id="Lorem-ipsum-dolor-si-1"
            data-name="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
            className="Lorem-ipsum-dolor-si-1"
          >
            <div key="0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor
              sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt
            </div>
          </div>
        </div>
        <div className="Bonus---Faites-parti-outer">
          <div
            id="Bonus---Faites-parti"
            data-name="Bonus : Faites partie de la communauté XX"
            className="Bonus---Faites-parti"
          >
            <div key="0">Bonus : Faites partie de la communauté XX</div>
          </div>
        </div>
        <div className="Lorem-ipsum-dolor-si-outer">
          <div
            id="Lorem-ipsum-dolor-si"
            data-name="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur"
            className="Lorem-ipsum-dolor-si"
          >
            <div key="0">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididuntLorem ipsum dolor sit amet, consectetur
              adipiscing elit, sed do eiusmod tempor incididuntLorem ipsum dolor
              sit amet, consectetur{" "}
            </div>
          </div>
        </div>
        <div className="Group-9-outer">
          <div id="Group-9" data-name="Group 9" className="Group-9">
            <div className="Rectangle-61-outer">
              <div
                id="Rectangle-61"
                data-name="Rectangle 61"
                alt="Rectangle 61"
                className="Rectangle-61"
              ></div>
            </div>
            <div className="Rejoindre-le-groupe-outer">
              <div
                id="Rejoindre-le-groupe"
                data-name="Rejoindre le groupe"
                className="Rejoindre-le-groupe"
              >
                <div key="0">Rejoindre le groupe</div>
              </div>
            </div>
          </div>
        </div>
        <div className="Rectangle-64-outer">
          <div
            id="Rectangle-64"
            data-name="Rectangle 64"
            alt="Rectangle 64"
            className="Rectangle-64"
          ></div>
        </div> */}
      </div>
    </div>
  );
}
