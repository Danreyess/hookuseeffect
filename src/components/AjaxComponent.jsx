import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const AjaxComponent = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [cargando, setCargando] = useState(true);

  //Generico / Basico
  const getUsuariosEstaticos = () => {
    setUsuarios([
      {
        id: 1,
        email: "michael.lawson@reqres.in",
        first_name: "Michael",
        last_name: "Lawson",
      },
      {
        id: 2,
        email: "lindsay.ferguson@reqres.in",
        first_name: "Lindsay",
        last_name: "Ferguson",
      },
      {
        id: 3,
        email: "tobias.funke@reqres.in",
        first_name: "Tobias",
        last_name: "Funke",
      },
    ]);
  };

  //Metodo fetch para consumir un api
  const getUsuariosAjaxPms = () => {
    fetch("https://reqres.in/api/users?page=2")
      .then((respuesta) => respuesta.json())
      .then(
        (resultado_final) => {
          setUsuarios(resultado_final.data);
        },
        (error) => {
          console.log(error);
        }
      );
  };

  //Metodo await para consumir un api
  const getUsuariosAjaxAw =  () => {
    setTimeout( async() => {

        const peticion = await fetch("https://reqres.in/api/users?page=2");
        const { data } = await peticion.json();
    
        setUsuarios(data);
        setCargando(false)
        
    }, 2000)
  }



  useEffect(() => {
    //getUsuariosEstaticos()
    //getUsuariosAjaxPms()
    getUsuariosAjaxAw();
  }, []);

  if (cargando == true) {
    //Cuando todo esta cargando
    return <div className="cargando">Cargando datos</div>;
  } else {
    //Cuando todo ha ido bien
    return (
      <div>
        <h2>Listado de usuarios via Ajax</h2>
        <ol className="usuarios">
          {usuarios.map((usuarios) => {
            console.log(usuarios);
            return (
              <li key={usuarios.id}>
                {usuarios.first_name} {usuarios.last_name}
              </li>
            );
          })}
        </ol>
      </div>
    );
  }
};
