import React from "react";
import "../style/About.css"
const About = () => {
  return (
    <div>
    <section className="about-section" id="About">
      <div className="about-container">
        <div className="about-header">
          <h1 className="about-title">
            About <span className="highlighted-text">Me</span>
          </h1>
          <div className="underline"></div>
        </div>
        <div className="about-content">
          <div className="about-image-container">
            <img
              alt="A person standing in a park with trees and a colorful structure in the background"
              className="about-image"
              height="400"
              src="img3.png"
              width="300"
            />
          </div>
          <div className="about-description">
            <h2 className="about-role">
              Frontend Developer &amp; UI / UX Designer
            </h2>
            <p className="about-text">
              I'm Zubair Ahmed, a frontend developer with a passion for creating intuitive and visually appealing web experiences. With a strong foundation in HTML, CSS, JavaScript, and frameworks like React, I focus on building responsive, user-friendly interfaces that bring ideas to life. I believe in the power of design to communicate, inspire, and create connections, and I’m constantly exploring new techniques to elevate my work. Beyond coding, I’m driven by creativity, curiosity, and a commitment to continuous learning, always aiming to refine my skills and stay at the forefront of web development.
            </p>
            <p className="additional-text">
              {/* You can Write More About Here */}
            </p>
            <button className="read-more-btn">Read More...</button>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  );
};

export default About;
