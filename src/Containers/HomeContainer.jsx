import FilterUser from "../Components/FilterUser"
import UserInfo from "../Components/UserInfo"
import React,{useContext} from "react";
import Navbar from "../Components/sideBard/Navbar";
import { UserContext } from "../Hooks/UserContext";
import './HomeContainer.css'

const HomeContainer = () => {
   
    const {sidebar} = useContext(UserContext);

    return (
        <div className='col d-flex flex-wrap '>
           
            <div className={sidebar ? '   navOn col-sm-12' : ' navOff col-sm-12 '}>
            <Navbar/>
            </div>
            <div className={sidebar ? 'userInfo col-md-10 col-sm-12 white d-flex flex-wrap' : 'userInfo col-md-11 col-sm-12 white d-flex flex-wrap'}>
            <div className="head">
                
            </div>
            <UserInfo/>
           
            <FilterUser/>
            </div>
        
        </div>
      );
}
 
export default HomeContainer;