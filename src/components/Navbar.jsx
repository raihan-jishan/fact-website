import React  from 'react'; 

import classes from "../css/Navbar.module.css"; // cutom module css file ...
import { NavLink} from "react-router-dom"; // React router dom >> Link component. 
const Navbar = () => {
  return (
    <>
     
    <div className={classes.Navbar}>
     <nav className={classes.Navmodules}>
        <NavLink to={'/'}  className={(navInfo) => (navInfo.isActive ? classes.active : "")}>Home</NavLink>
        <NavLink to={'/about'} className={(navInfo) => (navInfo.isActive ? classes.active : "")}>About</NavLink>
         <NavLink to={'/facts'} className={(navInfo) => (navInfo.isActive ? classes.active : "")}>Facts</NavLink>
        <NavLink to={'/new'} className={(navInfo) => (navInfo.isActive ? classes.active : "")}>New</NavLink>
        <NavLink to={'/popular'} className={(navInfo) => (navInfo.isActive ? classes.Active : "")}>Popular</NavLink>
     </nav>
    </div>
    </>
  )
}

export default Navbar
