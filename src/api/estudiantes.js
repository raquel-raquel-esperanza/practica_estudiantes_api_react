//** en este js vamos a consumir la api de estudiantes express (la que creamos en  clases) */
import axios from "axios";
/**creando el método para obtener estudiantes */
export const obtenerEstudiantes = async () => {

    //** url/enpoint de tu API, si no le especificamos la petición HTTP el piensa que es un GET */
   //**"http://expressapiestudiantes-production.up.railway.app/api/estudiantes */
    const respuesta = await fetch("http://localhost:3000/estudiantes");
    //** la respuesta la especificamos .json */
    const dataEstudiantes = await respuesta.json();
    //console.log(dataEstudiantes);
    return dataEstudiantes;
}

// metodo para obtener estudiantes CON AXIOS

export const getStudents = async () => {
    const respuesta = await axios.get("https://expressapiestudiantes-production.up.railway.app/api/estudiantes");
    //console.log(respuesta.data);
    return respuesta.data;
}

//método para obtener un estudiante por su ID
export const getStudentById = async (estudianteId) => {
    const respuesta = await axios.get(`https://expressapiestudiantes-production.up.railway.app/api/estudiantes/${estudianteId}`);
    return respuesta.data;
}

// método para registrar un estudiante
// el "studentData" es un objeto que contiene los datos del estudiante a registrar (nombre, correo, password)
export const saveStudent = async (studentData) => {
    const respuesta = await axios.post("https://expressapiestudiantes-production.up.railway.app/api/estudiantes", studentData);
    return respuesta.data;
}

// TAREA PATCH MODIFICAR CORREO DE UN ESTUDIANTE, RECIBIENDO EL ID DEL ESTUDIANTE Y EL NUEVO CORREO
export const updateEmail = async (studentID, correo) => {
    const respuesta = await axios.patch(
        `https://expressapiestudiantes-production.up.railway.app/api/estudiantes/${studentID}`,
        { nuevo_correo: correo }   // 👈 cambia el nombre de la propiedad
    )
    return respuesta.data
}