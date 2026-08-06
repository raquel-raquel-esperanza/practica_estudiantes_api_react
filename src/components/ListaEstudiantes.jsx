import { Link } from "react-router";
export default function ListaEstudiantes() {
    return (
        <section className="pagina">
            <section className="contenido">
                <h1 className="titulo">Listado de Alumnos</h1>
                <p className="subtitulo">Visualiza y administra la base de datos de estudiantes matriculados.</p>
        
                <div className="tarjeta">
                    <div className="barra-superior">
                        <div className="buscador">
                            <span className="buscador__icono" aria-hidden="true">🔍</span>
                            <input type="text" placeholder="Buscar por nombre, correo o ID..." className="buscador__input" />
                        </div>
                        {/**utilizando Link de react router para redireccionar al formulario de registrose*/}
                       
                        <Link to="/estudiante/registro" className="boton boton--primario">
                            <span aria-hidden="true">+</span> Agregar Estudiante
                        </Link>
                    </div>
            
                    <table className="tabla">
                        <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Edad</th>
                            <th>Correo</th>
                            <th className="th-acciones">Acciones</th>
                        </tr>
                        </thead>
                        <tbody>
                                <tr>
                                    <td>estudiante</td>
                                    <td>edad</td>
                                    <td className="celda-correo">correo</td>
                                    <td className="td-acciones">
                                        <a href="#" className="enlace-detalle">Ver detalle ›</a>
                                    </td>
                                </tr>
                        </tbody>
                    </table>
            
                    <div className="pie-tabla">
                        <span className="pie-tabla__info">Mostrando x de 150 estudiantes</span>
                        <div className="paginacion">
                            <button className="paginacion__boton" aria-label="Página anterior">‹</button>
                            <button className="paginacion__boton" aria-label="Página siguiente">›</button>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}
