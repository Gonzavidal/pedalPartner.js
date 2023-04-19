import MVDP from '/workspace/Pedal_Partner/src/assets/MVDP.jpg';


export default function Noticias() {
  return (
    <div className="text-center mb-4 text-black">
      <h1 className="display-3">Noticias</h1>
      <br></br>
      <hr className="hr" />
      <div className="row">
        <div className="col">
          <img src={MVDP} alt="MVDP" height="323" width="485" />

        </div>
        <div className="col">
          <p className="text-secondary text-end">Miercoles 12 de abril del 2023</p>
          <h2 className="display-5 mb-5">El ciclista neerlandés Mathieu van der Poel conquista su primera París-Roubaix</h2>
          <p className="text-justify">La 120ª edición de la carrera de la francesa París-Roubaix de un solo día se celebró este domingo.
            El neerlandés Mathieu van der Poel conquistó su primera París-Roubaix fascinando con su ataque a 15 km del final.
            Un total de 175 ciclistas pedalearon 257 kilómetros.
            Los accidentes dejaron fuera de la carrera a figuras como el ex campeón mundial de carreras eslovaco Peter Sagan mientras se preparaba para retirarse.
            El belga Wout van Aert sufrió una desgracia en su duelo con el holandés Mathieu Van der Poel debido al pichazo en el neumático de su bicicleta, por lo tanto se quedó atrás y dejó solo a Van der Poel.
            El ciclista neerlandés se proclamó campeón con un tiempo de 5 horas, 28 minutos y 41 segundos.
          </p>
        </div>
      </div>
    </div>
  );
}
