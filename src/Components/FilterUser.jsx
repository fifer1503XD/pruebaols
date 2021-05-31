import "./FilterUser.css"
import { useForm } from "../Actions/FormActions"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faIdBadge } from '@fortawesome/free-solid-svg-icons'

const FilterUser = () => {
    const [handleInputChange, HandleSubmit, { nombres, apellidos, identificacion, rol, estado, telefono, correo }, handleReset] = useForm({
        nombres: "",
        apellidos: "",
        identificacion: "",
        rol: "",
        estado: "",
        telefono: "",
        correo: ""
    });


    return (
        <div className="filter">
            <form className="formFilter" onSubmit={HandleSubmit}>
                <div className={"tituloFiltro"}>
                    <FontAwesomeIcon className="iconFilter" icon={faIdBadge} />
                   Filtrar busqueda
            </div>
                <div className="mb-3">
                    <label htmlFor="Nombres" className="form-label">Nombres</label>
                    <input name="nombres" type="text" className="form-control" value={nombres} id="Nombres" onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Apellidos" className="form-label">Apellidos</label>
                    <input name="apellidos" type="text" className="form-control" value={apellidos} id="Apellidos" onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Identificacion" className="form-label">Identificacion</label>
                    <input name="identificacion" type="text" className="form-control" value={identificacion} id="identificacion" onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Rol" className="form-label">Rol</label>
                    <input name="rol" type="text" className="form-control" id="Rol" value={rol} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Estado" className="form-label">Estado</label>
                    <input name="estado" type="text" className="form-control" id="Estado" value={estado} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Telefono" className="form-label">Telefono</label>
                    <input name="telefono" type="text" className="form-control" id="Telefono" value={telefono} onChange={handleInputChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="Email" className="form-label">Email</label>
                    <input name="correo" type="Email" className="form-control" id="Email" value={correo} onChange={handleInputChange} />
                </div>
                <button onClick={handleReset} className="btn btn-success">Limpiar Filtro</button>
            </form>
        </div>

    );
}

export default FilterUser;