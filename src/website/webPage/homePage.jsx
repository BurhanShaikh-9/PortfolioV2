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
 

  return (
    <React.Fragment>
      <main className="app">
        <div id="WelcomeMain" className='section welcome '><Welcome /></div>
        <div id="AboutMain" className='section about '> <About /> </div>
        <div id="SkillMain" className='section skill '> <Skill /> </div>
        <div id="ProjectMain" className='section project '> <Project /> </div>
      </main>
    </React.Fragment>
  )
}
