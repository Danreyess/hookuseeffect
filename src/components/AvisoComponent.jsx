import React from 'react'
import { useEffect } from 'react'

export const AvisoComponent = () => {

    useEffect(() => {
        //Se detecta cuando el componente se monta
        alert("El componente avisoComponent esta montado")

        //Cuando el componente se desmonta
        return() => {
            alert("Componente desmontado")
        }
    }, []) //Se ejecuta una vez por que le mando el array vacio

  return (
    <div>
        <h3>Sludos Daniel</h3>
        <button onClick={e => {
            alert("Bienvenido")
        }}>Mostrar alerta</button>
    </div>
  )
}
