import React, {useState}  from 'react';
import "../Contact/Contact.css";
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useTranslation } from "react-i18next";


const Contact = () => {
  const [t] = useTranslation("global");
  const [data, setData] = useState([])
  const nav = useNavigate()
  const handleInputChange = (e) => {
    console.log(e.target.value);
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  const sendEmail = (e) => {
    e.preventDefault();
    try{
    emailjs.sendForm('service_ex5jet9','template_3l8k2qd',e.target,'AxtVqYwqJEgEiEC9f')
	.then(res =>console.log(res))
		.catch(error => console.log(error))
    e.target.reset()
  console.log(e)
  
  if(emailjs.data.success){
    nav('/')
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Sent Successfuly',
      showConfirmButton: true,
      timer: 1500
    })
         }
}catch(error){
  console.log(error)
  Swal.fire({
    position: 'center',
    icon: 'success',
    title: 'Message Sent Successfuly',
    showConfirmButton: true,
    timer: 3000
  })
}
}
  return (
    <div className='div-form'>
      <form className='form-mail' onSubmit={sendEmail}>
   
    <div className='cp'>
      <h2 className='title-form'>{t("contact.ContactMe")}</h2>
      <label htmlFor='user_name'>{t("contact.Name")}</label>
        <input type="text" name='user_name' id='user_name' placeholder='Name*'  onChange={handleInputChange} required />
        <hr />
        <label htmlFor="user_email">{t("contact.Email")}</label>
        <input type="email" name='user_email' id='user_email' placeholder='Email*'  onChange={handleInputChange} required />
        <hr />
        <label htmlFor="user_message">{t("contact.Message")} </label>
        <textarea name="user_message" id="user_message" cols="30" rows="10"  placeholder='Message*' required ></textarea>
        <hr />
        <button className='btnf1'>{t("contact.Send")}</button>
    </div>
      </form>
   



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
      <i className="fa-brands fa-linkedin i003"></i>
      </a>
      </div>

    </div>
 
 
    </div>
    
  )
  }
export default Contact;





