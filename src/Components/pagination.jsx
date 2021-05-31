import { useEffect, useState, useContext } from "react";
import { UserContext } from "../Hooks/UserContext";
const Pagination = () => {
const {setcant} = useContext(UserContext);
const [pageActive, setpageActive] = useState(1);
   
    const changePageActive = (newPageActive) =>{
        if (newPageActive===0){
            setpageActive(1)
            setcant(1)
        }
        else{
            setpageActive(newPageActive)
            setcant(newPageActive)      
        }
       
    } 
    useEffect(() => {
        console.log('ejecuto eff')
    }, [pageActive]);
    return (
        <nav aria-label="...">
            <ul class="pagination pagination-lg">
                <li onClick={()=>changePageActive(pageActive-1)} class="page-item"><a class="page-link" >..</a></li>
                <li class="page-item active" aria-current="page">
                    <span class="page-link">{pageActive}</span>
                </li>
                <li onClick={()=>changePageActive(pageActive+1)} class="page-item"><a class="page-link" >{pageActive+1}</a></li>
                <li onClick={()=>changePageActive(pageActive+2)}class="page-item"><a class="page-link" value={pageActive+2}>{pageActive+2}</a></li>
            </ul>
        </nav>
    );
}

export default Pagination;