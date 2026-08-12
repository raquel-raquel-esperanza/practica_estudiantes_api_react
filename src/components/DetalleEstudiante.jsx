//import React from 'react'

import {useEffect, useState } from "react";
import { getStudentById } from "../api/estudiantes";
import { useParams } from "react-router-dom";

    
export default function DetalleEstudiante() {
    // creando estado donde se va a guardar la información del estudiante
    const [estudiante, setEstudiante] = useState({});
    // capturando el parámetro de la ruta para obtener el ID del estudiante
    const { estudianteId } = useParams();
    

    // método para obtener el detalle del estudiante de la API
    const obtenerDetalleEstudiante = async () => {
        // el estudianteId lo obtenemos de la ruta, y lo pasamos como argumento al método getStudentById
        const respuesta = await getStudentById(estudianteId);

        // actualizando el estado cona información del esrudiante encontrado
        setEstudiante(respuesta);
    }

     useEffect(() => {
        obtenerDetalleEstudiante()
    }, [])
   

  return (
   <section className="pagina">
            <section className="contenido contenido--angosto">
                <h1 className="titulo">Detalle del Estudiante</h1>
                <p className="subtitulo">Visualiza la información detallada del estudiante seleccionado.</p>
                
                    <div className="detalle-estudiante">
                        <h2 className="titulo--secundario">Nombre: {estudiante.nombre}</h2>
                         <p><strong>ID del estudiante: </strong> {estudiante.id}</p>
                        <p><strong>Edad:</strong> {estudiante.edad}</p>
                        <p><strong>Correo:</strong> {estudiante.correo}</p>
                    </div>
               
            </section>
    </section>
  )
}
