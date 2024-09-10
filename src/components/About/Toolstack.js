import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaTerminal } from "react-icons/fa"; // Terminal for Bash
import { SiGithub, SiMicrosoftazure, SiVisualstudiocode } from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <FaTerminal /> {/* Bash */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub /> {/* GitHub */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode /> {/* VS Code */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftazure /> {/* Microsoft Azure */}
      </Col>
    </Row>
  );
}

export default Toolstack;
