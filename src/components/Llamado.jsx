import "../assets/css/Llamado.css";
import icono_contacto from "../assets/statics/chat.webp";
import { Link } from "react-router-dom";

export default function llamado() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <div className="container-llamado">
        <p className="texto-llamado">
          Somos una empresa dedicada a la producción, gestión y coordinación de
          contenidos digitales. Nos especializamos en la comunicación
          audiovisual con más de una década de experiencia en el mercado,
          trabajando juntos.
        </p>
        <Link
          to="/formulario"
          className="Link-Contactanos"
          onClick={scrollToTop}
        >
          <img src={icono_contacto} alt="contacto" className="icono-contacto" />
        </Link>
      </div>
    </>
  );
}
