import React from 'react';
import classes from "../../css/Page.module.css";
import { HackingfactFetchdata } from '../../DATA/homeData';
const Hacking = () => {
  return (
    <div className={classes.container}>
      <div className={classes.rowTitle}>
        <h2><span className={classes.google}> Hacking </span> related facts ...  </h2>  
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnrtIsdr2keOjZMT6lysmDmThsAKCInZivrw&usqp=CAU" alt='404 error!' width={17} style={{borderRadius:"1rem",margin:"10px"}} />
      </div>
      <div className={classes.proveInfo}> 
      <span>You also found all prove in clicking side icons...</span>  
      </div>

      {/*  row question */}
      <div className={classes.rowQuestion}>
        <h3>Did You Know ? </h3>
      </div>
      {/*  row row question */}
      {HackingfactFetchdata.map((data) => {
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

export default Hacking;

