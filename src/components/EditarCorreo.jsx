import { useForm } from "react-hook-form"
import { useParams, useNavigate } from "react-router-dom"
import { updateEmail } from "../api/estudiantes"  
import Swal from "sweetalert2"

export default function EditarCorreo() {
    const { id } = useParams()
    const navigate = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm();

    const actualizarCorreo = async (datos) => {
        try {
            const respuesta = await updateEmail(id, datos.correo)   // 👈 cambia también aquí: dos argumentos, no un objeto
            console.log(respuesta)

            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Correo actualizado correctamente",
                showConfirmButton: false,
                timer: 1500
            });

            // use location.replace to navigate without assigning to window.location.href
            // and also call navigate for React Router navigation
            window.location.replace("/")
            navigate("/")
        } catch (error) {
            console.error(error)
            Swal.fire({
                icon: "error",
                title: "Error al actualizar",
                text: "No se pudo actualizar el correo del estudiante"
            });
        }
    }
    
    return (
        <section className="pagina">
            <section className="contenido contenido--angosto">
                <h1 className="titulo">Editar Correo del Estudiante</h1>

                <form className="tarjeta-formulario" onSubmit={handleSubmit(actualizarCorreo)}>
                    <div className="campo">
                        <label htmlFor="correo" className="etiqueta">
                            Nuevo Correo Electrónico <span className="requerido">*</span>
                        </label>
                        <input
                            id="correo"
                            type="email"
                            className="entrada"
                            placeholder="nuevo@ejemplo.com"
                            {...register("correo", { required: true })}
                        />
                        {errors.correo && <span>El campo es obligatorio</span>}
                    </div>

                    <div className="acciones">
                        <button type="submit" className="boton boton--primario">
                            <span aria-hidden="true">💾</span> Actualizar Correo
                        </button>
                    </div>
                </form>
            </section>
        </section>
    )
}