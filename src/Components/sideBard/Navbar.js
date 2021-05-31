import React from 'react';
import * as FaIcons from 'react-icons/fa';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import * as IoIcons from 'react-icons/io';
import {useContext} from'react'
import { UserContext } from '../../Hooks/UserContext';
function Navbar() {
  const {sidebar,setsidebar} = useContext(UserContext);

  const showSidebar = () => setsidebar(!sidebar);

  return (
    <>
        <div className='navbar d-flex'>
        <div className="icon"><FaIcons.FaBars onClick={showSidebar} /></div>
            
             <div className="icon"><IoIcons.IoIosMap /></div>
             <div className="icon"><IoIcons.IoIosPaper /></div>
             <div className="icon"><IoIcons.IoMdPeople /></div>
            <div className="icon"><IoIcons.IoIosGitNetwork /></div>
             <div className="icon"><IoIcons.IoMdContact /></div>
             <div className="icon"><IoIcons.IoIosDocument /></div>

        </div>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <div className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <div className="titleBar">OLSoftware</div>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <div key={index} className={item.cName}>
                 <div className="icon">{item.icon}</div>
                  <div className="title">{item.title}</div>
                </div>
              );
            })}
          </div>
        </nav>
    </>
  );
}

export default Navbar;
