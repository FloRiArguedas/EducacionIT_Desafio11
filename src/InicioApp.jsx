import React from 'react'
import Ejercicio1 from './Components/Ejercicio1.jsx'
import Ejercicio2 from './Components/Ejercicio2.jsx'
import Ejercicio3 from './Components/Ejercicio3.jsx'
import Ejercicio4 from './Components/Ejercicio4.jsx'

function InicioApp() {

  return (
    <>
    <Ejercicio1
        nombre= "Floricela Arguedas"
        imagen= "./src/img/pasaportepic.png"
        profesion= "Ingeniera en Computación | Junior"
        tel= "+(506) 7012-8588"
        residencia= "Heredia, Costa Rica"
    />

    <Ejercicio2
      //!Descomentar uno a uno para ver diferentes resultados
        typealert= "alert-success" 
        //typealert= "alert-warning"
        //typealert= "alert-danger"
      >
        {/* //!Descomentar uno a uno para ver diferentes resultados */}
        <p>Esta es una alerta de success. Todo está ok!</p>
        {/* <p>Esta es una alerta de warning. Ten Cuidado!</p>
        <p>Esta es una alerta de danger. Esto es un caos!</p> */}
    </Ejercicio2>

    <Ejercicio3/>

    <Ejercicio4/>
    
    </>
  )
}

export default InicioApp