import React from "react";
import "../assets/css/SomoCard.css";
import { useState } from "react";

export default function SomosCard({ nombre, descripcion, imagen }) {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <>
      <div className="wraper-card">
        <div className="somosCard-container" onClick={handleClick}>
          <img src={imagen} alt={nombre} loading="lazy" className="imagen" />
          <div className="nombre">{nombre}</div>
          {show ? <div className="descripcion">{descripcion}</div> : ""}
        </div>
      </div>
    </>
  );
}
