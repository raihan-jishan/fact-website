import React from 'react';
import classes from "../../css/Page.module.css";
import { Fetchfacebookdata } from '../../DATA/homeData';
const Facebook = () => {
  return (
    <div className={classes.container}>
      <div className={classes.rowTitle}>
        <h2><span className={classes.google}><span style={{color:"#408fe9;"}}>F</span>acebook</span> related facts ...  </h2>  
        <img src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png" alt='404 error!' width={17}  />
      </div>
      <div className={classes.proveInfo}> 
      <span>You also found all prove in clicking side icons...</span>  
      </div>

      {/*  row question */}
      <div className={classes.rowQuestion}>
        <h3>Did You Know ? </h3>
      </div>
      {/*  row row question */}
      {Fetchfacebookdata.map((data) => {
        return(
          <>
          
      <div className={classes.rowDatas}>
      <h3>{data.desc} <a href={data.visitLink}><span className={classes.descIcon}>{data.icon}</span></a></h3> 
      
      
      </div>
       
    
      
      </>
        )
      })}
  
    </div>
  )
}

export default Facebook;
