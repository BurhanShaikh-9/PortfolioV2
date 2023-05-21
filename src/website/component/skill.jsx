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
export const Skill = () => {
  return (
    <React.Fragment >

      <div className="container">
        <div className="skillInner">
          <div className="upperSection">
            <div className="upperInner">
              <h2>What I do?</h2>
              <p>
              I am proficient in React.js, Next.js, GitHub, and utilizes Tailwind CSS to build visually appealing and responsive websites with a focus on user experience.              </p>
            </div>
          </div>
          <div className="bottomSection">
            <div className="bottomInner">
              <div className="skillContainer">
                <img src={reactIcon} alt="" />
              </div>
              <div className="skillContainer">
                <img src={nextIcon} alt="" />
              </div>
              <div className="skillContainer">
                <img src={jsIcon} alt="" />
              </div>
            </div>
            <div className="bottomInner">

              <div className="skillContainer">
                <img src={sassIcon} alt="" />
              </div>
              <div className="skillContainer">
                <img src={bootstrapIcon} alt="" />
              </div>
              <div className="skillContainer">
                <img src={tailwindIcon} alt="" />
              </div>
            </div>
            <div className="bottomInner">

              <div className="skillContainer">
                <img src={npmIcon} alt="" />
              </div>
              <div className="skillContainer">
                <img src={githubIcon} alt="" />
              </div>
              <div className="skillContainer">
                <img src={photoShopIcon} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}
