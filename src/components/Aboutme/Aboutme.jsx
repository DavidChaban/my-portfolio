import React from 'react'
import "../Home/Home1"
import "../Aboutme/Aboutme.css"



const Section = () => {





  return (

    <section>
    <div className='section-container'>

    <h2 className='tittle-h2'>  Sobre Mi</h2>
    <br></br>
    <p className='p-section'> Hola, soy David Chaban.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo provident perferendis omnis cumque, alias amet ipsa ducimus ut molestias sunt? Laudantium, recusandae quod! Dolorum saepe cupiditate voluptatum dicta maxime sunt? </p>

    </div>

    <div>
    <br></br>
    <h3 className='tittle-h3'>Datos Personales</h3>
    <br></br>
    <br></br>
      <div className='interesting container'>
      <p>Stack: <span>MERN</span> </p> 
      <p>Ubicación: <span>Buenos Aires, Argentina </span></p>
      <p>Linkedin: <span>www.linkedin.com/in/daviidc </span></p>
      <p>Github: <span>https://github.com/davidchaban </span></p>
      <p>Email: <span>davidchaban01@gmail.com </span></p>
      <p>Twitter: <span>https://twitter.com/tdcdev </span></p>
      </div>
    
    </div>
    <br></br>
    <br></br>
    <br></br>
    <div>


    <h3 className='myinteresting'>Mis Intereses</h3>

    <div className='items-interesting container'>
    <div> <p>Juegos</p></div>
    <div> <p>Musica</p></div>
    <div> <p>Viajar</p></div>
    <div> <p>Deporte</p></div>
    <div> <p>Autos</p></div>
    <div> <p>Fotos</p></div>
    </div>


    </div>
    
    <div className='CV-download'>Descargar CV </div>
    
    
     </section>
  )
}

export default Section