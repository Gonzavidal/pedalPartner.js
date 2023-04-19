import { Link, useMatch, useResolvedPath } from "react-router-dom"



export default function Navbar() {
  return (
    <nav className="nav bg-danger">
      <Link to="/" className="site-title">
        Pedal Partner
      </Link>
      <ul>
        <CustomLink  to="/tienda">Encuentra tu tienda</CustomLink>
        <CustomLink  to="/comunidad">Comunidad</CustomLink>
        <CustomLink  to="/contacto">Contacto</CustomLink>
        <div class="dropdown">
          <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
            Action
          </button>
          <ul class="dropdown-menu dropdown-menu-lg-end">
            <li><a class="dropdown-item" href="#">Usuario</a></li>
            <li><a class="dropdown-item" href="#">Mi Perfil</a></li>
            <li><a class="dropdown-item" href="#">Ayuda</a></li>
            <hr class="dropdown-divider" />
            <li><a class="dropdown-item" href="#">Salir</a></li>
          </ul>
        </div>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
