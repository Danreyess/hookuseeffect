import React, { useState, useEffect } from "react";
import { AvisoComponent } from "./AvisoComponent";

export const PruebasComponent = () => {
  const [usuario, setUsuario] = useState("Daniel Reyes");
  const [fecha, setFecha] = useState("12-08-2000");
  const [contador, setContador] = useState(0)

  const modUsuario = (e) => {
    setUsuario(e.target.value);
  };

  const cambiarFecha = (e) => {
    setFecha(Date.now());
  };

  //Solo se ejectura una vez, solo al cargar el componente
  useEffect(() => {
    console.log("Has cargado el componente Puebascomponents");
  }, []);

  //Se ejectura solo si cambio el ususario
  useEffect(() => {
    setContador(contador + 1)
    console.log("Has modificado el ususario " + contador)

  }, [usuario, fecha])

  return (
    <div>
      <h1>El efecto - Hook useEffect</h1>
      <strong className={contador >= 10 ? 'label label-green' : 'label'}>{usuario}</strong>
      <strong>{fecha}</strong>
      <p>
        <input
          type="text"
          onChange={modUsuario}
          placeholder="Cambia el nombre"
        />

        <button onClick={cambiarFecha}>Cambiar fecha</button>
      </p>

      {usuario == "Daniel" && <AvisoComponent/>}
    </div>
  );
};

