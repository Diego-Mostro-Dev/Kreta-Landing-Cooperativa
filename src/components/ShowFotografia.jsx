import "../assets/css/ShowFotografia.css";
import { useNavigate } from "react-router-dom";
import icono_fotografia from "../assets/statics/camara.webp";

export default function ShowFotografia() {
  const Navigate = useNavigate();
  const redirectToFotografia = () => {
    Navigate("/fotografia");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };
  return (
    <>
      <div className="ocultoF">
        <p className="texto">
          Instucionales, áereas, de producto y publicitarias. Nuestros
          fotógrafos son todoterreno y están listos para hacer clic en el
          momento justo. ¡Mirá nuestro portfolio!
          <br />
          <br />
        </p>
        <span className="vermas" onClick={redirectToFotografia}>
          <img
            src={icono_fotografia}
            alt="Fotografia"
            className="icono-fotografia"
          />
        </span>
      </div>
    </>
  );
}
