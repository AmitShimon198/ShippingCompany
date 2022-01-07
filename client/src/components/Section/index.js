import React, { useState } from "react";
import Video from "../../videos/video.mp4";
import Button from "../button/Button";
import classes from "./Section.module.css";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";


const Section = ({primary, big, bigFont}) => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
      setHover((prev) => !prev);
    };

  return (
    <div className={classes.heroContainer}>
      <div className={classes.heroBG}>
        <video
          className={classes.videoBg}
          autoPlay
          loop
          muted
          src={Video}
          type="video/mp4"
        />
      </div>
      <div className={classes.heroContent}>
        <h1 className={classes.heroH1}>Virtual Banking</h1>
        <p className={classes.heroP}>Sign Up today</p>
        <div className={classes.btnWrapper}>
            <Button primary={primary} dark={false} big={big} bigFont={bigFont} onHover={onHover}>
            Get Started{" "}
                {hover ? (
                    <MdArrowForward className={classes.ArrowForward} />
                ) : (
                    <MdKeyboardArrowRight className={classes.ArrowRight} />
                )}
            </Button>
        </div>

      </div>
    </div>
  );
};

export default Section;
