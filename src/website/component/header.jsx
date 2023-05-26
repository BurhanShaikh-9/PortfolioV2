import React, { useState } from "react"
import { useNavigate } from "react-router-dom";

export const Header = ({ aboutRef, contactRef }) => {
    const [isNav, setIsNav] = useState(false);
    const navigate = useNavigate();

    return (
        <React.Fragment>
            <header className="Header">
                {/* <div className="container"> */}
                <nav className="headerInner">
                    <div className="logo">
                        <a href="#welcome">Burhan</a>
                    </div>
                    <div className="menu">
                        {/* <p> <a href="#welcome">Home</a> </p> */}
                        <p> <a href="#AboutMain" >About</a> </p>
                        <p><a href="#SkillMain">Skills</a></p>
                        <p> <a href="#ProjectMain">Project</a> </p>
                        <p><a href="#ContactMain" >Contact</a></p>
                    </div>
                    {/* {
                        !isNav && */}
                        <button className="menuOuter" onClick={() => { setIsNav(!isNav) }}>
                            <div className="menuUp" />
                            <div className="menuMid" />
                            <div className="menuDown" />
                        </button>
                    {/* } */}
                </nav>
                {
                    isNav &&
                    <nav className="nav2">
                        <div className="nav2Inner">
{/*                         
                                <button className="menuOuter1" onClick={() => { setIsNav(!isNav), console.log("function Running") }}>
                                    <div className="menuUp" />
                                    <div className="menuDown" />
                                </button> */}
                           
                            <p> <a href="#AboutMain">About</a> </p>
                            <p> <a href="#SkillMain" >Skills</a> </p>
                            <p><a href="#ProjectMain">Projects</a></p>
                            <p><a href="#ContactMain" >Contact</a></p>
                        </div>
                    </nav>
                }


                {/* </div> */}
            </header>


        </React.Fragment>
    )
}
