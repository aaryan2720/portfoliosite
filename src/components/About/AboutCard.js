import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Aaryan Choudhari </span>
            from <span className="purple"> Maharastra, India.</span>
            <br />
            I am currently pursuing <span className="purple"> B.tech (CSE)</span> at <span className="purple"> DIEMS ,CH.Sambhajinagar.</span>
            <br />
            <br />
            <p style={{ textAlign: "justify" }}>
            I have done My Schooling from <span className="purple">Padmashri Shankar Bapu Apegoakar English School,CH.Sambhajinagar.</span>
            <br />
            It has teached me a lot of things that are useful in college-life.
          </p>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>

          

          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening To Music
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading History Books 
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Don't be the part of change , Be the change !"{" "}
          </p>
          <footer className="blockquote-footer">Aaryan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
