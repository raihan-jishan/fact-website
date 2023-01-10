import React from 'react';
import classes from "../../css/button.module.css";
const Btn = ({children}) => {
  return (
    <div>
       <button className={classes.primeBtn}>{children} </button>
    </div>
  )
}

export default Btn
