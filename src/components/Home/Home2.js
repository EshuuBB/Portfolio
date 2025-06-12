import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Eshita-modified.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
  AiFillBehanceSquare,
  AiFillBehanceCircle,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Hello! I'm <span className="purple">Eshita Dahal</span>, a
              passionate and evolving graphic designer based in Nepal.
              <br />
              <br />I specialize in creating visually engaging content using{" "}
              <b className="purple">Adobe Photoshop</b> and{" "}
              <b className="purple">Illustrator</b>
              , including branding, posters, and digital art.
              <br />
              <br />
              As a learner and a creator, I strive to tell compelling stories
              through design.
              <br />
              <br />
              Let’s build something <span className="purple">amazing</span>{" "}
              together.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/eshita-dahal-14a9a2301/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.behance.net/eshitadahal"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillBehanceCircle />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
