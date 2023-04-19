import Logo from '/workspace/Pedal_Partner/src/assets/logo.jpeg';


export default function Home() {
  return (
    <div className="text-center mb-4 text-black">
      <h1 className="display-3">Bienvenido a Pedal Partner</h1>
      <br></br>
      <hr className="hr" />
      <div className="row">
        <div className="col">
          <img src={Logo} alt="MVDP" />
        </div>
      </div>
    </div>
  );
};