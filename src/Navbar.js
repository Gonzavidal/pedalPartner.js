import { Link, useMatch, useResolvedPath } from "react-router-dom"


export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg bg-danger">
      <div class="container-fluid">
        <a class="navbar-brand" href="/home">Pedal Partner</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/tienda">Encuentra tu tienda</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Comunidad
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="/noticias">Noticias</a></li>
                <li><a class="dropdown-item" href="/eventos">Eventos</a></li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/contacto">Contacto</a>
            </li>
            <li class="nav-item dropdown dropdown-menu-lg-end">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Barra
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item">Usuario</a></li>
                <li><a class="dropdown-item">Mi Perfil</a></li>
                <li><a class="dropdown-item" href="/ayuda">Ayuda</a></li>
                <hr class="dropdown-divider" />
                <li><a class="dropdown-item">Salir</a></li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}