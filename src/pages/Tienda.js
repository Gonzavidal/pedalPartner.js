import Maps from '../assets/maps.jpg';


export default function Comunidad() {
  return (
    <div className="container-fluid text-center">
      <h1>Encuentra tu tienda</h1>
      <hr className="hr" />
      <div className="row">
        <div className="col-6">
          <img src={Maps} alt="mapa" id="mapPhoto"/>

        </div>
        <div className="col-6">
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
            <input className="form-check-input" type="checkbox" value="" id="Tarjetas"/>
              <label className="form-check-label" for="Tarjetas">
                Tarjetas
              </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="Efectivo"/>
              <label className="form-check-label" for="Efectivo">
                Efectivo
              </label>
          </div>
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="Transferencias"/>
              <label className="form-check-label" for="Transferencias">
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
