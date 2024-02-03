import React from "react";
import "./Support.scss";
import data from "../../assets/properties/data.json";
import supportData from "../../assets/properties/support-data.json";
import { Container, Row, Col } from "reactstrap";

function Support() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    };
  });
  return (
    <>
      <div className="support-section">
        <div
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
        </div>
        <div className="section profile-content">
          <Container>
            <div className="owner">
              <div className="avatar"></div>
              <div className="name">
                <h4 className="title mb-2">
                  Tech Support <br />
                </h4>
                <h6 className="description pb-1">
                  We Have the Tech Support Pros You Need.
                </h6>
              </div>
            </div>
            <Row>
              <Col className="ml-auto mr-auto pt-2">
                <p>
                  Indeed, IT Support and IT Projects keep companies operating
                  and move your business forward.
                </p>
                <p>
                  For this reason, an IT Services Company is a VERY valuable
                  part of the modern business team.
                </p>
                <p>
                  Whether networking the new office location, replacing that old
                  SQL Server, or upgrading desktops to the newest version of
                  Windows, Tech Support is there. That’s what we do.
                </p>
                <br />
                <div className="list-div">
                  <ol
                    style={{
                      "--length": supportData.length,
                    }}
                    role="list"
                    className="pl-0"
                  >
                    {supportData.map((item, index) => (
                      <li
                        key={index + 1}
                        style={{
                          "--i": index + 1,
                        }}
                      >
                        <Row>
                          <Col
                            md="1"
                            className="icon"
                            style={{ maxWidth: "3%", top: "3px" }}
                          >
                            <i className="nc-icon nc-minimal-right" />
                          </Col>
                          <Col md="6">
                            <h3 className="m-0">{item.text}</h3>
                          </Col>
                        </Row>
                      </li>
                    ))}
                  </ol>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <section className="py-4 section-bubble2">
          <div className="container op-team-support pb-0">
            <h2 className="title text-white">Operational Team Support</h2>
            <p className="pt-1 text-white">
              In today’s competitive environment, you face ever-increasing
              demands from your business. However, if you are like many other IT
              organizations, your critical IT resources are consumed with
              day-to-day operations – or you don’t have the engineering skills
              needed to deal with frequent changes that span complex,
              interconnected technologies. With NascentTechnologies Operate
              Services, you receive high-touch operational support from a
              trusted partner – freeing your resources to drive innovation.
            </p>
            <Row className="pt-4">
              <Col md="3">
                <div className="text-center text-white">
                  <i className="nc-icon nc-chat-33" />
                </div>
                <div className="text pt-2">
                  <p>Unified Communications</p>
                </div>
              </Col>
              <Col md="3">
                <div className="text-center text-white">
                  <i className="nc-icon nc-email-85" />
                </div>
                <div className="text pt-2">
                  <p>Contact Center</p>
                </div>
              </Col>
              <Col md="3">
                <div className="text-center text-white">
                  <i className="nc-icon nc-laptop" />
                </div>
                <div className="text pt-2">
                  <p>Server Management</p>
                </div>
              </Col>
            </Row>
            <Row className="pt-5">
              <Col md="3">
                <div className="text-center text-white">
                  <i className="nc-icon nc-vector" />
                </div>
                <div className="text pt-2">
                  <p>Networking</p>
                </div>
              </Col>
              <Col md="3">
                <div className="text-center text-white">
                  <i className="nc-icon nc-lock-circle-open" />
                </div>
                <div className="text pt-2">
                  <p>Security</p>
                </div>
              </Col>
              <Col md="3">
                <div className="text-center text-white">
                  <i className="nc-icon nc-tile-56" />
                </div>
                <div className="text pt-2">
                  <p>Data Center</p>
                </div>
              </Col>
            </Row>
            <p className="pt-4 text-white">
              Quality based service delivery methodology built on best practices
              gained from ITIL framework for service operations and more than
              two decades of service delivery
            </p>
            <Row className="pt-4">
              <Col md="4">
                <div className="info card">
                  <div className="pt-3 icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Incident Management</h4>
                    <p className="description p-3">
                      Continuous monitoring of unplanned interruptions by our
                      support staff who follow defined resolutions, escalations
                      or SoP’s to quickly restore your service operations back
                      to normal.
                    </p>
                    <br />
                    <br />
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info card">
                  <div className="pt-3 icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Problem Management</h4>
                    <p className="description p-3">
                      Move a step beyond incident management by engaging our
                      experienced technicians who proactively identify the root
                      cause of incidents, perform trend analysis and act to
                      reduce incident recurrence.
                    </p>
                    <br />
                    <br />
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info card">
                  <div className="pt-3 icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Helpdesk Services</h4>
                    <p className="description p-3">
                      Our people are at the heart of our support services. They
                      are a perfect blend of technical and support skills who
                      love to deliver high-quality customer care.
                    </p>
                    <br />
                    <br />
                    <br />
                  </div>
                </div>
              </Col>
            </Row>
            <Row className="pt-2">
              <Col md="4">
                <div className="info card">
                  <div className="pt-3 icon icon-info">
                    <i className="nc-icon nc-album-2" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Server Management</h4>
                    <p className="description p-3">
                      Linux or Windows, Vmware or Hyper-V – right from server
                      hardening to optimization; our Level 3 industry certified
                      and experienced techies are the best insurance for your
                      servers.
                    </p>
                    <br />
                    <br />
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info card">
                  <div className="pt-3 icon icon-info">
                    <i className="nc-icon nc-bulb-63" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Database Administration</h4>
                    <p className="description p-3">
                      Our expert DBA team on Oracle, MySQL and Microsoft
                      platforms take complete responsibility for the
                      functionality, availability, security and performance of
                      your database environment.
                    </p>
                    <br />
                    <br />
                  </div>
                </div>
              </Col>
              <Col md="4">
                <div className="info card">
                  <div className="pt-3 icon icon-info">
                    <i className="nc-icon nc-chart-bar-32" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Network and Firewall</h4>
                    <p className="description p-3">
                      Industry certified network and IT security technicians
                      track and monitor devices like routers, switches,
                      firewalls, etc. for proper operations through our Network
                      Operations Centre. Notifications and remedy follow when
                      faults occur.
                    </p>
                    <br />
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </section>
        <section className="section-bubble3">
          <div className="pb-0 container op-team-support">
            <h2 className="title text-white">Monitoring Team Support</h2>
            <p className="pt-1">
              Like many IT operations teams, you don’t lack monitoring. In fact,
              the opposite is true—getting too many irrelevant events can drown
              out meaningful information. So troubleshooting eats up too much of
              your team’s time.
            </p>
            <Row className="pt-4">
              <Col md="3">
                <div className="text-center text-white">
                  <i className="nc-icon nc-chat-33" />
                </div>
                <div className="text pt-2">
                  <p>Application Monitoring</p>
                </div>
              </Col>
              <Col md="3">
                <div className="text-center text-white">
                  <i className="nc-icon nc-email-85" />
                </div>
                <div className="text pt-2">
                  <p>Hardware Monitoring</p>
                </div>
              </Col>
              <Col md="3">
                <div className="text-center text-white">
                  <i className="nc-icon nc-laptop" />
                </div>
                <div className="text pt-2">
                  <p>Network Monitoring</p>
                </div>
              </Col>
            </Row>
            <Row className="pt-4">
              <Col md="3">
                <div className="text-center text-white">
                  <i className="nc-icon nc-chat-33" />
                </div>
                <div className="text pt-2">
                  <p>Server Monitoring</p>
                </div>
              </Col>
              <Col md="3">
                <div className="text-center text-white">
                  <i className="nc-icon nc-email-85" />
                </div>
                <div className="text pt-2">
                  <p>Cloud Monitoring</p>
                </div>
              </Col>
            </Row>
          </div>
        </section>
      </div>
    </>
  );
}

export default Support;
