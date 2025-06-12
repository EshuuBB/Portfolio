import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaFigma, FaGoogle, FaMicrosoft } from "react-icons/fa";
import { SiAutodesk, SiCanva } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiAutodesk />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaFigma />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaGoogle />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva /> {/* Canva */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <FaMicrosoft /> {/* MS Office */}
      </Col>
    </Row>
  );
}

export default Techstack;
