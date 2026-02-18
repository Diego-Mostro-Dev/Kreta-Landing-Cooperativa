import "../assets/css/ShowAudiovisual.css";
import icono_audiovisual from "../assets/statics/filmar-con-una-videocamara.webp";
import { useNavigate } from "react-router-dom";

export default function ShowAudiovisual() {
  const Navigate = useNavigate();

  const redirectToAudiovisual = () => {
    Navigate("/audiovisual");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  return (
    <>
      <div className="ocultoA">
        <p className="texto">
          Spots, campañas, coberturas, publicidades y videos institucionales.
          <br />
          En KRETA contamos con un equipo audiovisual completo para suplir las
          necesidades de tu empresa, tu negocio o tu cliente.
          <br /> ¡Mirá nuestro portfolio!
        </p>
        <span className="vermas" onClick={redirectToAudiovisual}>
          <img
            src={icono_audiovisual}
            alt="Audiovisual"
            className="icono-audiovisual"
          />
        </span>
      </div>
    </>
  );
}
