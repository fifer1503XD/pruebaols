import {useState,useContext} from 'react';
import { useHistory } from "react-router-dom";
import { UserContext } from "../Hooks/UserContext";
import {projectFirestore as db} from '../firebase'
export const useForm = (  ) => {
    let history = useHistory();
    const {currentUser, setcurrentUser} = useContext(UserContext);
    const [newUser, setnewUser] = useState(currentUser ? currentUser: {
        nombres:"",
        apellidos:"",
        identificacion:"",
        rol:"",
        estado:"",
        telefono:"",
        correo:"",
        password:""
    });
    
    const {dataSearch,setDataSearch} = useContext(UserContext);
  
    
    const HandleSubmit  = (e) => {
        e.preventDefault()
    }

    const HandleReset = () =>{
        setDataSearch({
            nombres:"",
            apellidos:"",
            identificacion:"",
            rol:"",
            estado:"",
            telefono:"",
            correo:"",
            password:""
        })
    }
    const handleInputChange = ({ target }) => {
        setDataSearch({
            ...dataSearch, 
            [ target.name ]: target.value
        });
    }

    const handleInputChangePost = ({ target }) => {
        setnewUser({
            ...newUser, 
            [ target.name ]: target.value
        });
        console.log(newUser)
    }
    

    const PostNewUser = async (handleCLose)=>{
        await db.collection("users").doc().set(newUser); 
        handleCLose()     
    } 

    const EditUser= async(id,handleCLose)=>{
        console.log(id)
        await db.collection("users").doc(id).update(newUser);
        setcurrentUser("");
        handleCLose()
     }
    
     const loginUser = async ()=>{
         const docs =[]
        await db.collection("users").where("correo", "==", newUser.correo)
        .get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                docs.push({ ...doc.data(), id: doc.id });
                console.log(doc.data())
            });
        })
        .catch((error) => {
            console.log("Error getting documents: ", error);
        });
        if( newUser.correo && docs[0]){
            if (newUser.correo === docs[0].correo && newUser.password ===docs[0].password){
                setcurrentUser(docs)
                setTimeout(() => { (history.push("/app"))}, 2000); 
               
            }
            else{
                ( alert('credenciales incorrectas'))
                setcurrentUser('')
            }
         
        } 
        else{
            ( alert('credenciales incorrectas'))
            setcurrentUser('')
        }
  
     }
    return [handleInputChange,HandleSubmit,dataSearch,HandleReset,handleInputChangePost,newUser,PostNewUser,EditUser,loginUser];
}
