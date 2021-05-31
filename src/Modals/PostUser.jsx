import React, {useState, useContext}from 'react';
import { useForm } from '../Actions/FormActions';
import { UserContext } from '../Hooks/UserContext';
const PostUser = (props) => {
    const {currentUser} = useContext(UserContext);
    const [,HandleSubmit,,,handleInputChangePost,{nombres,apellidos,identificacion,rol,estado,telefono,correo,password},PostNewUser,EditUser] = useForm({
        nombres:"",
        apellidos:"",
        identificacion:"",
        rol:"",
        estado:"",
        telefono:"",
        correo:"",
        password:""
     });
    
     const{handleClose, userId}=props
    const [show] = useState(true);
    return ( 
        <div>
        {show ? <form className="formPostUser" onSubmit={HandleSubmit}>
       
          
            <div className="inputForm2">
                <label htmlFor="Nombres" className="form-label">Nombres</label>
                <input name="nombres" type="text" className="form-control"  value={ nombres } id="Nombres"  onChange={ handleInputChangePost }/>
            </div>
            <div className="inputForm2">
                <label htmlFor="Apellidos" className="form-label">Apellidos</label>
                <input name="apellidos" type="text" className="form-control" value={  apellidos }  onChange={ handleInputChangePost }/>
            </div>
            <div className="inputForm2">
                <label htmlFor="Identificacion" className="form-label">Identificacion</label>
                <input name="identificacion" type="text" className="form-control" value={  identificacion }id="identificacion"  onChange={ handleInputChangePost }/>
            </div>
            <div className="inputForm2">
                <label htmlFor="Rol" className="form-label">Rol</label>
                <input name="rol" type="text" className="form-control" id="Rol" value={  rol }  onChange={ handleInputChangePost}/>
            </div>
            <div className="inputForm2">
                <label htmlFor="Estado" className="form-label">Estado</label>
                <input name="estado" type="text" className="form-control" id="Estado" value={ estado } onChange={ handleInputChangePost }/>
            </div>
            <div className="inputForm2">
                <label htmlFor="Telefono" className="form-label">Telefono</label>
                <input name="telefono" type="text" className="form-control" id="Telefono"value={ telefono}onChange={ handleInputChangePost }/>
            </div>
            <div className=" inputForm2 mb-3">
                <label htmlFor="Email" className="form-label">Email</label>
                <input name="correo" type="Email" className="form-control" id="Email" value={ correo}onChange={ handleInputChangePost }/>
            </div>
            <div className=" inputForm2 mb-3">
                <label htmlFor="password" className="form-label">Contraseña</label>
                <input name="password" type="password" className="form-control" id="password" value={ password}onChange={ handleInputChangePost }/>
            </div>
            <div className="btnNewUser">
            <button onClick ={currentUser ? ()=> EditUser(userId)  :()=>PostNewUser()} className="btn btn-success btnAceptar">Aceptar</button>
            <button onClick ={()=>handleClose()} className="btn btn-success btnAceptar"> Cerrar </button>
            </div>
            
        </form> 
        : 'Su lista ha sido agregada con exito!'}
</div>
        
     );
}
 
export default PostUser;