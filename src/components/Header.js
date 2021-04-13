import React from "react";
import Typed from "react-typed";
import Particles from "react-particles-js";

const Header = () => {
  return (
    <>
    <Particles
        params={{
          particles: {
            number:{
              value: 30,
              density: {
                enable: true,
                value_area: 900
              }
            }
          }
        }}
      />
    <div className = "header-wraper">
      <div className = "main-info"> 
        <h1>Software SOLUTION for all your needs</h1>
        <Typed
          className="typed-text"
          strings={["Web Design", "Web Development", "Mobile App Development", "System Design", "Software Architecture"]}
          typeSpeed={40}
          backSpeed={60}
          loop
        />
        <a href="#" className="btn-main-offer" style={{zIndex: 2}}>Contact me</a>
      </div>
      
    </div>
    </>
  )
}

export default Header
