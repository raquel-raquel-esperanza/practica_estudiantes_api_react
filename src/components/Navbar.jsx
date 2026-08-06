import { BrowserRouter, Routes, Route, Link } from "react-router"
import ListaEstudiantes from "./ListaEstudiantes"
import RegistroEstudiante from "./RegistroEstudiante"

export default function Navbar() {
    return (
        <BrowserRouter>
            <header className="navbar">
                <div className="navbar__brand">
                    <span className="navbar__logo" aria-hidden="true">◆</span>
                    <span className="navbar__title">Gestión de Estudiantes</span>
                </div>

                <nav className="navbar__links">
                    {/** ocupamos Link para redireccionar a las rutas */}
                    <Link to="/" className="navbar__link">Dashboard</Link>
                    <Link to="/estudiante/registro" className="navbar__link">Alumnos</Link>
                </nav>

                <div className="navbar__actions">
                    <button className="navbar__icon-btn" aria-label="Configuración">⚙️</button>
                    <button className="navbar__icon-btn" aria-label="Notificaciones">🔔</button>
                    <div className="navbar__avatar" aria-label="Perfil de usuario">👤</div>
                </div>
            </header>

            <Routes>
                <Route path="/" element={<ListaEstudiantes />} />
                <Route path="/estudiante/registro" element={<RegistroEstudiante />} />
            </Routes>
        </BrowserRouter>
    )
}