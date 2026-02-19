import React from "react";
import "../assets/css/Home.css";
import Video from "../components/Video";
import AudiovisualHome from "../components/AudiovisualHome";
import FotografiaHome from "../components/FotografiaHome";
import Llamado from "../components/Llamado";
import Somos from "../components/Somos";
import Ubicacion from "../components/Ubicacion";
import Formulario from "../components/Formulario";

export default function Home() {
  const videoId = "dbcc_1t0in4";

  return (
    <>
      <div className="video-container">
        <Video videoId={videoId} />
      </div>
      <div className="llamado">
        <Llamado></Llamado>
      </div>
      <div className="wraper">
        <div className="audiovisual-home">
          <AudiovisualHome></AudiovisualHome>
        </div>
        <div className="fotografia-home">
          <FotografiaHome></FotografiaHome>
        </div>
      </div>
      <div className="somos">
        <Somos></Somos>
      </div>
      <div className="ubicacion">
        <Ubicacion></Ubicacion>
      </div>
      <div className="contacto">
        <Formulario></Formulario>
      </div>
    </>
  );
}
