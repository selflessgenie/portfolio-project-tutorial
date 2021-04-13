import React, { Component } from "react";
import Me from "./ME.png";
import Pic1 from "./1.PNG";
import Pic2 from "./2.PNG";
import Pic3 from "./3.PNG";
import Pic4 from "./4.PNG";
import Pic5 from "./5.PNG";
import Pic6 from "./6.PNG";

const AboutMe = () => {
  return (
  <div className = "about-me-container">
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm">
          <p className="about-me-heading">about me</p>
          <p className="about-me-summary">I'm a Web App and Mobile App developer from Bangalore, India</p>
          <p className="about-me-detail">I enjoy taking complex problems and turning them into simple and beautiful interface designs. I also love the logic and structure of coding and always strive to write elegant and efficient code, whether it be front-end or backend or databases.</p>
          <p className="about-me-detail">When i'm not coding, you'll find me in gym or on cricket ground breaking the wickets.</p>
        </div>
        <div className="col-sm">
          <img className="about-me-img" src={Me}/>
        </div>
        </div>
      </div>
      <div className="container-fluid d-none d-sm-block d-sm-none d-md-block">
        <div className="row">
          <div className="col-sm">
            <img className="about-me-thumbnails" src={Pic1}/>
          </div>
          <div className="col-sm">
          <img className="about-me-thumbnails" src={Pic2}/>
          </div>
          <div className="col-sm">
          <img className="about-me-thumbnails" src={Pic3}/>
          </div>
          <div className="col-sm">
          <img className="about-me-thumbnails" src={Pic4}/>
          </div>
          <div className="col-sm">
          <img className="about-me-thumbnails" src={Pic5}/>
          </div>
          <div className="col-sm">
          <img className="about-me-thumbnails" src={Pic6}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutMe;