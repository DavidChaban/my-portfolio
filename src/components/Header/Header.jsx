import React, { useEffect, useState } from "react";
import "../Header/Header.css";
import { Link as LinkRouter } from "react-router-dom";

export default function Burguer() {
  const btn1 = "ABOUT ME";
  const btn2 = "SKILLS";
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
          <LinkRouter to="/">
            <button className="nav-5">{btn5}</button>
          </LinkRouter>
        </div>
        
        <div className="nav-0">
          <LinkRouter to="/">
            <button className="nav-1">{btn1}</button>
          </LinkRouter>
          <LinkRouter to="/Cities">
            <button className="nav-2"> {btn2}</button>
          </LinkRouter>
          <LinkRouter to="/hotels">
            <button className="nav-2"> {btn3}</button>
          </LinkRouter>
          <LinkRouter to="/mycities">
            <button className="nav-2"> {btn4}</button>
          </LinkRouter>
        </div>
      
        <>
          {viewHide ? (
            <>
              <div className="burguer-container">
                <img
                  className="burguer-img"
                  src="https://cdn-icons-png.flaticon.com/512/7134/7134106.png"
                  alt="burguer foto"
                  onClick={hide}
                />
                <LinkRouter to="#aboutme" className="a1">
                  {btn1}
                  <button className="btn-burguer"> </button>
                </LinkRouter>
                <LinkRouter to="#skills" className="a1">
                  {btn2}
                  <button className="btn-burguer"> </button>
                </LinkRouter>
                <LinkRouter to="#proyects" className="a1">
                  {btn3}
                  <button className="btn-burguer"> </button>
                </LinkRouter>
                <LinkRouter to="/#contact" className="a1">
                  {btn4}
                  <button className="btn-burguer"> </button>
                </LinkRouter>
              </div>
            </>
          ) : (
            <>
              <img
                className="burguer-img "
                src="https://cdn-icons-png.flaticon.com/512/7134/7134106.png"
                alt="burguerIcon"
                onClick={hide}
              />
            </>
          )}
        </>
      </div>
    </div>
  );
}
