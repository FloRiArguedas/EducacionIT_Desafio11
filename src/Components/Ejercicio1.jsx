import './Ejercicio1.css'
const Ejercicio1 = (props) => {
  const {nombre, imagen, profesion,tel,residencia} = props
  return (
    <>
      <h1>Ejercicio con Props </h1>
      <hr />
      <div id="tarjetap" className='mb-4' >
        <h3>{nombre}</h3>
        <img id="imagen" src={imagen} className="card-img-top"></img>
        <p>{profesion}</p>
        <p>{tel}</p>
        <p>{residencia}</p>
      </div>
    </>
  );
};

export default Ejercicio1;
