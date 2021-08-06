import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";

function About() {
    const location = useLocation();
    const [cuenta, ponerCuenta] = useState(0)
    const [cadena, ponerCadena] = useState("cadena1")

    useEffect(
        function prueba(){
            console.log(1)
            ponerCadena("cadena2") // lo uso para cambiar la cadena una vez al entrar 
            return ()=>{ // el return se ejectuta cuando hay un renderizado nuevo
                    console.log(2)
                }
            
        },[cadena] // entra el useEffect cuando cadena cambia, si dejo el array vacio sejecuta una vez siempre y su quito el array se ejecuta siempre
    )

    

  return (
    <div>
      <p>you are in about and was passed {location.state.detail}</p>
      <p>cadena {cadena}</p>
      <p>Contador {cuenta}</p>
      <button onClick={()=>{ponerCuenta(cuenta+1)}}>Contador</button>
    </div>
  );
}

export default About