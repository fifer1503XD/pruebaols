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
            <div className={sidebar ? 'userInfo col-md-8 col-sm-12 white' : 'userInfo col-md-9 col-sm-12 white'}>
            <UserInfo/>
            </div>
            <div className="filterUser col-md-2 col-sm-12 white">
            <FilterUser/>
            </div>
        
        </div>
      );
}
 
export default HomeContainer;