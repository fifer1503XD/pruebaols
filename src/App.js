
import './App.css';
import React,{useState} from 'react'
import HomeContainer from './Containers/HomeContainer';
import { UserContext} from './Hooks/UserContext';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from './Components/login';


function App() {
  const [sidebar, setsidebar] = useState(false);
  const [currentUser, setcurrentUser] = useState();
  const [dataUsers, setDataUsers] = useState([]);
  const [activeSession, setactiveSession] = useState();
  const [dataSearch, setDataSearch] = useState(   {
    nombres:"",
    apellidos:"",
    identificacion:"",
    rol:"",
    estado:"",
    telefono:"",
    correo:""
});
  return (
    
    
    <UserContext.Provider value={{dataUsers,setDataUsers,dataSearch,setDataSearch,sidebar,setsidebar,currentUser, setcurrentUser,activeSession, setactiveSession}}>
          <Router>
            <Switch>
            <Route exact path="/" component ={Login}/>
            <Route exact path="/app" component={HomeContainer}/>
            </Switch>
        </Router>
    </UserContext.Provider>
     
   
  );
}

export default App;
