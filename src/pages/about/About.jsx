import React from 'react'
import AboutDiv, { InfoDiv } from './style'
import profil from "../../assets/Woman icon.png"

const About = () => {
  return (
    <AboutDiv>
      <InfoDiv>
        <img src={profil} alt="" width="200px"/>
        <h1>About Software Developer <span>Ayse Ugurlu</span></h1>
        <h2>Hi! I am AYSE</h2>
        <h3>I am currently learning Full Stack Development Languages.</h3>
        <h4>I've already known HTML,CSS, JS, ReactJS.</h4>
        <h2><a style={{textDecoration:"none", color:"orange"}} href="https://github.com/ayseugurlu">Go GitHub : </a> https://github.com/ayseugurlu</h2>

      </InfoDiv>
    </AboutDiv>
  )
}

export default About