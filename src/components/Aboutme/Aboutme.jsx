import React from "react";
import "../Home/Home1";
import "../Aboutme/Aboutme.css";
import { useTranslation } from "react-i18next";


const Section = () => {
  const [t] = useTranslation("global");
  return (
    <section id="aboutme" className="sobremi">
      <div className="contenido-seccion">
        {/* <h2 className="about-title">About Me</h2> */}
        <p>
           {t("ABOUTME.aboutme")}
        </p>
        <div className="fila">
          <div className="col" >
            <div className="ilustracion"></div>
          </div>
          <div className="col" >
            <h3 className="skills-title">{t("skills.skills")}</h3>
            <div
              className="contenedor-intereses"
            >
              <div className="interes">
              <div className="container-logotext">
                <img
                  className="img1"
                  src="/icons8-html-5-50.png"
                  alt="html-img"
                />
                <span className="s1">
                  HTML5
                </span>
                </div>
              </div>
              <div className="interes">
                <img
                     className="img2"
                  src="/icons8-css3-50.png"
                  alt="html-img"
                />
                <span className="s1">CSS3</span>
              </div>
              <div className="interes">
                <img
                 className="img3"
                  src="/icons8-logotipo-de-javascript-50.png"
                  alt="html-img"
                />
                <span className="s1">Javascript</span>
              </div>

              <div className="interes">
                <img
                 className="img4"
                  src="/nodejsnew.png"
                  alt="html-img"
                   
                />
                <span className="s1">Node JS</span>
              </div>

              <div className="interes">
                <img
                 className="img5"
                  src="/mongodb1.png"
                  alt="html-img"
                  
                />
                <span className="s1">Mongo DB</span>
              </div>
              <div className="interes">
                <img
                 className="img6"
                  src="/react.png"
                  alt="html-img"
                 
                />
                <span className="s1">React</span>
              </div>
              <div className="interes">
                <img
                 className="img7"
                  src="/redux.png"
                  alt="html-img"
                  
                />
                <span className="s1">Redux</span>
              </div>
              <div className="interes">
                <img
                 className="img8"
                  src="/rnative.png"
                  alt="html-img"
                  
                />
                <span className="s1">React Native</span>
              </div>
            </div>
          </div>
        </div>
        <a
          href="./DavidChabanCV-2023w.pdf "
          target="_blank"
          rel="noopener noreferrer"
          className="a-button"
        >
          {" "}
          <button className="a-button">
          {t("download.download")}
          
            <span className="overlay"></span>
          </button>
        </a>
      </div>
    </section>
  );
};
export default Section;
