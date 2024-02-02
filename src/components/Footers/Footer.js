import React from "react";
import "./Footer.scss";
// reactstrap components
import { Row, Container, Col, UncontrolledTooltip } from "reactstrap";

function Footer() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <h2 className="mb-2 text-center title">
          Let's get in touch on any of these platforms.
        </h2>
        <Row className="icon-footer pt-3 justify-content-center">
          <Col md="1">
            <a
              target="_blank"
              href="https://twitter.com/NascentInc"
              id="twitter"
              style={{ color: "#1d9bf0" }}
            >
              <i className="fa fa-twitter"></i>
            </a>
            <UncontrolledTooltip placement="bottom" target="twitter" delay={0}>
              Follow us
            </UncontrolledTooltip>
          </Col>
          <Col md="1">
            <a
              target="_blank"
              href="https://www.facebook.com/Nascenttechnologiesinc"
              id="facebook"
              style={{ color: "#0866ff" }}
            >
              <i className="fa fa-facebook-square"></i>
            </a>
            <UncontrolledTooltip placement="bottom" target="facebook" delay={0}>
              Like us
            </UncontrolledTooltip>
          </Col>
          <Col md="1">
            <a
              target="_blank"
              href="https://www.instagram.com/nascenttechnologiesinc/"
              id="insta"
              style={{ color: "#c93a99" }}
            >
              <i className="fa fa-instagram"></i>
            </a>
            <UncontrolledTooltip placement="bottom" target="insta" delay={0}>
              Follow us
            </UncontrolledTooltip>
          </Col>
          <Col md="1">
            <a
              target="_blank"
              href="https://www.linkedin.com/company/nascent-technologies-inc"
              id="linkedin"
              style={{ color: "#0a66c2" }}
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <UncontrolledTooltip placement="bottom" target="linkedin" delay={0}>
              Connect with us
            </UncontrolledTooltip>
          </Col>
          <Col md="1">
            <a
              target="_blank"
              href="https://www.youtube.com/channel/UCh4vUkRnqnQZUd03ZbL_z1Q"
              id="youtube"
              style={{ color: "#f00" }}
            >
              <i className="fa fa-youtube"></i>
            </a>
            <UncontrolledTooltip placement="bottom" target="youtube" delay={0}>
              Subscribe to us
            </UncontrolledTooltip>
          </Col>
        </Row>
        <Row>
          <div className="credits ml-auto">
            <span className="copyright text-dark" style={{ fontSize: "1rem" }}>
              © 2021 Nascent Technologies Inc. All Rights Reserved.
            </span>
          </div>
        </Row>
      </Container>
      <div className="developer" style={{ display: "none" }}>
        <span>Srikanth Voma</span>
        <span>
          https://instagram.com/vsk.srikanth?utm_source=qr&igshid=MzNlNGNkZWQ4Mg%3D%3D
        </span>
      </div>
    </footer>
  );
}

export default Footer;
