import React, {useState}  from 'react';
import "../Contact/Contact.css";
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
const Contact = () => {
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
    emailjs.sendForm('service_fbrjyic','template_f4r7lgg',e.target,'Jz0s4jRmxXuNIKG0o')
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
      <h2 className='title-form'>Contact Me</h2>
      <label for='user_name'>Name: </label>
        <input type="text" name='user_name' id='user_name' placeholder='Name*'  onChange={handleInputChange} required />
        <hr />
        <label for="user_email">Email: </label>
        <input type="email" name='user_email' id='user_email' placeholder='Email*'  onChange={handleInputChange} required />
        <hr />
        <label for="user_message">Message </label>
        <textarea name="user_message" id="user_message" cols="30" rows="10"  placeholder='Message*' required ></textarea>
        <hr />
        <button className='btnf1'>Send</button>
    </div>
      </form>
    </div>
  )
  }
export default Contact;





