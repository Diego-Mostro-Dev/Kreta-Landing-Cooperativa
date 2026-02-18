import "../assets/css/Formulario.css";
import React, { useRef, useState } from "react";
import icono_enviar from "../assets/statics/enviar.webp";
import emailjs from "@emailjs/browser";

export default function Formulario() {
  const form = useRef();
  const [enviadoConExito, setEnviadoConExito] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9iuax6f",
        "template_ishf48i",
        form.current,
        "XRuyq49Q064sTIL4V",
      )
      .then(
        (result) => {
          console.log(result.text);
          setEnviadoConExito(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          setEnviadoConExito(false);
        },
      );
  };

  return (
    <>
      <div className="wraper-contacto">
        <div className="titulo-contacto">
          Llena el formulario para contactarnos
        </div>
        {enviadoConExito && (
          <div className="mensaje-exito">¡Mensaje enviado con éxito!</div>
        )}
        <form ref={form} onSubmit={sendEmail} className="formulario">
          <label htmlFor="user_name">Nombre</label>
          <input
            className="entrada"
            type="text"
            name="user_name"
            placeholder="Ingresa tu nombre"
          />
          <label htmlFor="user_email">Correo</label>
          <input
            className="entrada"
            type="email"
            name="user_email"
            placeholder="Correo electrónico"
          />
          <label htmlFor="message">Mensaje</label>
          <textarea
            className="textarea"
            name="message"
            placeholder="Escribe tu mensaje aquí"
          />
          <button type="submit">
            <img src={icono_enviar} alt="Enviar" className="icono-enviar" />
          </button>
        </form>
      </div>
    </>
  );
}
