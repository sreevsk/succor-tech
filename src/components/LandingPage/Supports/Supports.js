import React from "react";
import { motion } from "framer-motion";
import "./Supports.scss";
import { Container, Row, Col } from "reactstrap";

function Supports() {
  const customStylesList = {
    "--length": 3,
  };
  const li_1 = {
    "--i": 1,
  };
  const li_2 = {
    "--i": 2,
  };
  const li_3 = {
    "--i": 3,
  };
  return (
    <>
      <div className="supports-section section text-center pt-3 pb-1 custom-section">
        <Container>
          <h2 className="title">Supports</h2>
          <Row>
            <Col md="6">
              <motion.p
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-left pt-4"
              >
                An activity required for successful execution of a product or
                program or process is known as Support service. The support
                services are managed by a separate department. It is extremely
                important for any organization to have good support services to
                succeed in their business. Support services are important for
                the immediate relief of the customers and the clients. Support
                services are not just limited to phone calls nowadays email,
                chat, web forms, and social communications, as well as
                self-service support sites.
              </motion.p>
              <div className="list-div">
                <ol style={customStylesList} role="list" className="pl-0">
                  <motion.li
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-left pt-4"
                    style={li_1}
                  >
                    <Row>
                      <Col md="1" className="icon">
                        <i className="nc-icon nc-cloud-upload-94" />
                      </Col>
                      <Col md="10">
                        <h3 className="m-0">Support for Cloud</h3>
                      </Col>
                    </Row>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    style={li_2}
                  >
                    <Row>
                      <Col md="1" className="icon">
                        <i className="nc-icon nc-tile-56" />
                      </Col>
                      <Col md="10">
                        <h3 className="m-0">
                          Support for Server and Networking
                        </h3>
                      </Col>
                    </Row>
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    viewport={{ once: true }}
                    style={li_3}
                  >
                    <Row>
                      <Col md="1" className="icon">
                        <i className="nc-icon nc-laptop" />
                      </Col>
                      <Col md="10">
                        <h3 className="m-0">Super for Data Center</h3>
                      </Col>
                    </Row>
                  </motion.li>
                </ol>
              </div>
            </Col>
            <Col md="6">
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="support-image"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/promo.png") + ")",
                }}
              ></motion.div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Supports;
