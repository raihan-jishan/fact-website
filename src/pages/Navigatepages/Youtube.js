import React from 'react';
import classes from "../../css/Page.module.css";
import { FactsdataYoutube } from '../../DATA/homeData';
const Youtube = () => {
  return (
    <div className={classes.container}>
      <div className={classes.rowTitle}>
        <h2><span className={classes.youtube}>Youtube</span> related facts ...  </h2>  
      <img src="https://th.bing.com/th/id/OIP.tQ1duNOVUGpxJ1k4DN-RfgHaEK?pid=ImgDet&rs=1" alt="494 there was response error!" />
      </div>
      <div className={classes.proveInfo}> 
      <span>You also found all prove in clicking side icons...</span>  
      </div>

      {/*  row question */}
      <div className={classes.rowQuestion}>
        <h3>Did You Know ? </h3>
      </div>
      {/*  row row question */}
      {FactsdataYoutube.map((data) => {
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

export default Youtube;
