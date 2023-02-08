import React from "react";
import "../Home/Home1";
import "../Proyects/Proyects.css";

const Proyects = () => {
  return (
    <div className="pr-container">
      {/*  CARD 1  */}
      <div className="box-container">
        <div className="card-container1">
          <h2 className="project-h2">Encriptador</h2>
          <div className="proyect1">
            <p className="proyect-text"> App de Encriptado, realizada con Js</p>
            <a
              href="https://challenger-one-david-chaban.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="demo-button">Demo</button>{" "}
            </a>
            <a
              href="https://github.com/DavidChaban/ChallengerOne-DavidChaban"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="code-button">Code</button>
            </a>
          </div>
        </div>

        {/*  CARD 2  */}
        {/* <div className='box-container2'> */}
        <div className="card-container2">
          <h2 className="proyect-h02"> Pet Shop Mindy</h2>
          <div className="proyect2">
            <p className="proyect-text2">
              {" "}
              Proyecto Grupal,Realizada con con JS
            </p>
            <a
              href="https://mindy-pet-shop.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="demo-button2">Demo</button>{" "}
            </a>
            <a
              href="https://github.com/DavidChaban/Mindy-PetShop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="code-button2">Code</button>{" "}
            </a>
          </div>
        </div>

        {/*  CARD 3  */}
        <div>
        <h2 className="proyect5-h2">RFC </h2>
          <div className="proyect5">
            <a
              href="https://rftc-web.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="demo-button">Demo</button>
            </a>
            <a
              href="https://github.com/nehuen-aumedes-diez/Mindhub-Challengue-RFTC-Front"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="code-button">Code</button>
            </a>
          </div>
          </div>








      </div>
    </div>
  );
};

{
  /* <div className='proyect6'>Todo List</div> */
}
{
  /* <div className='proyect3'>Amazing Events</div>

<div className='proyect4'>My Tinerary</div> */
}
export default Proyects;
