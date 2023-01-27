import React from 'react'
import "../Home/Home1"
import "../Aboutme/Aboutme.css"
const Section = () => {
  return (
    <section id="aboutme" className="sobremi">
        <div className="contenido-seccion">
            <h2 className='about-title'>About Me</h2>
            <p><span>Hola, soy David Chaban.</span>  Full Stack Mern developer, oriented in Front End. I know other Backend areas like (Node.js and Python) and Mobile (React Native).
I am passionate about creating beautiful and functional web applications. I have strong skills to identify and solve problems. I consider myself a proactive person and I am in constant training.
Besides programming, I love to travel and discover new places and different cultures.</p>
            <div className="fila">
                <div className="col">
                    <div className='ilustracion'>

                    </div>







                </div>
                          <div className="col">
                    <h3>Skills</h3>
                    <div className="contenedor-intereses" data-bs-toggle="tooltip" data-bs-html="true">
                        <div className="interes">

                        <image src="https://as2.ftcdn.net/v2/jpg/04/18/60/19/1000_F_418601991_Jvt0aZrBDxgbd5EJR1UyKXHvO9Q1mSBw.jpg" ></image>
                            <span data-bs-toggle="tooltip" data-bs-html="true">HTML5</span>
                        </div>
                        <div className="interes">
                        <image ></image>
                            <span>CSS3</span>
                        </div>
                        <div className="interes">
                        <image></image>
                            <span>Javascript</span>
                        </div>
                        <div className="interes">
                        <image></image>
                            <span>Node JS</span>
                        </div>
                        <div className="interes">
                            <image></image>
                            <span>Mongo DB</span>
                        </div>
                        <div className="interes">
                        <image></image>
                            <span>React</span>
                        </div>
                        <div className="interes">
                            <image></image>
                            <span>Redux Toolkit</span>
                        </div>
                        <div className="interes">
                            <image></image>
                            <span>Postman</span>
                        </div>
                    </div>
                </div>
            </div>
           <a  href="./DavidChaban-2023-tel.pdf " target="_blank" rel= "noopener noreferrer" className='a-button'> <button className='a-button'>
                Descargar CV <i className="fa-solid fa-download"></i>
                <span className="overlay"></span>
            </button></a>
        </div>
    </section>
  )
}
export default Section