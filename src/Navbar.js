import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { FaBars } from "react-icons/fa";


export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-danger">
      <div className="container-fluid">
        <a className="navbar-brand text-white" href="/home">Pedal Partner</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="restOfOptions">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link text-white active" aria-current="page" href="/tienda">Encuentra tu tienda</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Comunidad
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/noticias">Noticias</a></li>
                <li><a className="dropdown-item" href="/eventos">Eventos</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="/contacto">Contacto</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link text-white dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              <FaBars class="fa-2x"/>
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item">Usuario</a></li>
                <li><a className="dropdown-item">Mi Perfil</a></li>
                <li><a className="dropdown-item" href="/ayuda">Ayuda</a></li>
                <hr className="dropdown-divider" />
                <li><a className="dropdown-item">Salir</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}