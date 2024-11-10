import React from "react";
import "../style/Hero.css"

import { FaFacebook,FaLinkedin,FaTwitter ,FaGithub  } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
    <section className="hero-section" id="Home">
      <div className="hero-container">
        <div className="text-container">
          <h1 className="hi-text">Hi, It's me</h1>
          <h2 className="name-text">Zubair Ahmed</h2>
          <p className="role-text">
            And I'm a <span className="highlighted-text">Frontend Developer</span>
          </p>
          <p className="bio-text">
            I specialize in crafting clean, responsive, and visually engaging websites. With a keen eye for detail and a commitment to quality, I transform ideas into seamless digital experiences that captivate and connect.
          </p>
          <div className="flex space-x-4 mt-4">
        <FaFacebook  className="outline-double rounded-full outline-offset-2 cursor-pointer hover:text-orange-400"/>
        <FaLinkedin className="outline-double rounded-full outline-offset-2 cursor-pointer hover:text-orange-400"/>
        <FaTwitter className="outline-double rounded-full outline-offset-2 cursor-pointer hover:text-orange-400"/>
        <FaGithub className="outline-double rounded-full outline-offset-2 cursor-pointer hover:text-orange-400"/>
        </div>
          <button className="download-button">Download CV</button>
        </div>
        <div className="image-container">
          <img src="img2.png" alt="Illustration of a developer working on a laptop with code and technology icons" />
        </div>
      </div>
    </section>
  </div>
  
  );
};

export default Hero;




