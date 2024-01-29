/*!

=========================================================
* Paper Kit React - v1.3.2
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";
import data from "../../assets/properties/data.json";
import "./LandingPage.scss";
import Consulting from "./Consulting/Consulting";
import Supports from "./Supports/Supports";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col,
} from "reactstrap";

function LandingPage() {
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
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Let's talk product</h2>
                <h5 className="description">
                  Discover seamless IT solutions with <b>{data.title}</b>. As a
                  leading IT service consulting firm, we specialize in strategic
                  planning, system integration, cybersecurity, and digital
                  transformation. Elevate your business with our expertise and
                  innovative solutions. Welcome to a new era of efficiency and
                  growth with <b>{data.title}</b>.
                </h5>
                <br />
                <Button
                  className="btn-round"
                  color="info"
                  href="#pablo"
                  onClick={(e) => e.preventDefault()}
                >
                  About Us
                </Button>
              </Col>
            </Row>
            <br />
            <br />
            <Row className="pt-2">
              <Col md="4">
                <div className="info card">
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
                </div>
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
                <div className="info card">
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
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <div className="section section-dark text-center pt-3 custom-section">
          <Container>
            <h2 className="title">Services</h2>
            <p className="description text-left">
              Explore tailored IT solutions at <b>{data.title}</b>. From
              strategic planning to system integration, cybersecurity, and
              digital transformation, our services are designed to propel your
              business forward. Experience efficiency and innovation with
              <b>{data.title}</b>, your trusted IT service consulting partner.
            </p>
            <Row>
              <Col md="6">
                <Card className="card-profile">
                  <div className="card-avatar icon icon-success pt-4">
                    <i className="nc-icon nc-box-2" />
                  </div>
                  <CardBody>
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
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile">
                  <div className="card-avatar icon icon-success pt-4">
                    <i className="nc-icon nc-settings-gear-65" />
                  </div>
                  <CardBody>
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
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile">
                  <div className="card-avatar icon icon-success pt-4">
                    <i className="nc-icon nc-ruler-pencil" />
                  </div>
                  <CardBody>
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
                  </CardBody>
                </Card>
              </Col>
              <Col md="6">
                <Card className="card-profile">
                  <div className="card-avatar icon icon-success pt-4">
                    <i className="nc-icon nc-laptop" />
                  </div>
                  <CardBody>
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
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
        <Supports />
        <Consulting />
      </div>
    </>
  );
}

export default LandingPage;
