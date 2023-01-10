import React from 'react';
import classes from "../../css/Page.module.css";
import { cookiefethData } from '../../DATA/homeData';
const Cookies = () => {
  return (
    <div className={classes.container}>
      <div className={classes.rowTitle}>
        <h2><span className={classes.google}> Cookie </span> related facts ...  </h2>  
        <img src="https://gforcewebdesign.co.uk/wp-content/uploads/2018/04/p048hlnq.png" alt='404 error!' width={20}  />
      </div>
      <div className={classes.proveInfo}> 
      <span>You also found all prove in clicking side icons...</span>  
      </div>

      {/*  row question */}
      <div className={classes.rowQuestion}>
        <h3>Did You Know ? </h3>
      </div>
      {/*  row row question */}
      {cookiefethData.map((data) => {
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

export default Cookies;

