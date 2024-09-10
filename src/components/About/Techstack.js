import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJava,
  DiJavascript1,
  DiMongodb,
  DiNodejs,
  DiPython,
  DiReact,
} from "react-icons/di";
import {
  SiBootstrap,
  SiDjango,
  SiFlask,
  SiNextdotjs,
  SiNodedotjs,
  SiNumpy,
  SiOpencv,
  SiPandas,
  SiPostgresql,
  SiPytorch,
  SiScikitlearn,
  SiTensorflow,
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {/* Existing Tech Stack */}
      <Col xs={4} md={2} className="tech-icons">
        <DiPython /> {/* Python */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 /> {/* JavaScript */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiNodejs /> {/* Node.js */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact /> {/* React */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb /> {/* MongoDB */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs /> {/* Next.js */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNodedotjs /> {/* Express.js (represented by Node.js) */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql /> {/* PostgreSQL */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava /> {/* Java */}
      </Col>

      {/* New Libraries and Frameworks */}
      <Col xs={4} md={2} className="tech-icons">
        <SiNumpy /> {/* NumPy */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPandas /> {/* Pandas */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiOpencv /> {/* OpenCV */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiScikitlearn /> {/* scikit-learn */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTensorflow /> {/* TensorFlow */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPytorch /> {/* PyTorch */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFlask /> {/* Flask */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiDjango /> {/* Django */}
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiBootstrap /> {/* Bootstrap */}
      </Col>
    </Row>
  );
}

export default Techstack;
