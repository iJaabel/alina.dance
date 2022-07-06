import React from "react";
import classes from "./ImgSlider.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "animate.css/animate.min.css";
import { Carousel } from "react-responsive-carousel";
import { GoProject } from "react-icons/go";
import { FaArrowCircleDown } from "react-icons/fa";
import Hello from "../../images/Hello.jpg";
import Pencil from "../../images/Pencil.jpg";
import laptop from "../../images/laptop1.jpg";
// import laptop1 from '../images/laptop1.jpg'

import data from "../../content-data"

export default function ImgSlider() {
  return (
    <div className={classes.carousel_container} id="start">
      {/* <ScrollAnimation offset="0" animateIn="fadeInLeft" duration='2.4' animateOnce="true" initiallyVisible ={true}> */}
      <Carousel
        className={classes.carousel}
        dynamicHeight
        infiniteLoop={true}
        interval={6000}
        useKeyboardArrows={true}
        transitionTime={1700}
        emulateTouch
        showArrows={false}
        autoPlay
        showStatus={false}
        showThumbs={false}
      >
        <div className={classes.image_container}>
          <img className={classes.image} src={Hello} alt="myImage" />
          <div className={classes.h1}>
            <h1>{data.carouselTagline[0]}</h1>
            <a href=" " rel="noopener noreferrer" target="_blank">
              VIEW CV <FaArrowCircleDown />
            </a>
          </div>
        </div>
        <div className={classes.image_container}>
          <img className={classes.image} src={Pencil} alt="myImage" />
          <div className={classes.h2}>
            <h1> {data.carouselTagline[1]}</h1>
            <h1>EVERYWHERE!!</h1>
            <a
              href="https://www.youtube.com/channel/UCqjd_YVXo_2Cdpx4qWqpQOA"
              rel="noopener noreferrer"
              target="_blank"
            >
              VIEW DANCES <GoProject />
            </a>
          </div>
        </div>
        <div className={classes.image_container}>
          <img className={classes.image} src={laptop} alt="myImage" />
          <div className={classes.h3}>
            <h1> {data.carouselTagline[2]}</h1>
            <a href=" " rel="noopener noreferrer" target="_blank">
              BOOK ME <GoProject />
            </a>
          </div>
        </div>
        {/* <div className={classes.image_container}>
                    <img className={classes.image} src={laptop1} alt="myImage"/>
                    <div  className={classes.h1}> 
                    </div>
                </div> */}
      </Carousel>
      {/* </ScrollAnimation> */}
    </div>
  );
}
