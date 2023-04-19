import Maps from '/workspace/Pedal_Partner/src/assets/maps.jpg';


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
          <div class="input-group input-group-sm mb-4">
            <span class="input-group-text" id="inputGroup-sizing-sm">Nombre Tienda</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
          </div>
          <div class="input-group input-group-sm mb-4">
            <span class="input-group-text" id="inputGroup-sizing-sm">Jefe Tienda</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
          </div>
          <div class="input-group input-group-sm mb-4">
            <span class="input-group-text" id="inputGroup-sizing-sm">Contacto</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
          </div>
          
          <span class="mb-4">Medio de pago Disponibles</span>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">
                Tarjetas
              </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">
                Efectivo
              </label>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label class="form-check-label" for="flexCheckDefault">
                Transferencias
              </label>
          </div>
          <div class="input-group input-group-sm mb-4">
            <span class="input-group-text" id="inputGroup-sizing-sm">Mantención desde $</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
          </div>
          <div class="input-group input-group-sm mb-4">
            <span class="input-group-text" id="inputGroup-sizing-sm">Indumentaria desde $</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
          </div>
          <div class="input-group input-group-sm mb-4">
            <span class="input-group-text" id="inputGroup-sizing-sm">Bicicletas desde $</span>
            <input type="text" class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm" />
          </div>
        </div>
      </div>
    </div>



  );
}
