import React from "react";
import "../Home/Home1";
import "../Proyects/Proyects.css";
import { useTranslation } from "react-i18next";

const Proyects = () => {
  const [t, i18n] = useTranslation("global");
  return (
    <div className="pr01container ">
    <h2 className="title-myproyects">{t("proyects.proyects")} </h2>
      <div className="pr-container ">

      
        {/*  CARD 1  */}
        <div className="box-container ">
          <div className="card-container1 ">
            <h2 className="project-h2">{t("proyects.Encrypter")}</h2>
            <div className="proyect1 ">
              <a
                className="a-pr1"
                href="https://challenger-one-david-chaban.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="container-text">
                  <p className="proyect-text"> {t("proyects.ViewDemo")}</p>
                </div>
              </a>

              <a
                className="a-pr11"
                href="https://github.com/DavidChaban/ChallengerOne-DavidChaban"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="code-button">
                {t("proyects.code")}
                  <img src="/github (1).png" className="githubpr" alt="imagendegithub"></img>
                </button>
              </a>
            </div>
          </div>

          {/*  CARD 2  */}
          <div className="card-container2">
            <h2 className="proyect-h02">{t("proyects.Pet Shop Mindy")}</h2>
            <div className="proyect2">
              <a
                className="a-pr11"
                href="https://mindy-pet-shop.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="container-text2">
                  <p className="proyect-text2">  {t("proyects.ViewDemo")}</p>
                </div>
              </a>
              <a
                className="a-pr1"
                href="https://github.com/DavidChaban/Mindy-PetShop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="code-button2">
                {t("proyects.code")}
                  <img src="/github (1).png" className="githubpr" alt="imagendeGithub"></img>
                </button>{" "}
              </a>
            </div>
          </div>


          {/*  CARD 3  */}
          <div className="card-container5">
            <h2 className="proyect5-h2"> {t("proyects.Retro Football Team Clothing")} </h2>
            <div className="proyect5">
              <a
                className="a-pr11"
                href="https://rftc-web.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="container-text5">
                  <p className="proyect-text5"> {t("proyects.ViewDemo")}</p>
                </div>
              </a>

              <a
                className="a-pr1"
                href="https://github.com/nehuen-aumedes-diez/Mindhub-Challengue-RFTC-Front"
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="code-button5">
                {t("proyects.code")}
                  <img src="/github (1).png" className="githubpr" alt="imagendegithub"></img>
                </button>
              </a>
            </div>
          </div>
        </div>
      

      </div>
    </div>
  );
};



export default Proyects;
