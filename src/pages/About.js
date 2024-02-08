import React from "react";
import "../styles/About.css";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta
          aperiam qui perferendis. Culpa illo ea id natus, dolor exercitationem
          praesentium dignissimos voluptatibus velit asperiores excepturi vitae
          fuga veritatis laboriosam aliquid.
        </p>
      </div>
    </div>
  );
}

export default About;
