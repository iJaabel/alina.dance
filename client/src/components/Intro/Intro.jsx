import { useEffect, useRef } from "react";
import "./Intro.scss";
import { init } from "ityped";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: [
        "Zouk Instructor",
        "Event Coordinator",
        "Life Coach",
        "Content Creator",
        "Nutrition Advisor",
        "eCommerce Specialist",
        "Fitness Director",
      ],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/A_flipped_intro.png" alt="Alina in a power pose" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Alina Pink</h1>
          <h3>
            The <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="a down arrow" />
        </a>
      </div>
    </div>
  );
}
