import React, { useState } from 'react'

function Ejercicio3() {
  const [counter, actualizar] = useState(0);
  const incrementar = () => actualizar(counter +1);
  const decrementar = () => actualizar(counter -1);

  return (
    <>
      <hr/>
      <h1>Ejercicio con Estado</h1>
      <h2>CONTADOR: {counter}</h2>
      <button type="button" className="btn btn-info mt-1 me-3" onClick={incrementar}>Incrementar</button>
      <button type="button" className="btn btn-dark mt-1" onClick={decrementar}>Decrementar</button>
    </>
  )
}

export default Ejercicio3