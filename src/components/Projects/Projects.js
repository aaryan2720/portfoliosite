import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import any from "../../Assets/Projects/any.png";
import car from "../../Assets/Projects/car.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import CRM from "../../Assets/Projects/CRM.png";
import detection from "../../Assets/Projects/detection.png";
import inotebook from "../../Assets/Projects/inotebook.png";
import integration from "../../Assets/Projects/integration.png";
import Music from "../../Assets/Projects/Music.png";
import Newz from "../../Assets/Projects/Newz.png";
import port from "../../Assets/Projects/port.png";
import ppe from "../../Assets/Projects/ppe.png";
import selenium from "../../Assets/Projects/selenium.png";
import tools from "../../Assets/Projects/tools.png";


import Particle from "../Particle";
import ProjectCard from "./ProjectCards";


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
              imgPath={Newz}
              isBlog={false}
              title="Newz🏆"
              description=" An innovative news aggregation tool that curates top 
                  stories from diverse sources, providing users with real-time updates and personalized news feeds to stay informed and engaged.  "
              ghLink="https://github.com/aaryan2720/Newz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={inotebook}
              isBlog={false}
              title="iNotebook"
              description="This web application allows users to create, edit, and delete notes online. It features user authentication and a responsive design to ensure accessibility across various devices. The application is built using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js."
              ghLink="https://github.com/aaryan2720/inotebook"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={CRM}
              isBlog={false}
              title="CRM-Customer Realtionship Management"
              description="This CRM (Customer Relationship Management) system is designed to efficiently manage customer interactions and data. 
                  It streamlines processes across various departments, enhancing communication and ensuring a holistic view of customer information.
                  The CRM system supports a wide range of functionalities, including contact management, sales tracking, and customer support."
              ghLink="https://github.com/aaryan2720/crm"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Music}
              isBlog={false}
              title="Music Player "
              description="This project is a fully functional music player application developed using PyQt5. 
                  The application provides a user-friendly interface for playing audio files, managing playlists, and controlling playback.
                  With its sleek design and efficient performance, the music player offers a seamless listening experience for users."
              ghLink="https://github.com/aaryan2720/music_player"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="Gemini Chatbot"
              description="This project involves the development of a chatbot capable of natural language processing (NLP) and task automation. 
                  The chatbot is designed to understand user inputs, engage in human-like conversations, and automate various tasks, enhancing user productivity and experience.
                "
              ghLink="https://github.com/aaryan2720/Chatbot"
              //demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={port}
              isBlog={false}
              title="2-D Portfolio"
              description="This project involves the creation of an interactive 2-D portfolio website designed to showcase projects and skills. 
                  The website provides an engaging user experience with visually appealing graphics and a user-friendly interface, highlighting professional achievements and capabilities effectively."
              ghLink="https://github.com/aaryan2720/2-D-portfolio"
              //demoLink="https://blogs.soumya-jit.tech/"       
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={car}
              isBlog={false}
              title="Neural-Network Car Race"
              description="This project involves the development of a platform that enables users to manipulate neural network parameters and observe the resulting transformations in a self-driving car simulation. 
                  The platform provides an interactive environment for learning and experimentation, allowing users to gain insights into the behavior and decision-making processes of autonomous vehicles. "
              ghLink="https://github.com/aaryan2720/neural-network-car-race"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={selenium}
              isBlog={false}
              title="Selenium Python Bots"
              description="This project involves the development of bots designed to automate button interactions and test functionalities on web applications. 
                  These bots enhance web automation skills and ensure the reliability and robustness of user interfaces by systematically performing and verifying a range of interactions and functional tests."
              ghLink="https://github.com/aaryan2720/selenium-python-bots"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ppe}
              isBlog={false}
              title="Protective-Equipment-PPE-detection-system"
              description="This project showcases the versatility of Python in developing real-world applications that can significantly impact workplace safety."
              ghLink="https://github.com/aaryan2720/Protective-Equipment-PPE-detection-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={integration}
              isBlog={false}
              title="Integration-tool"
              description="Developed an integration tool using HTML and Python to seamlessly connect front-end web interfaces with backend processes. 
                  This tool facilitates dynamic data exchange and interaction between users and server-side applications."
              ghLink="https://github.com/aaryan2720/Integration-tool"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={any}
              isBlog={false}
              title="Build Any Project"
              description="The Build Any Project repository is a comprehensive resource for students and developers looking to create a wide range of projects across various domains.
                "
              ghLink="https://github.com/aaryan2720/Build-Any-project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={detection}
              isBlog={false}
              title="Advance-Detection"
              description="An upgraded traffic analysis system designed to enhance road safety and traffic management by detecting and interpreting critical road signals."
              ghLink="https://github.com/aaryan2720/Advance-Detection"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tools}
              isBlog={false}
              title="Cybersecurity-Tools"
              description="Developed a suite of Python-based tools for network scanning, port scanning, packet sniffing, web crawling, and vulnerability detection. 
                  These scripts provide comprehensive solutions for monitoring network activity, identifying security vulnerabilities, and automating web data extraction."
              ghLink="https://github.com/aaryan2720/Cybersecurity-Tools"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
