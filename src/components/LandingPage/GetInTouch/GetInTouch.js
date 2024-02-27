import React from "react";
import data from "../../../assets/properties/data.json";
import { motion } from "framer-motion";
import "./GetInTouch.scss";
import { Container, Row, Col } from "reactstrap";

function GetInTouch() {
  return (
    <>
      <div className="get-in-touch-section">
        <div className="section text-center pt-5 pb-4 custom-section">
          <Container className="getintouch-container card p-5">
            <motion.div
              initial={{ opacity: 0, scale: 1.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="m-0 title text-left">Get In Touch!</h2>
              <h3 className="text-left">
                We are looking forward to start a project with you!
              </h3>
              <p className="text-left pt-4">
                Our offshore staffing model allows you to choose between
                “managing your resources by yourself or letting us do it for
                you,” either way, in this model, our consultants work for you
                from our office. Recommended for projects with well-defined
                goals and deliverables, our offshore staffing model optimizes
                cost while providing state-of-the-art services through our
                offshore development facilities.
              </p>
            </motion.div>
            <Row className="pt-4">
              <Col md="3">
                <motion.div
                  initial={{ scale: 0.5, x: -100 }}
                  whileInView={{ scale: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="info card"
                >
                  <div className="pt-3 icon icon-info">
                    <i className="nc-icon nc-pin-3" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Address</h4>
                    <p className="description p-3">
                      5900 Balcones Dr. STE 5345, Austin, TX 78731 Nascent
                      Address
                    </p>
                  </div>
                </motion.div>
              </Col>
              <Col md="3">
                <motion.div
                  initial={{ scale: 0.5, x: -350 }}
                  whileInView={{ scale: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="info card"
                >
                  <div className="pt-3 icon icon-info">
                    <i className="nc-icon nc-mobile" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Phone</h4>
                    <p className="description p-3">
                      +91 7815989782 <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </motion.div>
              </Col>
              <Col md="3">
                <motion.div
                  initial={{ scale: 0.5, x: -600 }}
                  whileInView={{ scale: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="info card"
                >
                  <div className="pt-3 icon icon-info">
                    <i className="nc-icon nc-time-alarm" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Business Hours</h4>
                    <p className="description p-3">
                      Mon – Fri – 9 am – 5 pm Sat, Sun – Closed
                      <br />
                      <br />
                    </p>
                  </div>
                </motion.div>
              </Col>
              <Col md="3">
                <motion.div
                  initial={{ opacity: 0, scale: 0.5, x: -900 }}
                  whileInView={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="info card"
                >
                  <div className="pt-3 icon icon-info">
                    <i className="nc-icon nc-email-85" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Email</h4>
                    <p className="description p-3">
                      hr@succortechnologyservices.com <br />
                      <br />
                    </p>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </div>

        <section className="py-4 get-in-touch-container">
          <motion.div
            initial={{ scale: 0.5, opacity: 0.5 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="container"
          >
            <h1 className=" text-white">{data.title}</h1>
            <p className="pt-3 text-white">
              <b>{data.title} </b>is like the virtual bridge between job
              seekers, Project developers and clients, providing them with
              end-to-end solutions; with a team of qualified, experienced and
              like-minded people with a “Vision and Mission” to achieve a common
              goal by delivering niche support and services in the field of IT
              and Non-IT having a back-up team of equally qualified and
              efficient Developers, Programmers, Strategic Planners who invest
              their entire knowledge and resources in understanding the ever
              growing trends and area to area economic development and help
              create a bridge to satisfy the demands of our Clients globally.
            </p>
            <Row className="pt-5">
              <Col md="2">
                <div className="text-white">
                  <i className="nc-icon nc-single-02" />
                  <div className="pl-1">
                    <h2 className="mt-2">16</h2>
                    <p>Specialists</p>
                  </div>
                </div>
              </Col>
              <Col md="2">
                <div className="text-white">
                  <i className="nc-icon nc-check-2" />
                  <div className="pl-1">
                    <h2 className="mt-2">50+</h2>
                    <p>Projects Delivered</p>
                  </div>
                </div>
              </Col>
              <Col md="2">
                <div className="text-white">
                  <i className="nc-icon nc-trophy" />
                  <div className="pl-1">
                    <h2 className="mt-2">10+</h2>
                    <p>Industry Awards</p>
                  </div>
                </div>
              </Col>
            </Row>
          </motion.div>
        </section>
        <div className="section-bubble-cs"></div>
      </div>
    </>
  );
}

export default GetInTouch;
