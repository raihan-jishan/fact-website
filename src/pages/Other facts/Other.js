import React from 'react'
import {BsArrowDownLeftSquare} from "react-icons/bs";
import { GrMultiple } from "react-icons/gr";
import classes from "../../css/facts.module.css";
import PageTitle from "../../components/PageTitle";
const Other = () => {
  return (
    <div className={classes.container}>
       <PageTitle>
        Fact <GrMultiple className="wellcomeIcon" /> Country 
      </PageTitle>
      {/* info */}
      <div className={classes.infoActive}>
        <h3>
          You gonna interest items ?, click there to see more infos ....{" "}
          <BsArrowDownLeftSquare className="arroySignal" />
        </h3>
      </div>
    </div>
  )
}

export default Other
