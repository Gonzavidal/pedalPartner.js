import Navbar from "./Navbar"
import Tienda from "./pages/Tienda"
import Home from "./pages/Home"
import Comunidad from "./pages/Comunidad"
import Contacto from "./pages/Contacto"
import { Route, Routes } from "react-router-dom"


function App() {
  return (
    <>
      <Navbar />
      <div className="text-center container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tienda" element={<Tienda />} />
          <Route path="/comunidad" element={<Comunidad />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
      </div>
    </>
  )
}

export default App
