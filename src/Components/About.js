import React, { useState } from "react";
import PropTypes from "prop-types";

export default function About(props) {
  const [myStyle, setMyStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });
  const [btnText, setBtnText] = useState("Enable Dark Mode");

  const toggleStyle = () => {
    if (myStyle.color === "white") {
      setMyStyle({
        color: "black",
        backgroundColor: "white",
      });
      setBtnText("Enable Dark Mode");
    } else {
      setMyStyle({
        color: "white",
        backgroundColor: "#042743",
      });
      setBtnText("Enable Light Mode");
    }
  };

  return (
    <div className="container py-4" style={myStyle}>
      <h1 className="mb-4" style={{ textAlign: "center" }}>
        {props.title || "About Me"}
      </h1>
      <p>
        Welcome! My name is <strong>Ahmad</strong>, and I am a passionate 
        developer and designer with expertise in both front-end and back-end technologies. 
        I specialize in building dynamic and responsive websites, designing user-friendly 
        interfaces, and developing robust machine learning solutions. 
      </p>
      <h2 className="mt-4">Key Areas of Expertise</h2>
      <ul>
        <li>Web Development: HTML, CSS, JavaScript, React, Tailwind, Bootstrap</li>
        <li>Backend Development: PHP, MySQL</li>
        <li>Machine Learning: LightGBM, Random Forest, Naive Bayes, Decision Trees</li>
        <li>Graphic Design: Adobe Photoshop, Illustrator</li>
        <li>Content Creation: YouTube (Ahmad Tech), Instagram, Facebook</li>
      </ul>
      <h2 className="mt-4">Professional Experience</h2>
      <p>
        I have gained hands-on experience through various roles and projects, including:
      </p>
      <ul>
        <li>
          <strong>Graphic Designer</strong> at <em>Shaf Army Shield</em> in Gujranwala Cantt, where I worked on 
          branding, logos, and marketing materials.
        </li>
        <li>
          Developed and deployed machine learning solutions for detecting malicious URLs and analyzing large datasets.
        </li>
        <li>
          Led the creation of WordPress and Shopify websites tailored to clients' needs.
        </li>
      </ul>
      <h2 className="mt-4">Core Values</h2>
      <p>
        My work is driven by a commitment to quality, innovation, and collaboration. 
        I believe in delivering solutions that not only meet but exceed expectations.
      </p>
      <h2 className="mt-4">Let's Connect</h2>
      <p>
        If you are interested in working together or learning more about my skills and 
        projects, feel free to reach out!
      </p>
      <div className="container my-3">
        <button
          onClick={toggleStyle}
          type="button"
          className="btn btn-primary"
        >
          {btnText}
        </button>
      </div>
    </div>
  );
}

About.propTypes = {
  title: PropTypes.string,
};
