import React from "react";
import { FaLaptopCode, FaMobileAlt, FaRegChartBar } from "react-icons/fa";
import "@/style/Services.css"

const Skills = () => {
  return (
    <section className="services-section" id="Services">
    <div className="services-container">
      <h1 className="services-title">
        My <span className="highlighted-text">Services</span>
      </h1>
      <div className="underline"></div>
      <div className="services-cards-container">
        <div className="service-card">
          <FaLaptopCode className="service-icon" />
          <h2 className="service-card-title">Web Development</h2>
          <p className="service-description">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
          </p>
        </div>
        <div className="service-card">
          <FaMobileAlt className="service-icon" />
          <h2 className="service-card-title">Apps Development</h2>
          <p className="service-description">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
          </p>
        </div>
        <div className="service-card">
          <FaRegChartBar className="service-icon" />
          <h2 className="service-card-title">Digital Marketing</h2>
          <p className="service-description">
            There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour
          </p>
        </div>
      </div>
    </div>
  </section>
  
  );
};

export default Skills;
