import React from 'react';
import classes from "../../css/Page.module.css";
import { ServerfactData } from '../../DATA/homeData';
const Server = () => {
  return (
    <div className={classes.container}>
      <div className={classes.rowTitle}>
        <h2><span className={classes.google}>Server  related facts ...  </span></h2>  
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXIfF4nI-7kotALdFMZCiKv_thrq-V_ePiVy94kmBOZ4PDmqUNMGMkipuu3NAJmu-ryag&usqp=CAU" alt='404 error!' width={17}  style={{margin:"10px",borderRadius:"1rem"}}/>
      </div>
      <div className={classes.proveInfo}> 
      <span>You also found all prove in clicking side icons...</span>  
      </div>

      {/*  row question */}
      <div className={classes.rowQuestion}>
        <h3>Did You Know ? </h3>
      </div>
      {/*  row row question */}
      {ServerfactData.map((data) => {
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

export default Server;
