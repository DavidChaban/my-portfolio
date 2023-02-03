import React, { useState } from "react";
import "../Header/Header.css";
import { Link } from "react-router-dom";

export default function Burguer() {
  const btn1 = "HOME";
  const btn2 = "ABOUT ME";
  const btn3 = "PROYECTS";
  const btn4 = "CONTACT";
  const btn5 = "David Chaban";
  let [viewHide, setViewHide] = useState(false);
  let hide = () => {
    setViewHide(!viewHide); //viewHide = mostrarOcultar
  };

  return (
    <div className="nav-container1"> 
      <div className="nav-container">
        <div>
          <Link to="/home">
            <button className="nav-5">{btn5}</button>
          </Link>
        </div>
        
        <div className="nav-0">


          <Link to="/home">
            <button className="nav-1">{btn1}</button>
          </Link>

          <Link to="/aboutme">
            <button className="nav-2"> {btn2}</button>
          </Link>

          <Link to="/proyects">
            <button className="nav-2"> {btn3}</button>
          </Link>

          <Link to="/contact">
            <button className="nav-2"> {btn4}</button>
          </Link>


        </div>
      
        <>
          {viewHide ? (
            <>
              <div className="burguer-container">
                <i class="fa-sharp fa-solid fa-xmark x-awesome" onClick={hide}></i>
               <div className="links-header">
                <Link to="/home" className="a1">
                  {btn1}
                  <button className="btn-burguer"> </button>
                </Link>

                <Link to="/aboutme" className="a1">
                  {btn2}
                  <button className="btn-burguer"> </button>
                </Link>

                <Link to="/proyects" className="a1">
                  {btn3}
                  <button className="btn-burguer"> </button>
                </Link>

                <Link to="/contact" className="a1">
                  {btn4}
                  <button className="btn-burguer"> </button>
                </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <i class="fa-solid fa-bars burguer-awesome"   onClick={hide}></i>
            </>
          )}
        </>
      </div>
    </div>
  );
}
