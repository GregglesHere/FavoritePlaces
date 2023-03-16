import React, { useState } from 'react';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { FaBars} from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    const menuItem=[
        {
            path:"/favoriteplaces/home",
            name:"Home",
            icon: <AiIcons.AiFillHome />
        },
        {
            path: "/favoriteplaces/profile",
            name:"Profile",
            icon: <FaIcons.FaUserAlt /> 
        },
        {
            path:"/favoriteplaces/friends",
            name:"Friends",
            icon: <FaIcons.FaUsers />
        },
        {
            path:"/favoriteplaces/login",
            name:"Login",
            icon: <FaIcons.FaUserLock />
        },
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "200px" : "65px"}} className="sidebar">
               <div className="top_section">
                   <div style={{marginLeft: isOpen ? "5px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
