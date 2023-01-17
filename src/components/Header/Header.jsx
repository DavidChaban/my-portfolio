import React from 'react'

import "../Home1"
import "../Header/Header.css"

import { Link, Link as LinkRouter } from "react-router-dom";

const Header = () => {
  const btn1 = "HOME";
  const btn2 = "ABOUT ME";
  const btn3 = "SKILLS";
  const btn4 = "PROYECTS";
  const btn5 = "CONTACT";
  


  return (

    
    <div className='header-container'>
    <div className='header1'>
   
    <LinkRouter to="/">  <button className="btnheader1">{btn1}</button></LinkRouter>
    <Link to="#Aboutme"><button className="btnheader2">{btn2}</button></Link>
    <Link to="#Skill"><button className="btnheader3">{btn3}</button></Link>
    <Link to="#Projects"><button className="btnheader4">{btn4}</button></Link>
    <Link to="#Contact"><button className="btnheader5">{btn5}</button></Link>
</div>
   
    </div>
  )
}

export default Header