import React from 'react'
import reactIcon from '../../assets/icons/ReactIcon.png'
import sassIcon from '../../assets/icons/2560px-Sass_Logo_Color.svg.png'
import npmIcon from '../../assets/icons/2560px-Npm-logo.svg.png'
import photoShopIcon from '../../assets/icons/Adobe_Photoshop_CC_icon.svg.png'
import bootstrapIcon from '../../assets/icons/Bootstrap_logo.svg.png'
import githubIcon from '../../assets/icons/github-mark.png'
import nextIcon from '../../assets/icons/next js.png'
import jsIcon from '../../assets/icons/js.png'
import tailwindIcon from '../../assets/icons/Tailwind_CSS_Logo.svg.png'
import { useInView } from 'react-intersection-observer';
export const Skill = () => {
  const [refLeftSkill, inRefLeftSkill] = useInView();
  const [refRightSkill, inRefRightSkill] = useInView();
  return (
    <React.Fragment >

      <div className="container">
        <div className="skillInner">
          <div className={`upperSection ${inRefLeftSkill ? 'fade-left-in' : 'fade-left-out'}`} style={{ transitionDelay: '0.3s' }} ref={refLeftSkill}>
            <div className="upperInner">
              <h1> <span> &lt;</span>h1<span>&gt;</span> MY SKILLS <span>&lt;</span>/h1<span>&gt;</span> </h1>
              <p>
                I am proficient in React.js, Next.js, GitHub, and utilizes Tailwind CSS to build visually appealing and responsive websites with a focus on user experience.
              </p>
              {/* <div className='leftBracket'>&#91;</div>
              <div className='rightBracket'>&#93;</div> */}
            </div>
          </div>
          <div className={`bottomSection ${inRefRightSkill ? 'fade-in' : 'fade-out'}`} style={{ transitionDelay: '0.1s' }} ref={refRightSkill}>
            <div className="bottomInner">
              <div className="skillContainer">
                <div class="wave reactWave"></div>
                <img src={reactIcon} alt="" />
              </div>
              <div className="skillContainer">
                <div class="wave nextWave"></div>
                <img src={nextIcon} alt="" />
              </div>
              <div className="skillContainer">
                <div class="wave jsWave"></div>
                <img src={jsIcon} alt="" />
              </div>
            </div>
            <div className="bottomInner">

              <div className="skillContainer">
                <div class="wave sassWave"></div>
                <img src={sassIcon} alt="" />
              </div>
              <div className="skillContainer">
                <div class="wave bootWave"></div>
                <img src={bootstrapIcon} alt="" />
              </div>
              <div className="skillContainer">
                <div class="wave tailWave"></div>
                <img src={tailwindIcon} alt="" />
              </div>
            </div>
            <div className="bottomInner">

              <div className="skillContainer">
                <div class="wave npmWave"></div>
                <img src={npmIcon} alt="" />
              </div>
              <div className="skillContainer">
                <div class="wave gitWave"></div>
                <img src={githubIcon} alt="" />
              </div>
              <div className="skillContainer">
                <div class="wave photoWave"></div>
                <img src={photoShopIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
