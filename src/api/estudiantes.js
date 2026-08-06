//** en este js vamos a consumir la api de estudiantes express (la que creamos en  clases) */

/**creando el método para obtener estudiantes */
export const obtenerEstudiantes = async () => {

    //** url/enpoint de tu API, si no le especificamos la petición HTTP el piensa que es un GET */
   //**"http://expressapiestudiantes-production.up.railway.app/api/estudiantes */
    const respuesta = await fetch("http://localhost:3000/api/estudiantes");
    //** la respuesta la especificamos .json */
    const dataEstudiantes = await respuesta.json();
    console.log(dataEstudiantes);
    return dataEstudiantes;
};
