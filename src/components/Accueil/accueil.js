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
          <div className="Envie-de-faire-parti">
            <div>Envie de faire partie des XXX abonnés à ce cours ?</div>
          </div>
        </div>
        <div className="Group-11-outer">
          <div id="Group-11" data-name="Group 11" className="Group-11">
            <div className="Group-10-outer">
              <div id="Group-10" data-name="Group 10" className="Group-10">
                <div className="Adresse-e-mail-outer">
                  <div
                    id="Adresse-e-mail"
                    data-name="Adresse e-mail"
                    className="Adresse-e-mail"
                  >
                    <div key="0">Adresse e-mail </div>
                  </div>
                </div>
                <div className="Rectangle-61-1-outer">
                  <div
                    id="Rectangle-61-1"
                    data-name="Rectangle 61"
                    alt="Rectangle 61"
                    className="Rectangle-61-1"
                  ></div>
                </div>
              </div>
            </div>
            <div className="Group-9-1-outer">
              <div id="Group-9-1" data-name="Group 9" className="Group-9-1">
                <div className="Rectangle-61-2-outer">
                  <div
                    id="Rectangle-61-2"
                    data-name="Rectangle 61"
                    alt="Rectangle 61"
                    className="Rectangle-61-2"
                  ></div>
                </div>
                <div className="Recevoir-le-cours-outer">
                  <div
                    id="Recevoir-le-cours"
                    data-name="Recevoir le cours"
                    className="Recevoir-le-cours"
                  >
                    <div key="0">Recevoir le cours </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Rectangle-65-outer">
          <div
            id="Rectangle-65"
            data-name="Rectangle 65"
            alt="Rectangle 65"
            className="Rectangle-65"
          ></div>
        </div>

        <div className="Pourquoi-suivre-ce-c-outer">
          <div
            id="Pourquoi-suivre-ce-c"
            data-name="Pourquoi suivre ce cours ?"
            className="Pourquoi-suivre-ce-c"
          >
            <div key="0">Pourquoi suivre ce cours ?</div>
          </div>
        </div>
        <div className="imageCour">
          <img
            id="Ellipse-2"
            data-name="Ellipse 2"
            alt="Ellipse 2"
            className="Ellipse-2"
            src="/images/Ellipse_2.png"
          />
          <img
            id="Ellipse-2"
            data-name="Ellipse 2"
            alt="Ellipse 3"
            className="Ellipse-2"
            src="/images/Ellipse_2.png"
          />
          <img
            id="Ellipse-2"
            data-name="Ellipse 2"
            alt="Ellipse 2"
            className="Ellipse-2"
            src="/images/Ellipse_2.png"
          />
        </div>
        <div className="textCour">
          <div className="Lorem-ipsum-dolor-si-2-outer">
            <div
              id="Lorem-ipsum-dolor-si-2"
              data-name="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
              className="Lorem-ipsum-dolor-si-2"
            >
              <div key="0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </div>
            </div>
          </div>
          <div className="Lorem-ipsum-dolor-si-2-outer">
            <div
              id="Lorem-ipsum-dolor-si-2"
              data-name="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
              className="Lorem-ipsum-dolor-si-3"
            >
              <div key="0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </div>
            </div>
          </div>
          <div className="Lorem-ipsum-dolor-si-2-outer">
            <div
              id="Lorem-ipsum-dolor-si-2"
              data-name="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt"
              className="Lorem-ipsum-dolor-si-4"
            >
              <div key="0">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt
              </div>
            </div>
          </div>
        </div>
        <div className="Rectangle-66-outer">
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
        </div>
      </div>
    </div>
  );
}
