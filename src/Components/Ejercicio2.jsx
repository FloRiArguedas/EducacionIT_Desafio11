
function Ejercicio2(props) {

  return (
    <>
      <hr/>
      <h1>Ejercicio con Children</h1>
      <div className={`alert ${props.typealert} mt-3`} role="alert">
        {props.children}
      </div>
    </>
  )
}

export default Ejercicio2