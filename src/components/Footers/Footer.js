import React from "react";
import "./Footer.scss";
import { motion } from "framer-motion";

import { Row, Container, UncontrolledTooltip } from "reactstrap";

function Footer() {
  return (
    <footer className="footer footer-black footer-white">
      <Container>
        <h2 className="mb-2 text-center title">
          Let's get in touch on any of these platforms.
        </h2>
        <Row className="icon-footer pt-3 justify-content-center">
          <motion.div
            initial={{ scale: 0.5, x: 100, y: 50 }}
            whileInView={{ scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
            viewport={{ once: true }}
            className="col-md-1"
          >
            <a
              target="_blank"
              href="https://twitter.com/SuccorTec"
              rel="noreferrer"
              id="twitter"
              style={{ color: "#1d9bf0" }}
            >
              <i className="fa fa-twitter"></i>
            </a>
            <UncontrolledTooltip placement="bottom" target="twitter" delay={0}>
              Follow us
            </UncontrolledTooltip>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, x: 60, y: 50 }}
            whileInView={{ scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
            viewport={{ once: true }}
            className="col-md-1"
          >
            <a
              target="_blank"
              href="https://www.facebook.com/SuccorTechnologiesServices"
              rel="noreferrer"
              id="facebook"
              style={{ color: "#0866ff" }}
            >
              <i className="fa fa-facebook-square"></i>
            </a>
            <UncontrolledTooltip placement="bottom" target="facebook" delay={0}>
              Like us
            </UncontrolledTooltip>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, x: 10, y: 50 }}
            whileInView={{ scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
            viewport={{ once: true }}
            className="col-md-1"
          >
            <a
              target="_blank"
              href="https://www.instagram.com/succortechnologyservices/"
              rel="noreferrer"
              id="insta"
              style={{ color: "#c93a99" }}
            >
              <i className="fa fa-instagram"></i>
            </a>
            <UncontrolledTooltip placement="bottom" target="insta" delay={0}>
              Follow us
            </UncontrolledTooltip>
          </motion.div>
          <motion.div
            initial={{ scale: 0.5, x: -30, y: 50 }}
            whileInView={{ scale: 1, x: 0, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.3, transition: { duration: 0.2 } }}
            viewport={{ once: true }}
            className="col-md-1"
          >
            <a
              target="_blank"
              href="https://www.linkedin.com/company/succortechnologyservices/"
              rel="noreferrer"
              id="linkedin"
              style={{ color: "#0a66c2" }}
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <UncontrolledTooltip placement="bottom" target="linkedin" delay={0}>
              Connect with us
            </UncontrolledTooltip>
          </motion.div>
        </Row>
        <Row>
          <motion.div
            initial={{ scale: 0.5, x: 100 }}
            whileInView={{ scale: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="credits ml-auto"
          >
            <span className="copyright text-dark" style={{ fontSize: "1rem" }}>
              © 2021 Succor Technologies Services Inc. All Rights Reserved.
            </span>
          </motion.div>
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
