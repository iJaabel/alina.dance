import React from "react";
import classes from "./Interest.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default function Interest() {
  return (
    <div className={classes.box} id="interest">
      <ScrollAnimation
        offset={0}
        animateIn="fadeInLeft"
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        <span className={classes.head}>WHAT I DO?</span>
        <h2 className={classes.heading}>HERE ARE SOME OF MY EXPERTISE</h2>
        <div className={classes.Interest}>
          <ScrollAnimation
            offset={0}
            animateIn="fadeInLeft"
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          >
            <div className={classes.web}>
              <h3>West Coast Swing (WCS)</h3>
              <p>
                I have knowledge of tap dance and have experience in building
                connection with any kind of leader. I also have countless hours
                of ballet training.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn="fadeInLeft"
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          >
            <div className={classes.app}>
              <h3>Brazillian Zouk</h3>
              <p>
                I am a master social dancer and have training in contemporary
                dance.
                <br /> I have also good grasp of forro and jazz.
              </p>
            </div>
          </ScrollAnimation>
          <ScrollAnimation
            offset={0}
            animateIn="fadeInLeft"
            duration={2.4}
            animateOnce={true}
            initiallyVisible={true}
          >
            <div className={classes.other}>
              <h3>Other's Interest</h3>
              <p>
                I have a hand in selling physical products online.
                <br />
                Adobe Photoshop, Adobe Premiere are my other fields of interest.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </ScrollAnimation>
    </div>
  );
}
