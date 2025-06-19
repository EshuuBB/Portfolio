import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import vector from "../../Assets/Projects/vector.png";
import poster from "../../Assets/Projects/poster.png";
import manipulation from "../../Assets/Projects/manipulation.png";
import logo from "../../Assets/Projects/Logo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={poster}
              isBlog={false}
              title="Tabasco Sauce Ad Poster"
              description="This bold advertisement poster was designed using Adobe Photoshop, inspired by brands like Sriracha and Coca-Cola. It emphasizes strong color contrast, lighting, and a fiery theme. The design combines imagery, text, and visual effects to highlight the heat and branding essence of Tabasco Sauce in a powerful way."
              demoLink="https://www.behance.net/gallery/228480749/Tabasco-Sauce-Ad-Poster"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={logo}
              isBlog={false}
              title="Cafe Logo Concept"
              description="This logo design creatively integrates a coffee cup into the word “Cafe,” forming a playful and modern brand identity. Using clean lines and minimal elements, the concept focuses on cohesion between text and shape, ensuring a friendly and memorable visual mark suitable for branding and digital use."
              demoLink="https://www.behance.net/gallery/228480873/Cafe-Logo-Concept"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={manipulation}
              isBlog={false}
              title="Dire Wolf Light Blend"
              description="Created in Adobe Photoshop, this design blends a dire wolf into a dark, glowing environment. A warm light source highlights the wolf’s face, using layer blending, contrast adjustments, and image composition techniques to produce a dramatic and visually immersive piece with emotional impact and atmospheric depth.

"
              demoLink="https://www.behance.net/gallery/228480999/Dire-Wolf-Light-Blend"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={vector}
              isBlog={false}
              title="Melting Ice Cream Vector"
              description="This flat vector artwork, made with Adobe Illustrator, showcases a melting ice cream concept using geometric shapes and vibrant colors. The use of green, red, and white symbolizes multiple flavors, while shadows and smooth lines create a playful dessert-themed composition perfect for packaging, posters, or digital design.

"
              demoLink="https://www.behance.net/gallery/228482535/Icecream-Vector-Design"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
