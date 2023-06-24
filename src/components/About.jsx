import React, { useEffect } from "react";
import resume from "../resume/Vishal_Durge_Resume.pdf";
import AOS from "aos";

export default function About() {
  const handleDownload = () => {
    window.open(resume, "_blank");
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section data-aos="fade-up" className="about section sections" id="about">
      <h1 data-aos="fade-up" className="heading">
        <span className="sauce"> </span>About Me
      </h1>
      <div>
        <div data-aos="fade-up" className=" first">
          Welcome to my coding realm,.{" "}
          <p id="user-detail-intro">
            <p style={{ display: "inline-block" }} className="sauce">
              'I'm Mithun'{" "}
            </p>{" "}, a skilled full stack web
          developer, dedicated to translating coffee into lines of code in my
          coding realm. Proficient in HTML, CSS, JavaScript, ReactJs, NodeJs,
          and Express, I possess a strong command over MongoDB and database
          technologies. My true passion lies in creating visually appealing
          websites that evoke delight and wonder from users. With a keen eye for
          detail and a commitment to excellence, I embrace complex coding
          challenges with enthusiasm. When I'm not immersed in coding, I enjoy
          staying updated with the latest tech trends and exploring new horizons
          in the digital world.
            &nbsp;
            <br />
          </p>
          <br />
        </div>
        <a
          onClick={handleDownload}
          rel="noreferrer"
          href={resume}
          download={"Vishal-Durge-Resume"}
          id="resume-button-2"
          className="contact-button resume-button second-btn"
        >
          Resume
        </a>
      </div>
    </section>
  );
}
