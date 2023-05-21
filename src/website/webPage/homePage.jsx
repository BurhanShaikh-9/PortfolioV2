import React, { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { About } from '../component/about'
// import { Contact } from '../component/contact'
import { Project } from '../component/project'
import { useOutletContext } from "react-router-dom";
import { Welcome } from '../component/welcome';
import { Skill } from '../component/skill';

export const HomePage = () => {
  // const component = useRef(null);
  // const slider = useRef(null);
  // const { aboutRef, contactRef } = useOutletContext();
  // // const aboutRef = useRef(null);
  // // const contactRef = useRef(null);
  // console.log(aboutRef.current, "asadadasdasdads")


  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);
  //   let ctx = gsap.context(() => {
  //     const pixelsPause = 300;
  //     let panels = gsap.utils.toArray(".panel");
  //     gsap.to(panels, {
  //       xPercent: -100 * (panels.length - 1),
  //       ease: "none",
  //       scrollTrigger: {
  //         trigger: slider.current,
  //         scrub: 1,
  //         snap: 50 / (panels.length - 1),
  //         start: `top+=${pixelsPause} top`,
  //         end: () => "+=" + window.innerWidth * panels.length,
  //         markers: false,
  //       },
  //     });
  //     ScrollTrigger.create({
  //       trigger: slider.current,
  //       end: () => "+=" + (window.innerWidth * panels.length + pixelsPause),
  //       markers: false,
  //       pin: true,
  //     });
  //   }, component);
  //   return () => ctx.revert();
  // }, []);

  return (
    <React.Fragment>
      <main className="app">
        <div id="WelcomeMain" className='section welcome '><Welcome /></div>
        <div id="AboutMain" className='section about '> <About /> </div>
        <div id="SkillMain" className='section skill '> <Skill /> </div>
        <div id="ProjectMain" className=' project '> <Project /> </div>
      </main>
    </React.Fragment>
  )
}
