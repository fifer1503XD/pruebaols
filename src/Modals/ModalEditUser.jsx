import React, { useState, useContext } from 'react';
import {Modal} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit } from '@fortawesome/free-solid-svg-icons'
import PostUser from './PostUser';
import {projectFirestore as db} from '../firebase'
import "./Modals.css"
import { UserContext } from '../Hooks/UserContext';
const ModalEditUser = (props) => {
 

    const {userId} =props
    const [show, setShow] = useState(false);
    const handleClose = () => {setShow(false)}
    const { setcurrentUser} = useContext(UserContext);
    const editUser = async (id) => {
      const doc = await db.collection("users").doc(id).get();
      setcurrentUser({ ...doc.data() });
      setShow(true)
    }
    return ( 
        <>
        <FontAwesomeIcon  onClick={()=>{editUser(userId)}}icon={faEdit}/> 
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Editar usuario</Modal.Title>
          </Modal.Header>
          <Modal.Body><PostUser userId={userId} handleClose={handleClose} /></Modal.Body>
        </Modal>
      </>
     );
}
 
export default ModalEditUser;