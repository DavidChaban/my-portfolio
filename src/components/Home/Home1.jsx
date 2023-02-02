import React from 'react'
import '../Home/home1.css';
import 'typeface-quicksand';
import "react-toastify/dist/ReactToastify.css";
import Aboutme from '../Aboutme/Aboutme'
import Proyects from '../Proyects/Proyects'
const Home1 = () => {
    const tittle = "David Chaban ";
    const slogan = "I´m Full Stack Mern Developer"
    const secondCard = "Welcome "
    const secondCard2 = "to my Portfolio "
  return (
    <>
     <div className='home-container'>
      <div className='home1 '>
   <div className="flip-card">
    <div className="flip-card-inner">
        <div className="flip-card-front">
            <p className="title">{secondCard}</p>
            <p className='title2'>{secondCard2}</p>
        </div>
        <div className="flip-card-back">
        <div className='img-container '>
      </div>
      <h1 className='tittle-home '><span className='my-style'> {tittle}  </span>   </h1>
      <p className='slogan-home'> {slogan}</p>
      <div className="redes">
                  <a target={"_blank rel=noopener"} href="https://github.com/DavidChaban"><i className="fa-brands fa-github"></i></a>
                  <a target={"_blank rel=noopener"} href="https://twitter.com/tdcdev"><i className="fa-brands fa-twitter"></i></a>
                 <a target="_blank"  rel= "noopener noreferrer"  href="https://www.instagram.com/tendodc/" download type='button'><i className="fa-brands fa-instagram"></i>
                  </a>
                  <a target={"_blank rel=noopener"} href="https://www.linkedin.com/in/daviidc"><i className="fa-brands fa-linkedin-in"></i></a>
                    <br></br>
              </div>
              
        </div> 
    </div>
</div>
    </div>
    </div>
    <Aboutme/>
    {/* <Proyects/> */}
    </>
  )
  }
export default Home1