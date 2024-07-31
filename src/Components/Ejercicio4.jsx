import React, { useState } from 'react'
import AlertaEjercicio4 from './AlertaEjercicio4'

function Ejercicio4() {

  const [name, setName] = useState ('')
  const [email, setEmail] = useState ('')
  const [description, setDescription] = useState ('')

  const HandleName = (evento) => {
    setName(evento.target.value)
  }
  const HandleEmail = (eventoE) => {
    setEmail(eventoE.target.value)
  }
  const HandleDescription = (eventoD) => {
    setDescription(eventoD.target.value)
  }

  const [estado, setEstado] = useState('')

  const HandleInfo = (event) => {
    setEstado('Nombre: ' + name +' Email: ' + email + ' Descripción: ' + description)
  }
  
  console.log(estado)
  return (
    <>
    <hr/>
    <h1>Ejercicio Combinado</h1>
    <form style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <label className="form-label-name mb-2">Digite su nombre: </label>
        <input type="name" className="form-name mb-3" id="inputName" value= {name} onChange={HandleName}/>

        <label className="form-label-email mb-2">Digite su correo electrónico: </label>
        <input type="email" className="form-email mb-3" id="InputEmail" value= {email} onChange={HandleEmail}/>

        <label className="form-label-description mb-2">Brinde la Descripción: </label>
        <textarea className="form-description mb-3" id="inputDescription" rows="4" cols="30" value= {description} onChange={HandleDescription}></textarea>

        <button type="submit" className="btn btn-success mt-3" onClick={HandleInfo}>Enviar</button>
    </form>

    <AlertaEjercicio4 estado= {estado}/>
    </>
  )
}

export default Ejercicio4