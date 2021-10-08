import React, { Component } from 'react'
import classes from './About.module.css';
import ScrollAnimation from 'react-animate-on-scroll';
import "animate.css/animate.min.css"; 

class About extends Component {
    render() {
        return (
            <div className={classes.box} id="about">
                <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}>
                    <span  className={classes.head}>ABOUT ME</span>
                    <h2 className={classes.heading}>Who Am I?</h2>
                    <div className={classes.About}>
                        <p> My name is ALINA PINK and I am currently pursuing a career in teaching dance and running community building events for dancers woldwide. I want to be a international dance teacher in Brazillian Zouk as I am interested in developing new pieces of video art as this interest me alot. :)  </p>
                         <p className={classes.br}>I love exploring new dances and being a practitioner, I like to stay on top of latest trends.
 </p>
                    </div>
                </ScrollAnimation>
            </div>
        )
    }
}

export default About;