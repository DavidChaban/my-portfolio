import React from 'react'
import '../Footer/Footer.css'
const Footer = () => {
  const fecha = new Date().getFullYear();
  return (
    <footer id='f1'>
    <div className="redes-footer" >
      <div className='icon-github'>
      <a className='i0' rel= "noopener noreferrer" target="_blank" href="https://github.com/davidchaban/" >
      <i className="fa-brands fa-square-github i001"></i>
      </a>
      </div>
      <div className='icon-tweeter'>
      <a  className='i3' rel= "noopener noreferrer"  target="_blank" href="https://twitter.com/tdcdev">
     <i className="fa-brands fa-square-twitter i004"></i> 
      </a>
      </div>
      <div className='icon-instagram'>
      <a  className='i1' rel= "noopener noreferrer" target="_blank" href="https://www.instagram.com/tendodc">  
      <i className="fa-brands fa-instagram i002"></i>
      </a>
      </div>
      <div className='icon-linkedin'>
      <a className='i2' rel= "noopener noreferrer"  target="_blank" href="https://www.linkedin.com/in/daviidc"> 
      <i class="fa-brands fa-linkedin i003"></i>
      </a>
      </div>
    </div>
    <div>
      <h2 className='footer-all'> <small> All rights reserved - &copy; David Chaban -  {fecha}</small> </h2>
    </div>
  </footer>
  )
}
export default Footer