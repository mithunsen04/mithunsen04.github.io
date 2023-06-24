import React, { useEffect } from "react";
import AOS from "aos";

export default function Contact() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <section
      data-aos="fade-up"
      className="contact-continer sections"
      id="contact"
    >
      <h1 className="heading">
        <span className="sauce"> </span>Contact Me
      </h1>
      <div data-aos="fade-up" className="flex-center">
        <h1 className="title">Get In Touch</h1>
        <p style={{ textAlign: "center", "": 700 }}>
          Shoot an email through the Email below to discuss collaboration
          opportunities, project inquiries, or simply to say hello. I'm excited
          to hear from you and explore how we can work together!
        </p>
        <div className="button-container">
          <a className="contact-button" href="mailto: mithunsen559@gmail.com">
            Shoot an email
          </a>
        </div>
        <div id="contact-phone" className="button-container">
          <a className="contact-button" href="tel:+917031973708">
            Give a Ring
          </a>
        </div>
      </div>
    </section>
  );
}
