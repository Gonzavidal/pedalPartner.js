import Maps from '../assets/maps.jpg';


export default function Comunidad() {
  return (
    <div className="text-center mb-4 text-black">
      <h1 className="display-3">Encuentra tu tienda</h1>
      <br></br>
      <hr className="hr" />
      <div className="row">
        <div className="col">
          <img src={Maps} alt="mapa" height="300" width="485" />

        </div>
        <div className="col">
          <div className="input-group input-group-sm mb-4">
            <span className="input-group-text" id="inputGroup-sizing-sm">Nombre Tienda</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
          </div>
          <div className="input-group input-group-sm mb-4">
            <span className="input-group-text" id="inputGroup-sizing-sm">Jefe Tienda</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
          </div>
          <div className="input-group input-group-sm mb-4">
            <span className="input-group-text" id="inputGroup-sizing-sm">Contacto</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
          </div>
          
          <span className="mb-4">Medio de pago Disponibles</span>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" for="flexCheckDefault">
                Tarjetas
              </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" for="flexCheckDefault">
                Efectivo
              </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label" for="flexCheckDefault">
                Transferencias
              </label>
          </div>
          <div className="input-group input-group-sm mb-4">
            <span className="input-group-text" id="inputGroup-sizing-sm">Mantención desde $</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
          </div>
          <div className="input-group input-group-sm mb-4">
            <span className="input-group-text" id="inputGroup-sizing-sm">Indumentaria desde $</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
          </div>
          <div className="input-group input-group-sm mb-4">
            <span className="input-group-text" id="inputGroup-sizing-sm">Bicicletas desde $</span>
            <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
          </div>
        </div>
      </div>
    </div>



  );
}
