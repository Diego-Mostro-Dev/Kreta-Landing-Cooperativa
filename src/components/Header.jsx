import "../assets/css/Header.css";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/statics/Logo Kreta (colores RGB).svg";

export default function Header() {
  const Navigate = useNavigate();

  const redirectToHome = () => {
    Navigate("/");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const redirectToAudiovisual = () => {
    Navigate("/audiovisual");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const redirectToFotografia = () => {
    Navigate("/fotografia");
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 100);
  };

  const redirectToSomos = () => {
    Navigate("/");
    setTimeout(() => {
      const somosElement = document.getElementById("Somos-Kreta");
      if (somosElement) {
        const yOffset = somosElement.getBoundingClientRect().top - 150;
        window.scrollTo({ top: yOffset, behavior: "smooth" });
      }
    }, 100);
  };

  return (
    <>
      <div className="header">
        <img
          src={Logo}
          alt="Logo Kreta"
          className="Logokreta"
          onClick={redirectToHome}
          style={{ cursor: "pointer" }}
        />
        <nav className="nav">
          <span className="nav-link" onClick={redirectToHome} lang="en">
            Home
          </span>
          <span className="nav-link" onClick={redirectToAudiovisual}>
            Audiovisual
          </span>
          <span className="nav-link" onClick={redirectToFotografia}>
            Fotografía
          </span>
          <span className="nav-link" onClick={redirectToSomos} lang="en">
            Somos KRETA
          </span>
        </nav>
      </div>
    </>
  );
}
