import React from 'react'
import '../Footer/Footer.css'
import icon from "bootstrap"
const Footer = () => {

  



  return (




    <footer class=" container-fluid d-flex justify-content-around align-items-center col-xs-12 col-sm-12 col-md-12 col-lg-12" id='f1'>
    <div className="social-bar gap-3">
      <a className=" icon-github"  rel= "noopener noreferrer" target="_blank" href="https://github.com/davidchaban/" >Github</a>
      <a className=" icon-instagram"  rel= "noopener noreferrer" target="_blank" href="https://www.instagram.com/tendodc">Instagram </a>
      <a className=" icon-linkedin" rel= "noopener noreferrer"  target="_blank" href="https://www.linkedin.com/in/daviidc">Linkedin</a>
    </div>
    <div>
      <h2> <small> All rights reserved - &copy; David Chaban - 2022</small> </h2>
    </div>
  </footer>



  )
}

export default Footer