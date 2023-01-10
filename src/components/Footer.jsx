import React from 'react';
import {NavLink} from "react-router-dom";
import {ImFacebook2} from "react-icons/im";
import {FaTwitterSquare,FaGithubSquare} from "react-icons/fa";
import {CiLocationOn} from "react-icons/ci";
import {BsFillTelephonePlusFill} from "react-icons/bs";
import {HiMail} from "react-icons/hi";
import classes from "../css/footer.module.css";

const Footer = () => {
  return (
    <div>
   
   <div className={classes.footer}>
    <div className={classes.connectUs}>
      <span className={classes.facebook}><ImFacebook2 /></span>
      <span className={classes.twitter}><FaTwitterSquare /></span>
      <span className={classes.github}><FaGithubSquare /></span>
    </div>
    <div className={classes.navlinks}>
       <NavLink to={"/"} className={(navInfo) => (navInfo.isActive ? classes.active : "")}>Home</NavLink>
       <NavLink to={"/about"} className={(navInfo) => (navInfo.isActive ? classes.active : "")}>About</NavLink>
       <NavLink to={"/facts"} className={(navInfo) => (navInfo.isActive ? classes.active : "")}>Facts</NavLink>
       <NavLink to={"/new"} className={(navInfo) => (navInfo.isActive ? classes.active : "")}>New</NavLink>
       <NavLink to={"/popular"} className={(navInfo) => (navInfo.isActive ? classes.active : "")}>Popular Facts</NavLink>
    </div>
    {/*  onother  */}
    <div className={classes.onotherLast}>
    <h1>Onother last fact</h1>  

    </div>
    <div className={classes.contactLinks}>
        <h2 className={classes.location}><CiLocationOn />BD</h2>
        <h2 className={classes.phone} ><BsFillTelephonePlusFill /> +880 115 033 8042</h2>
        <h2 className={classes.email}><HiMail /> funfact12983@gmail.com</h2>
    </div>
   </div>
    </div>
  )
}

export default Footer
