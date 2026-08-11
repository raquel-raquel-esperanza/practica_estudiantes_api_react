//** en este js vamos a consumir la api de estudiantes express (la que creamos en  clases) */
import axios from "axios";
/**creando el método para obtener estudiantes */
export const obtenerEstudiantes = async () => {

    //** url/enpoint de tu API, si no le especificamos la petición HTTP el piensa que es un GET */
   //**"http://expressapiestudiantes-production.up.railway.app/api/estudiantes */
    const respuesta = await fetch("http://localhost:3000/estudiantes");
    //** la respuesta la especificamos .json */
    const dataEstudiantes = await respuesta.json();
    console.log(dataEstudiantes);
    return dataEstudiantes;
}

// metodo para obtener estudiantes CON AXIOS

export const getStudents = async () => {
    const respuesta = await axios.get("https://expressapiestudiantes-production.up.railway.app/api/estudiantes");
    console.log(respuesta.data);
    return respuesta.data;
}

//método para obtener un estudiante por su ID
export const getStudentById = async (studentID) => {
    const respuesta = await axios.get(`https://expressapiestudiantes-production.up.railway.app/api/estudiantes/${studentID}`);
    return respuesta.data;
}

// método para registrar un estudiante
export const registerStudent = async (studentData) => {
    const respuesta = await axios.post("https://expressapiestudiantes-production.up.railway.app/api/estudiantes", studentData);
    return respuesta.data;
}