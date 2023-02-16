import React, {useState, useRef} from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import "../Contact/Contact.css";
import emailjs from '@emailjs/browser';
 
const Contact = () => {
  const form = useRef();
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fbrjyic','template_f4r7lgg',e.target,'Jz0s4jRmxXuNIKG0o')
	.then(res =>console.log(res))
		.catch(error => console.log(error))
            };
  return (
<div className='div-form'>
      <h1 className='title-form'>Contact Us</h1>
      <form className='form-mail' onSubmit={sendEmail}>
        <label>Name</label>
        <input type="text" name='user_name' />
        <hr />

        <label>Email</label>
        <input type="email" name='user_email' />
        <hr />

        <label>Message</label>
        <textarea name="user_message" id="" cols="30" rows="10"></textarea>
        <hr />
        <button>Send</button>
      </form>
    </div>
  )
  }
export default Contact;





