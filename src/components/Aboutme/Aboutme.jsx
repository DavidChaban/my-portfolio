import React from "react";
import "../Home/Home1";
import "../Aboutme/Aboutme.css";
const Section = () => {
  return (
    <section id="aboutme" className="sobremi">
      <div className="contenido-seccion">
        <h2 className="about-title">About Me</h2>
        <p>
          <span>Hi, i´m David Chaban.</span> Full Stack Mern developer,
          oriented in Front End. I know other Backend areas like (Node.js and
          Python) and Mobile (React Native). I am passionate about creating
          beautiful and functional web applications. I have strong skills to
          identify and solve problems. I consider myself a proactive person and
          I am in constant training. Besides programming, I love to travel and
          discover new places and different cultures.
        </p>
        <div className="fila">
          <div className="col" >
            <div className="ilustracion"></div>
          </div>
          <div className="col" >
            <h3 className="skills-title">Skills</h3>
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
          href="./DavidChaban-2023-tel.pdf "
          target="_blank"
          rel="noopener noreferrer"
          className="a-button"
        >
          {" "}
          <button className="a-button">
            Download CV 
            <span className="overlay"></span>
          </button>
        </a>
      </div>
    </section>
  );
};
export default Section;
