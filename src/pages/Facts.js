import React from "react";
import PageTitle from "../components/PageTitle";
import { GrMultiple } from "react-icons/gr";
import { BiCookie } from "react-icons/bi";
import { AiOutlineCloudServer } from "react-icons/ai";
import { BsArrowDownLeftSquare, BsYoutube, BsFacebook } from "react-icons/bs";
import Other from "./Other facts/Other";
import { FcGoogle } from "react-icons/fc";
import classes from "../css/facts.module.css";
import { Link } from "react-router-dom";
const Facts = () => {
  return (
    <div className={classes.container} id="facts">
      <PageTitle>
        Facts <GrMultiple className="wellcomeIcon" /> Tech
      </PageTitle>
      <div className={classes.infoActive}>
        <h3>
          You gonna interest items ?, click there to see more infos ....{" "}
          <BsArrowDownLeftSquare className="arroySignal" />
        </h3>
      </div>

      <div className={classes.containerBox}>
        {/* Youtube */}
        <div className={classes.row}>
          <Link to={"/youtube-related-facts9237-438"}>
          <h2>
            <BsYoutube className={classes.icons} /> Youtube
          </h2>
          </Link>
        </div>
        {/*  Google */}
        <div className={classes.row}>
          <Link to={"/google-related-facts037332"}>
          <h2>
            <FcGoogle className={classes.icons} /> Google
          </h2>
          </Link>
        </div>
        {/*  facebook */}
        <div className={classes.row}>
          <Link to={"/facebook-related-facts380328203"}>
          <h2>
            <BsFacebook className={classes.icons} />
            facebook
          </h2>
          </Link>
        </div>
        {/*  cookie */}
        <div className={classes.row}>
          <Link to={"/your-cookies-related-facts574523"}>
          <h2>
            <BiCookie className={classes.icon} />
            Your co0kie
          </h2>
          </Link>
        </div>
        {/*  hacking */}
        <div className={classes.row}>
          <Link to={"/hacking-related-facts94u5-944523"}>
          <h2>
            Hacking{" "}
            <img
              src="https://cdn-icons-png.flaticon.com/128/5677/5677012.png"
              alt="500 there was server side error!"
              width={25}
              height={28}
            />
          </h2>
          </Link>
        </div>
        {/*  server  */}
        <div className={classes.row}>
          <Link to={"/server-related-facts94u5-944523"}> 
          <h2>
            <AiOutlineCloudServer className={classes.icon} />
            Server
          </h2>
          </Link>
        </div>
        
      </div>

      {/*  Home ralate facts  */} 
      <Other /> 
    </div>
  );
};

export default Facts;
