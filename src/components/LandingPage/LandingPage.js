import React from "react";
import data from "../../assets/properties/data.json";
import "./LandingPage.scss";
import Consulting from "./Consulting/Consulting";
import Supports from "./Supports/Supports";
import GetInTouch from "./GetInTouch/GetInTouch";
import { motion } from "framer-motion";
import CustomScrollTranslate from "./CustomScrollTransform";

import { Link } from "react-router-dom";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

function LandingPage() {
  const prodTranslateCard1 = CustomScrollTranslate(450, -2700, 0, 450);
  const prodTranslateCard3 = CustomScrollTranslate(-450, 2700, -450, 0);

  const servicesCard1 = CustomScrollTranslate(1000, -3000, 0, 500);
  const servicesCard2 = CustomScrollTranslate(-1000, 3000, -500, 0);
  const servicesCard3 = CustomScrollTranslate(1500, -3000, 0, 500);
  const servicesCard4 = CustomScrollTranslate(-1500, 3000, -500, 0);

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <div className="main">
        <div className="section text-center pt-4">
          <Container>
            <Row>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
              >
                <Col className="ml-auto mr-auto" md="8">
                  <h2 className="title">Let's talk product</h2>
                  <h5 className="description">
                    Discover seamless IT solutions with <b>{data.title}</b>. As
                    a leading IT service consulting firm, we specialize in
                    strategic planning, system integration, cybersecurity, and
                    digital transformation. Elevate your business with our
                    expertise and innovative solutions. Welcome to a new era of
                    efficiency and growth with <b>{data.title}</b>.
                  </h5>
                  <br />
                  <Link to="/about-us">
                    <Button className="btn-round" color="info">
                      About Us
                    </Button>
                  </Link>
                </Col>
              </motion.div>
            </Row>
            <br />
            <br />
            <Row className="pt-2">
              <Col md="4">
                <motion.div
                  style={{ translateX: prodTranslateCard1 }}
                  className="info card"
                >
                  <div className="pt-3 icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">SERVICES</h4>
                    <p className="description p-3">
                      With the right services <b>{data.title}</b> provides
                      advantages to the clients in terms of scalability, risk
                      mitigation, cost efficiency and core focusing.
                    </p>
                    <Button
                      className="btn-link pb-3"
                      color="info"
                      href="#pablo"
                    >
                      See more
                    </Button>
                  </div>
                </motion.div>
              </Col>
              <Col md="4">
                <div className="info card">
                  <div className="pt-3 icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">PROJECTS</h4>
                    <p className="description p-3">
                      <b>{data.title}</b> undertakes Projects from the clients
                      both on and off shore, by understanding the current
                      scenario and the technology available.
                    </p>
                    <br />
                    <Button
                      className="btn-link pb-3"
                      color="info"
                      href="#pablo"
                    >
                      See more
                    </Button>
                  </div>
                </div>
              </Col>
              <Col md="4">
                <motion.div
                  style={{ translateX: prodTranslateCard3 }}
                  className="info card"
                >
                  <div className="pt-3 icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">SUPPORTS</h4>
                    <p className="description p-3">
                      <b>{data.title}</b> provides its clients full-time support
                      in terms of maintaining all up-dates, security features,
                      anti-viruses and constant monitoring.
                    </p>
                    <br />
                    <Button
                      className="btn-link pb-3"
                      color="info"
                      href="#pablo"
                    >
                      See more
                    </Button>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center pt-3 custom-section">
          <Container>
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, type: "spring" }}
              viewport={{ once: true }}
            >
              <h2 className="title">Services</h2>
              <p className="description text-left">
                Explore tailored IT solutions at <b>{data.title}</b>. From
                strategic planning to system integration, cybersecurity, and
                digital transformation, our services are designed to propel your
                business forward. Experience efficiency and innovation with
                <b>{data.title}</b>, your trusted IT service consulting partner.
              </p>
            </motion.div>
            <Row>
              <Col md="6">
                <motion.div
                  style={{
                    translateX: servicesCard1,
                  }}
                  className="card card-profile"
                >
                  <div className="card-avatar icon icon-success pt-4">
                    <i className="nc-icon nc-box-2" />
                  </div>
                  <div className="card-body">
                    <div className="author text-left">
                      <CardTitle tag="h4">
                        Project Implementation Services
                      </CardTitle>
                    </div>
                    <p className="card-description text-left p-4">
                      We assemble a team of multi-skilled consultants, to serve
                      either in a consulting role or work as a fully integrated
                      part of your business. Our teams are managed through SLAs
                      and KPIs to ensure the highest degree of excellence
                      throughout your project.
                    </p>
                  </div>
                </motion.div>
              </Col>
              <Col md="6">
                <motion.div
                  style={{
                    translateX: servicesCard2,
                  }}
                  className="card card-profile"
                >
                  <div className="card-avatar icon icon-success pt-4">
                    <i className="nc-icon nc-settings-gear-65" />
                  </div>
                  <div className="card-body">
                    <div className="author text-left">
                      <CardTitle tag="h4">
                        Customized Services
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </CardTitle>
                    </div>
                    <p className="card-description text-left p-4">
                      Our team of experts commit to building the solutions you
                      require, on time and within budget. We perform this
                      service through our global network of delivery centers &
                      centers of excellence engineers, to serve either in a
                      consulting role or work as a fully integrated part of your
                      business.
                    </p>
                  </div>
                </motion.div>
              </Col>
              <Col md="6">
                <motion.div
                  style={{
                    translateX: servicesCard3,
                  }}
                  className="card card-profile"
                >
                  <div className="card-avatar icon icon-success pt-4">
                    <i className="nc-icon nc-ruler-pencil" />
                  </div>
                  <div className="card-body">
                    <div className="author text-left">
                      <CardTitle tag="h4">Project Migration Services</CardTitle>
                    </div>
                    <p className="card-description text-left p-4">
                      Our Migration Services provide you the expertise to reduce
                      the time to market and reap the benefits sooner of your
                      new or upgraded platform. We’ll bring our expertise and
                      experience to make sure the risk is minimized and the
                      project goes as smoothly as possible.
                    </p>
                  </div>
                </motion.div>
              </Col>
              <Col md="6">
                <motion.div
                  style={{ translateX: servicesCard4 }}
                  className="card card-profile"
                >
                  <div className="card-avatar icon icon-success pt-4">
                    <i className="nc-icon nc-laptop" />
                  </div>
                  <div className="card-body">
                    <div className="author text-left">
                      <CardTitle tag="h4">IT administration services</CardTitle>
                    </div>
                    <p className="card-description text-left p-4">
                      Our IT Administration service can take away all of the
                      hassle and ensure that your IT systems are running
                      smoothly and efficiently on your behalf. We can perform
                      scheduled health checks on your servers and other hardware
                      to reduce the potential for breakdown.
                    </p>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </div>
        <Supports />
        <Consulting />
        <GetInTouch />
      </div>
    </>
  );
}

export default LandingPage;
