import React, { useEffect } from 'react'
import img1 from '../../assets/about1.jpg'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useInView } from 'react-intersection-observer';

export const About = () => {
  const [refLeft, inRefLeftPic] = useInView();
  const [refRight, inRefRightPic] = useInView();
  console.log("")
  return (
    <React.Fragment >
      <div className="container">
        <div className="aboutInner">
          <div className={`leftSection ${inRefLeftPic ? 'fade-left-in' : 'fade-left-out'}`} style={{ transitionDelay: '0.3s' }} ref={refLeft}>
            <img src={img1} alt="" />
          </div>
          <div className="rightSection">
            <div className={`rightInner ${inRefRightPic ? 'fade-in' : 'fade-out'}`} style={{ transitionDelay: '0.1s' }} ref={refRight}>
              <h1> <span> &lt;</span>h1<span>&gt;</span> ABOUT <span>&lt;</span>/h1<span>&gt;</span> </h1>
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
