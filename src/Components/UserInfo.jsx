import React,{useEffect, useContext} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash} from '@fortawesome/free-solid-svg-icons'
import { UserContext } from "../Hooks/UserContext";
import './UserInfo.css'
import ModalNewUser from "../Modals/ModalNewUser";
import ModalEditUser from "../Modals/ModalEditUser";
import {projectFirestore as db} from '../firebase'
const UserInfo = () => {
  const {dataUsers,setDataUsers} = useContext(UserContext);
  const {dataSearch} = useContext(UserContext);
  

  const deleteUser = async (id) => {
    if (window.confirm("are you sure you want to delete this link?")) {
      await db.collection("users").doc(id).delete();
    }
  };
  const getUsers = async () => {
    db.collection("users").onSnapshot((querySnapshot)=>{
      const docs = []
      querySnapshot.forEach(doc=>{
        docs.push({ ...doc.data(), id: doc.id });
      });
      setDataUsers(docs);
    
    })
  }
  useEffect(() => {
   getUsers()
  }, [dataUsers]);
 
  
 
    return ( 
      <>
      <div className="Head">
      <span>Usuarios existentes</span> 
      </div>
      <div className="titleBoard">
      <span>Usuarios existentes</span> 
      <ModalNewUser/>
    </div>
        <table className="table tableUser flex-wrap">
  <thead>
     
    <tr>
      <th scope="col">Nombres</th>
      <th scope="col">Apellidos</th>
      <th scope="col">Identificacion</th>
      <th scope="col">Rol asociado</th>
      <th scope="col">Estado</th>
      <th scope="col">Telefono</th>
      <th scope="col">Correo</th>
      <th scope="col"></th>
      
    </tr>
  </thead>
  <tbody>
  {dataUsers.filter ? (dataUsers.filter((users)=>users.nombres.toLowerCase().includes(dataSearch.nombres.toLowerCase())
  && users.apellidos.toLowerCase().includes(dataSearch.apellidos.toLowerCase())
  && users.rol.toLowerCase().includes(dataSearch.rol.toLowerCase())
  && users.estado.toLowerCase().includes(dataSearch.estado.toLowerCase())
  && users.correo.toLowerCase().includes(dataSearch.correo.toLowerCase())
  && users.telefono.includes(dataSearch.telefono)
  && users.identificacion.includes(dataSearch.identificacion))
  .map((user)=>{
      const {nombres,apellidos,identificacion,rol,estado,telefono,correo}=user
      return(<tr key={identificacion}>
      <td>{nombres}</td>
      <td>{apellidos}</td>
      <td>{identificacion}</td>
      <td>{rol}</td>
      <td>{estado}</td>
      <td>{telefono}</td>
      <td>{correo}</td>
      <td>
          <div>
            <ModalEditUser userId={user.id}/>
          <FontAwesomeIcon onClick={()=>{deleteUser(user.id)}} icon={faTrash}/>
          </div>
      </td>
      </tr>)
    })) : <div>Loading....</div> }
  </tbody>
</table>
</>
     );
}
 
export default UserInfo;