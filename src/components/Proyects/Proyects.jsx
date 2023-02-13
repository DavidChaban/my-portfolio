import React from "react";
import "../Home/Home1";
import "../Proyects/Proyects.css";

const Proyects = () => {
  return (
    <div className="pr01container">
    <div className="pr-container">
      {/*  CARD 1  */}
      <div className="box-container">
        <div className="card-container1">
          <h2 className="project-h2">
Encrypter</h2>
          <div className="proyect1">
            <a className="a-pr1"
              href="https://challenger-one-david-chaban.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
           
            <p className="proyect-text"> View Demo</p>

              {/* <button className="demo-button">Demo</button>{" "} */}
            </a>
  
            <a className="a-pr1"
              href="https://github.com/DavidChaban/ChallengerOne-DavidChaban"
              target="_blank"
              rel="noopener noreferrer"
            >
         
              <button className="code-button">Code 
              
                <img src="/github (1).png" className="githubpr"></img>
              </button>

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
              View Demo
            </p>
            <a 
              href="https://mindy-pet-shop.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
            </a>
            <a className="a-pr1"
              href="https://github.com/DavidChaban/Mindy-PetShop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="code-button2">Code
              
              <img src="/github (1).png" className="githubpr"></img>
              
              </button>{" "}
            </a>
          </div>
        </div>

        {/*  CARD 3  */}
        {/* <div className="card-container5">
        <h2 className="proyect5-h2">RFC </h2>
          <div className="proyect5">
          <p className="proyect-text5">View Demo</p>
            <a
              href="https://rftc-web.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
            
            </a>
            
            <a className="a-pr1"
              href="https://github.com/nehuen-aumedes-diez/Mindhub-Challengue-RFTC-Front"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="code-button5">Code

              <img src="/github (1).png" className="githubpr"></img>

              </button>
            </a>
          </div>
          </div> */}








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
