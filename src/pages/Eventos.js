import Mapa from '/workspace/Pedal_Partner/src/assets/mapa.jpg';


export default function Eventos() {
    return (
        <div className="text-center mb-4 text-black">
            <h1 className="display-3">Eventos</h1>
            <br></br>
            <hr className="hr" />
            <div className="row">
                <div className="col">
                    <img src={Mapa} alt="MVDP" height="323" width="485" />

                </div>
                <div className="col">
                    <p className="text-secondary text-end">Miercoles 12 de abril del 2023</p>
                    <h2 className="display-5 mb-5">Ciclorecreovías y «Calles Abiertas» en la Región Metropolitana</h2>
                    <p className="text-justify">Todos los domingo del año entre las 09:00 y 14:00, varias calles y avenidas de la Región Metropolitana quedan disponibles a la recreación peatonal y de ciclos, y son cerradas al tránsito de vehículos motorizados.
                        Las iniciativas aplicadas a través de las «CicloRecreovías» y «Calles Abiertas Familiares» consideran más de 40 km de vías metropolitanas que en ese tramo horario y día, fomentan fomentan el uso de espacios públicos integrados y accesibles para todos y todas.

                        Por tanto recomendamos a los conductores de los vehículos motorizados estar atentos a los tramos intervenidos, para optar a un alternativa de tránsito.
                        La CicloRecreoVía está presente en Providencia, Las Condes, Santiago centro, Vitacura, Ñuñoa y Renca. También en el Parque Metropolitano, sábados y domingos.
                    </p>
                </div>
            </div>
        </div>
    );
}
