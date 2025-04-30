import React, { useRef } from 'react'
import '../style/header.css'
import Logo from '../images/Logo.jpg'
import close from "../images/close-button.png"
import { NavLink } from 'react-router-dom'
function Header() {

    let modal = useRef()

    function openModal(){
        modal.current.classList.add("show")
    }
    function removeModal(){
        modal.current.classList.remove("show")
    }

  return (
    <header>
        <div className="Header">
                <div className="Header_wrapper">
                    <div className="head_logo">
                        <NavLink to="/">
                        <img width={50} src={Logo} alt="" />
                        </NavLink>
                        <h1>Seno Seikaru</h1>
                    </div>
                    <ul className='head_list'>
                        <li>
                            <NavLink to="/about">About Me</NavLink>
                        </li>
                        <li>
                            <NavLink to="/skills">My Skills</NavLink>
                        </li>
                        <li>
                            <NavLink to="/projects">My Projects</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact me</NavLink>
                        </li>
                    </ul>
                    <div onClick={openModal} className="burger">
                        <div className="line"></div>
                        <div className="line"></div>
                        <div className="line"></div>
                    </div>
            </div>
            <div ref={modal} className="Modal">
            <div onClick={removeModal} className="close">
                <img width={50} src={close} alt="" />
            </div>
                <ul>
                <li>
                    <NavLink to="/about">About Me</NavLink>
                </li>
                <li>
                    <NavLink to="/skills">My Skills</NavLink>
                </li>
                <li>
                    <NavLink to="/projects">My Projects</NavLink>
                </li>
                <li>
                    <NavLink to="/contact">Contact me</NavLink>
                </li>
                </ul>
            </div>
        </div>
    </header>
  )
}

export default Header