import React from "react";
import Wellcome from "../assets/wellcome.svg";
import classes from "../css/Hero.module.css";
import Button from "../components/Button/Btn";
import { Homedata } from "../DATA/homeData";
import { RxPinTop } from "react-icons/rx";
import { Link } from "react-router-dom";
import { VscSmiley } from "react-icons/vsc";
import Facts from "../pages/Facts";
const Hero = () => {
  return (
    <div>
      <div className={classes.container}>
        {Homedata.map((item) => {
          return (
            <>
              <div className={classes.rowWellcome}>
                <h1> {item.title} </h1>
                {/*  button */}
                <Button>
                  <Link to={"/top-facts907597532"}>
                    <RxPinTop size={24} className={classes.topIcon} />
                    {item.buttonTiitle2}
                  </Link>
                </Button>{" "}
                <br />
                <Button>
                  <Link to={"/funfacts004808"}>
                    <VscSmiley size={24} className={classes.topIcon} />
                    {item.buttonTitle}
                  </Link>
                </Button>
              </div>

              <div className={classes.imageWrraper}>
                <img src={Wellcome} alt="" />
              </div>
              {/*  closing */}
            </>
          );
        })}
      </div>
        <Facts />
    </div>
  );
};

export default Hero;
