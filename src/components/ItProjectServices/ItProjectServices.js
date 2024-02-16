import React from "react";
import "./ItProjectServices.scss";
import data from "../../assets/properties/data.json";
import { Row, Col } from "reactstrap";
import { motion } from "framer-motion";

function ItProjectServices() {
  return (
    <>
      <div className="it-project-section">
        <motion.div
          initial={{ y: -150 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="section-dark page-header page-header-xs"
          style={{
            backgroundImage:
              "url(" + require("assets/img/succor-img.jpg") + ")",
          }}
        >
          <div
            className="moving-clouds"
            style={{
              backgroundImage: "url(" + require("assets/img/clouds.png") + ")",
            }}
          />
        </motion.div>
        <motion.div
          initial={{ y: 150 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.3 }}
          viewport={{ once: true }}
          className="profile-content"
        >
          <motion.div
            className="container pt-4 pb-4"
            initial={{ opacity: 0, scale: 1.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="owner">
              <div className="name">
                <h4 className="title mb-2">
                  IT Project services
                  <br />
                </h4>
                <h6 className="description pb-1">
                  Exploring our creative journey and exceptional work.
                </h6>
              </div>
            </div>
            <Row className="pb-2">
              <Col className="ml-auto mr-auto">
                <p>
                  <b>{data.title}</b> understands the growing need of employment
                  and the choices of Candidates when it comes to choosing and
                  picking up a Professional Career; Nascent Technologies is open
                  and has no restrictions related to or subject to any
                  territorial limitations or other wise and widely assist all
                  Candidates located any where to pick a desired Professional
                  Career in their desired location with their custom made
                  package or work preferences. Nascent Technologies assists its
                  clients in their Staffing Solutions and Services by giving
                  them a range of staffing options like temporary staffing,
                  contractual staffing and long term staffing. It helps the
                  client to recruit people with strength of character and
                  integrity who understands the goals, familiar with the nature
                  of business using its expertise in the process of identifying
                  and recommending the candidates to the clients,
                  simultaneously, adhering to the clients’ detailed requirements
                  and the candidates availability and sensitivity of acceptance
                  in taking up the offer. Nascent Technologies also supports its
                  clients on both on and off shore augmentation
                </p>
                <br />
              </Col>
            </Row>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default ItProjectServices;
