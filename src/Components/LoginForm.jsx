import "./Login.css"
import { useForm } from "../Actions/FormActions";
const LoginForm = () => {
  const [,HandleSubmit,,,handleInputChangePost,,,,loginUser] = useForm({
        nombres:"",
        apellidos:"",
        identificacion:"",
        rol:"",
        estado:"",
        telefono:"",
        correo:"",
        password:""
     });
    
    return (  
            <form className="LoginForm" onSubmit={HandleSubmit}>
                <div className="tituloFormLogin mb-5"> Inicio de sesión</div>
            <div className="mb-2 mt-3">
                <input type="email" name="correo"className="form-control inputForm" id="exampleInputEmail1" aria-describedby="emailHelp"  onChange={ handleInputChangePost }placeholder="Usuario"/>
            </div>
            <div className="mb-4">
                
                <input type="password"  name="password" className="form-control inputForm" id="exampleInputPassword1"  onChange={ handleInputChangePost }placeholder="Password"/>
            </div>
            <button onClick={loginUser} className="btnForm btn btn-primary mt-5">Inicia sesión</button>
            
            </form>
     
    );
}


 
export default LoginForm;