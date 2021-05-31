import { UserContext } from '../Hooks/UserContext'
import './Login.css'
import LoginForm from './LoginForm'
import Loader from './Preloader/Loader'
import React,{useContext} from 'react';
const Login = () => {
    const {currentUser} = useContext(UserContext);
    return (
        <>
        <div className="imgLogin">
            <img className="effectCircle" src="https://previews.123rf.com/images/satina/satina1410/satina141000009/32455981-paisaje-de-oto%C3%B1o.jpg" alt="" />
            <LoginForm/>
            {currentUser && <Loader/>}
            
        </div>
        </>
     );
}
 
export default Login;