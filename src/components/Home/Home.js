import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Home2 from "./Home2";
import ADM from "../../Assets/ADM.svg";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container
          className="home-content"
          style={{
            height: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontWeight: "bold",
              fontSize: "3rem",
              textAlign: "center",
            }}
          >
            Creative Graphic Designer
          </h1>
          <h2
            style={{
              fontSize: "1.5rem",
              marginTop: "10px",
              textAlign: "center",
            }}
          >
            Turning ideas into vibrant visuals with Adobe Photoshop &
            Illustrator
          </h2>
          <div style={{ marginTop: "20px", display: "flex", gap: "15px" }}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/af/Adobe_Photoshop_CC_icon.svg"
              alt="Adobe Photoshop"
              style={{ width: "50px", height: "50px" }}
            />
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/f/fb/Adobe_Illustrator_CC_icon.svg"
              alt="Adobe Illustrator"
              style={{ width: "50px", height: "50px" }}
            />
             <img
              src="https://upload.wikimedia.org/wikipedia/commons/3/33/Figma-logo.svg"
              alt="Adobe Illustrator"
              style={{ width: "50px", height: "50px" }}
            />
            <img
              src={ADM}
              alt="Autodesk Maya"
              style={{ width: "50px", height: "50px" }}
            />
          </div>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
