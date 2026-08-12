import { getStudents } from "../api/estudiantes";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

export default function ListaEstudiantes() {
    // creamos un  estado para la lista de estudiantes que viene de la API
    const [listaEstudiantes, setlistaEstudiantes] = useState([]);


    // método para obtener los estudiantes de la API y actualizar el estado 
    const obtenerDetalleEstudiantes = async () => {
        
        const respuestaData = await getStudents();
        //actualizamos el estado con la data de los estudiantes obtenida de la API
        setlistaEstudiantes(respuestaData);
        //console.log(respuestaData);
    }

    useEffect(() => {
        obtenerDetalleEstudiantes()
    }, [])  //dependencias vacías para que se ejecute solo una vez al montar el componente
        
   
   
   console.log(listaEstudiantes);
   const actualizarCorreo = async (req, res) => {
    const estudiante = await prisma.estudiante.update({
        where: { id: Number(req.params.id) },
        data: { correo: req.body.correo },
        select: { correo: true } 
    })
    res.json(estudiante)
}
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
                            {
                                //ITERANDO EL ESTADO DEL ARREGLO ESTUDIANTES PARA MOSTRARLO EN LA TABLA
                               listaEstudiantes.map((estudiante, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{estudiante.nombre}</td>
                                            <td>{estudiante.edad}</td>
                                            <td className="celda-correo">{estudiante.correo}</td>
                                            <td className="td-acciones">
                                                <Link to={`/estudiantes/detalle/${estudiante.id}`}
                                                 className="enlace-detalle">Ver detalle ›</Link>
                                            <td className="td-acciones">
                                                 <Link to={`/estudiantes/detalle/${estudiante.id}`} className="enlace-detalle">
                                                     Ver detalle ›
                                                     </Link>
                                                    <Link to={`/estudiante/editar/${estudiante.id}`} className="enlace-detalle">
                                                     Editar correo ›
                                                </Link>
                                                 </td>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
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
