import React from "react";
import classes from "./Education.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import { MdWork } from "react-icons/md";
import { MdSchool } from "react-icons/md";
import { FaSchool } from "react-icons/fa";

export default function Education() {
  return (
      <div className={classes.box} id="education">
        <ScrollAnimation
          offset={0}
          animateIn="fadeInLeft"
          duration={2}
          animateOnce={true}
          initiallyVisible={true}
        >
          <span className={classes.head}>MY JOURNEY</span>
          <section className={classes.container}>
            <div className={classes.container_content}>
              <div className={classes.row}>
                <div className={classes.row_md_12}>
                  <div className={classes.timeline_centered}>
                    <ScrollAnimation
                      offset={0}
                      animateIn="fadeInLeft"
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div
                          className={`${classes.timeline_icon} ${classes.timeline_icon_2}`}
                        >
                          <FaSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Undergraduation at Queens College
                            <span> 2007-2011</span>
                          </h2>
                          <p>
                            I have completed my undergraduate in Speech from
                            <a href=" "> Queens College</a>.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn="fadeInLeft"
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article className={classes.timeline_entry}>
                        <div className={classes.timeline_icon}>
                          <MdSchool />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Higher Education <span>2012-2014</span>
                          </h2>
                          <p>
                            I have completed my higher education from Long
                            Island University with major subjects as Speech
                            Language.
                          </p>
                        </div>
                      </article>
                    </ScrollAnimation>
                    <ScrollAnimation
                      offset={0}
                      animateIn="fadeInLeft"
                      duration={2.4}
                      animateOnce={true}
                      initiallyVisible={true}
                    >
                      <article>
                        <div
                          className={`${classes.timeline_icon} ${classes.timeline_icon_4}`}
                        >
                          <MdWork />
                        </div>
                        <div className={classes.label}>
                          <h2>
                            Competitions and performances <span>2001-present</span>
                          </h2>
                          <p>
                            Completed multiple competitions worldwide in various
                            dance styles
                          </p>
                        </div>
                        <div className={classes.timeline_entry_inner}>
                          <div
                            className={
                              classes.timeline_icon_3 || classes.color_none
                            }
                          ></div>
                        </div>
                      </article>
                    </ScrollAnimation>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollAnimation>
      </div>
    );
                          }
