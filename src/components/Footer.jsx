import "../assets/css/Footer.css";
import { Link } from "react-router-dom";
import Instagram from "../assets/statics/instagram.webp";
import Linkedin from "../assets/statics/linkedin.webp";
import youtube from "../assets/statics/youtube.webp";

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="social">
          <Link to="https://www.linkedin.com/company/kreta-dm/" target="_blank">
            <img src={Linkedin} className="linkedin" alt="Linkedin" />
          </Link>
          <Link
            to="https://www.instagram.com/kreta_dm?igsh=ZjI0YjNmOWM5OA%3D%3D"
            target="_blank"
          >
            <img src={Instagram} className="instagram" alt="Instagram" />
          </Link>
          <Link to="https://www.youtube.com/@kretamedia7930" target="_blank">
            <img src={youtube} className="youtube" alt="youtube" />
          </Link>
        </div>
        <p className="copyright" lang="en">
          Somos KRETA
        </p>
      </div>
    </>
  );
}
