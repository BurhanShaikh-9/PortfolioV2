import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { RxCross1 } from "react-icons/rx"

export const Header = ({ aboutRef, contactRef }) => {
    const [isNav, setIsNav] = useState(false);
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <header className="Header">
                {/* <div className="container"> */}
                <nav className="headerInner">
                    <div className="logo">
                        <a href="#WelcomeMain">BURHAN</a>
                    </div>
                    <div className="menu">
                        {/* <p> <a href="#welcome">Home</a> </p> */}
                        <p> <a href="#AboutMain" >ABOUT</a> </p>
                        <p><a href="#SkillMain">SKILLS</a></p>
                        <p> <a href="#ProjectMain">PROJECT</a> </p>
                        <p><a href="#ContactMain" >CONTACT</a></p>
                    </div>
                    <button className="menuOuter" onClick={() => { setIsNav(!isNav) }}>
                        <div className="menuUp" />
                        <div className="menuMid" />
                        <div className="menuDown" />
                    </button>
                </nav>
                <nav className={`nav2 ${isNav  && "showNav" }`}>
                {/* <nav className={`nav2 ${sowNav}`}> */}
                    <div className="nav2Inner">
                        <button onClick={() => { setIsNav(!isNav) }}><RxCross1 /></button>
                        <p> <a href="#AboutMain" onClick={() => { setIsNav(!isNav) }}>ABOUT</a> </p>
                        <p> <a href="#SkillMain" onClick={() => { setIsNav(!isNav) }}>SKILLS</a> </p>
                        <p><a href="#ProjectMain" onClick={() => { setIsNav(!isNav) }}>PROJECTS</a></p>
                        <p><a href="#ContactMain" onClick={() => { setIsNav(!isNav) }}>CONTACT</a></p>
                    </div>
                </nav>



                {/* </div> */}
            </header>


        </React.Fragment>
    )
}
