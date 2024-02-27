import React from "react";
import "./ContactUs.scss";
import { Row, Col } from "reactstrap";
import { motion } from "framer-motion";

function ContactUs() {
  return (
    <>
      <div className="contact-us-section">
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
                <h4 className="font-weight-bolder mb-2">
                  Get In Touch !<br />
                </h4>
                <h6 className="font-weight-normal pb-1">
                  We are looking forward to start a project with you!
                </h6>
              </div>
            </div>
            <Row>
              <Col className="ml-auto mr-auto">
                <p>
                  Our offshore staffing model allows you to choose between
                  “managing your resources by yourself or letting us do it for
                  you,” either way, in this model, our consultants work for you
                  from our office. Recommended for projects with well-defined
                  goals and deliverables, our offshore staffing model optimizes
                  cost while providing state-of-the-art services through our
                  offshore development facilities..
                </p>
                <br />
              </Col>
            </Row>
            <Row className="pt-4">
              <Col md="3">
                <div className="text-center">
                  <i className="nc-icon nc-pin-3" />
                </div>
                <div className="text text-center pt-2">
                  <h4 className="mt-2">Address</h4>
                  <p className="description p-3">
                    5900 Balcones Dr. STE 5345, Austin, TX 78731 Nascent Address
                  </p>
                </div>
              </Col>
              <Col md="3">
                <div className="text-center">
                  <i className="nc-icon nc-mobile" />
                </div>
                <div className="text text-center  pt-2">
                  <h4 className="mt-2">Phone</h4>
                  <p className="description p-3">+91 7815989782</p>
                </div>
              </Col>
              <Col md="3">
                <div className="text-center">
                  <i className="nc-icon nc-time-alarm" />
                </div>
                <div className="text-center text pt-2">
                  <h4 className="mt-2">Business Hours</h4>
                  <p className="description p-3">
                    Mon – Fri – 9 am – 5 pm Sat, Sun – Closed
                  </p>
                </div>
              </Col>
              <Col md="3">
                <div className="text-center">
                  <i className="nc-icon nc-email-85" />
                </div>
                <div className=" text-center text pt-2">
                  <h4 className="mt-2">Email</h4>
                  <p className="description p-3">
                    hr@succortechnologyservices.com
                  </p>
                </div>
              </Col>
            </Row>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default ContactUs;
