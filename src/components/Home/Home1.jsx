import React from 'react'
import '../Home/home1.css';
import 'typeface-quicksand';

const Home1 = () => {
    const tittle = "DAVID CHABAN";
    const slogan = "Frontend Developer"
  return (
    <div className='home-container'>
      <div className='home1'>
    <div className='home2'>
    <div className='img-container'>
    </div>

    <h1 className='tittle-home'><span className='my-style'> {tittle}  </span>   </h1>
    <p className='slogan-home'> {slogan}</p>
    <div class="redes">
                <a href="https://github.com/DavidChaban"><i className="fa-brands fa-github"></i></a>
                <a href="https://twitter.com/tdcdev"><i className="fa-brands fa-twitter"></i></a>
                <a href="https://www.instagram.com/tendodc/"><i class="fa-brands fa-instagram"></i></a>
                <a href="https://www.linkedin.com/in/daviidc"><i className="fa-brands fa-linkedin-in"></i></a>
            </div>
   </div>
    </div>

    <section> </section>











    </div>
   


   


  )
}

export default Home1