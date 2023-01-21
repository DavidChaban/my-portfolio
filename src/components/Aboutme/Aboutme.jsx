import React from 'react'
import "../Home/Home1"
import "../Aboutme/Aboutme.css"



const Section = () => {


  


  return (

    <section id="aboutme" className="sobremi">
        <div className="contenido-seccion">
            <h2>Sobre Mí</h2>
            <p><span>Hola, soy David Chaban.</span> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam unde soluta minima necessitatibus, voluptas consectetur vero officiis quas, explicabo deleniti repellendus aliquid debitis maiores numquam voluptate reprehenderit in delectus dolores.</p>

            <div className="fila">
             


                <div className="col">
                    <h3>Datos Personales</h3>
                    <ul>
                        <li>
                            <strong>Stack</strong>
                            Mern
                        </li>
                        <li>
                            <strong>Ubicacion</strong>
                            Buenos Aires, Argentina
                        </li>
                        <li>
                            <strong>Linkedin</strong>
                            www.linkedin.com/in/daviidc
                        </li>
                        <li>
                            <strong>Github</strong>
                            https://github.com/davidchaban 
                        </li>
                        <li>
                            <strong>Email</strong>
                            davidchaban01@gmail.com
                        </li>
                        <li>
                            <strong>Twitter</strong>
                            <span>https://twitter.com/tdcdev</span>
                        </li>
                    </ul>
                </div>

                   
          
          
          
                          <div className="col">
                    <h3>Intereses</h3>
                    <div className="contenedor-intereses">
                        <div className="interes">
                            <i className="fa-solid fa-gamepad"></i>
                            <span>JUEGOS</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-headphones"></i>
                            <span>MUSICA</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-plane"></i>
                            <span>VIAJAR</span>
                        </div>
                        <div className="interes">
                            <i className="fa-brands fa-apple"></i>
                            <span>Películas</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-person-hiking"></i>
                            <span>DEPORTE</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-book"></i>
                            <span>LIBROS</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-car"></i>
                            <span>AUTOS</span>
                        </div>
                        <div className="interes">
                            <i className="fa-solid fa-camera"></i>
                            <span>FOTOS</span>
                        </div>
                        
                    </div>
                </div>
            </div>
            <button>
                Descargar CV <i className="fa-solid fa-download"></i>
                <span className="overlay"></span>
            </button>
        </div>
    </section>
  )
}

export default Section