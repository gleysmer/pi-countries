import React from "react";

import "./About.css";
import myPhoto from "../../img/foto.jpg";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <div>
    <div className="container">
    <div className="volver">
      <Link to="/home"><button className="btn">Volver</button></Link>
      </div>
      <div className="mainConteinerAbout">
      
        <div className="imageDiv">
          
          <img src={myPhoto} alt="A man at the Ocean edge" />
        </div>
        <h4>Developed by: Gleysmer cedeño</h4>
        <h4>
          Full Stack Developer | JavaScript
        </h4>
        <hr />
        <p>
          I`m a Full Stack JavaScript developer who`s in love with coding
          and computer systems.
        </p>
        <br />
        <p>Skills: CSS, HTML, JavaScript, MySQL, React.js, Redux, Sequelize, Express.</p>
        <br />
        <p>I define myself as lifetime learner.</p>

        <p>Soft skills: reliable, respectful and problem-solving oriented.</p>
        <p>If you have a project I can help with, please get in touch.</p>
        <br />
        <div className="links">
          <h6>Contact me:</h6>
          <div className="linksItems">
            <p>
              <a href="https://github.com/gleysmer" target='_blank' rel="noreferrer">GitHub</a>
            </p>
            <p>
              <a href="https://www.linkedin.com/in/gleysmer-cede%C3%B1o-13a444253/" target='_blank' rel="noreferrer">
                LinkedIn
              </a>
            </p>
            
            </div>
        </div>
      </div>
    </div>
    </div>
  );
}
