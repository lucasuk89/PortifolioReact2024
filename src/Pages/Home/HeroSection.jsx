import React from "react";
import { scrollToContact } from "./Component/getInTouch";

export default function () {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hi, I'm Lucas</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Front End</span> <br />
            Developer
          </h1>
          <p className="LOREEEEM IPsum LOREEEEM IPsumLOREEEEM IPsum">
            <br />I seek to turn ideas into digital solutions.
          </p>
        </div>
        <button
          className="btn btn-primary"
          onClick={() => scrollToContact("Contact")}
        >
          Get in Touch
        </button>
      </div>
      <div className="hero--section--img">
        <img src="./img/persona.png" alt="Hero Section" />
      </div>
    </section>
  );
}
