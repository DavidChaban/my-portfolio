import React from 'react'
import '../Footer/Footer.css'
import icon from "bootstrap"
const Footer = () => {

  



  return (

    // class=" container-fluid d-flex justify-content-around align-items-center col-xs-12 col-sm-12 col-md-12 col-lg-12" id='f1'


    <footer id='f1'>
    <div className="redes-footer" >
      
      <div className='icon-github'>
      <a className='i0' rel= "noopener noreferrer" target="_blank" href="https://github.com/davidchaban/" >
      <img src='/github.png' className=" icon-github1" ></img>
      Github
      </a>
      </div>


      <div className='icon-instagram'>
      <a  className='i1' rel= "noopener noreferrer" target="_blank" href="https://www.instagram.com/tendodc">  
      <img src='/instagram.png' className=" icon-instagram1"></img>Instagram
      </a>
      </div>


      <div className='icon-linkedin'>
      <a className='i2' rel= "noopener noreferrer"  target="_blank" href="https://www.linkedin.com/in/daviidc"> 
      <img src='/linkedin.png' className=" icon-linkedin1" ></img>Linkedin
      </a>
      </div>
    
      <div className='icon-tweeter'>
      <a  className='i3' rel= "noopener noreferrer"  target="_blank" href="https://www.linkedin.com/in/daviidc">
      <img src='/twitter (1).png' className=" icon-tweeter1" ></img>Twiteer
      </a>
      </div>
    
    
    
    
    </div>





    <div>
      <h2 className='footer-all'> <small> All rights reserved - &copy; David Chaban - 2022</small> </h2>
    </div>
  </footer>



  )
}

export default Footer