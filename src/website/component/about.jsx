import React, { useEffect } from 'react'
import img1 from '../../assets/about1.jpg'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export const About = () => {

  return (
    <React.Fragment >
      <div className="container">
        <div className="aboutInner">
          <div className="leftSection">
            <img src={img1} alt="" />
          </div>
          <div className="rightSection">
            <div className="rightInner">
              <h1>About</h1>
              <p>
              I am a Software Engineer, who keeps looking for the opportunity to get better, to learn and to improve my skills.
              </p>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
