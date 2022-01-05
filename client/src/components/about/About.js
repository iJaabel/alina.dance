import React from "react";
import classes from "./About.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default function About() {
  return (
    <div className={classes.box} id="about">
      <ScrollAnimation
        offset={0}
        animateIn="fadeInLeft"
        duration={2.4}
        animateOnce={true}
        initiallyVisible={true}
      >
        <span className={classes.head}>ABOUT ME</span>
        <h2 className={classes.heading}>Who Am I?</h2>
        <div className={classes.About}>
          <p>
            My name is ALINA PINK and I am currently pursuing a career in
            teaching dance and running community building events for dancers
            woldwide. I am an inspiring to be an international dance teacher. I
            am interested in developing new pieces of movement share through
            video art.
          </p>
          <p className={classes.br}>
            I love exploring new dances and being a practitioner, I like to stay
            on top of latest trends.
          </p>
        </div>
      </ScrollAnimation>
    </div>
  );
}
