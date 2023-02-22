import React, { useState } from "react";
import "../Header/Header.css";
import { Link as LinkRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";



export default function Burguer() {
  var idioma = navigator.language || navigator.userLanguage;
  const [t, i18n] = useTranslation("global");
  const btn1 = "HOME";
  const btn2 = "ABOUT ME";
  const btn3 = "PROYECTS";
  const btn4 = "CONTACT";
  const btn5 = "<DC/>";
  let [viewHide, setViewHide] = useState(false);
  let hide = () => {
    setViewHide(!viewHide); //viewHide = mostrarOcultar
  };

  return (
    <div className="nav-container1"> 
      <div className="nav-container">
        <div>
          <LinkRouter to="/">
            <button className="nav-5">{btn5}</button>
          </LinkRouter>
        </div>
          <div className="translate-botoncontain">
<button className="btn-translates" onClick={ () => i18n.changeLanguage("es") }>ESP</button>
<button className="btn-translaten" onClick={ () => i18n.changeLanguage("en") }>ENG</button>
</div>
        
        <div className="nav-0">


          <LinkRouter to="/"> 
            <button className="nav-1">{t("header.btn1")}</button>
          </LinkRouter>

          <LinkRouter to="/aboutme">
            <button className="nav-2"> {t("header.btn2")}</button>
          </LinkRouter>

          <LinkRouter to="/proyects">
            <button className="nav-2"> {t("header.btn3")}</button>
          </LinkRouter>

          <LinkRouter to="/contact">
            <button className="nav-2"> {t("header.btn4")}</button>
          </LinkRouter>


        </div>
      
        <>
          {viewHide ? (
            <>
              <div className="burguer-container">
                <i className="fa-sharp fa-solid fa-xmark x-awesome" onClick={hide}></i>
               <div className="links-header">
                <LinkRouter to="/" className="a1">
                  {btn1}
                  <button className="btn-burguer"> </button>
                </LinkRouter>

                <LinkRouter to="/aboutme" className="a1">
                  {btn2}
                  <button className="btn-burguer"> </button>
                </LinkRouter>

                <LinkRouter to="/proyects" className="a1">
                  {btn3}
                  <button className="btn-burguer"> </button>
                </LinkRouter>

                <LinkRouter to="/contact" className="a1">
                  {btn4}
                  <button className="btn-burguer"> </button>
                </LinkRouter>
                </div>
              </div>
            </>
          ) : (
            <>
              <i className="fa-solid fa-bars burguer-awesome"   onClick={hide}></i>
            </>
          )}
        </>
       
      </div>
    </div>

  );
}
