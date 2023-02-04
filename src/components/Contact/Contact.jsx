import React, {useState, useRef} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import "../Contact/Contact.css";
import emailjs from 'emailjs-com'
const Contact = () => {
  const form = useRef();
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fbrjyic','template_3l8k2qd',e.target,'user_Jz0s4jRmxXuNIKG0os').then(res => {
        alert('Se ha enviado correctamente');
          console.log(res.text);
 
       
      });
  };

  return (
    <>
    <div>Contac Me!</div>
  <Formik
				initialValues={{
					nombre: '',
					correo: ''
				}}
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

					// Validacion correo
					if(!valores.correo){
						errores.correo = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
					resetForm();
					console.log('Formulario enviado');
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
				}}
>
				{( {errors} ) => (
					<Form className="formulario" ref={form} onSubmit={sendEmail}>
						<div>
							<label htmlFor="name">Name</label>
							<Field
								type="text" 
								id="name" 
								name="name" 
								placeholder="Join your Name"
							/>
							<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
						</div>
						<div>
							<label htmlFor="email">Email</label>
							<Field
								type="text" 
								id="email" 
								name="email" 
								placeholder="email@email.com" 
							/>
							<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
						</div>
						<div>
							<Field name="mensaje" as="textarea" placeholder="Mensaje" />
						</div>

						<button type="submit" className='button-send'>Send</button>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}
			</Formik>
    </>
  );
};
export default Contact;





