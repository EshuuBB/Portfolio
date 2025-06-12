import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Eshita Dahal </span>
            from <span className="purple"> Kathmandu, Nepal. </span>
          
            I’m a passionate graphic designer enthusiast with a creative eye for detail and a love for visual storytelling. 
            I specialize in designing eye-catching posters, branding assets, and digital illustrations using Adobe Photoshop and Illustrator.
            <br />
            <br />
            I’m currently expanding my creative toolkit by exploring 3D modeling, UI elements, and motion graphics to bring even more depth to my design work. 
            As a lifelong learner, I constantly seek new ways to improve and experiment with modern design trends and tools.
            <br />
            <br />
            I’m pursuing a Bachelor’s degree in Multimedia, where I blend my technical knowledge with creativity to produce impactful designs. 
            Whether it’s a vibrant poster or a clean logo, my goal is always the same — to make your message look amazing.
            <br />
            <br />
            Let’s collaborate and bring your vision to life.
          </p>
         

         
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
