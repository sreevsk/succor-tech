import React from "react";

import data from "../../../assets/properties/data.json";
import "./Consulting.scss";
import { Container, Row, Col } from "reactstrap";

function Consulting() {
  return (
    <>
      <div className="consulting-section section text-center pt-2 pb-2 custom-section">
        <Container className="p-0">
          <h2 className="title">Consulting</h2>
          <p className="description text-left text-black">
            <b>{data.title}</b> understands the growing need of employment and
            the choices of Candidates when it comes to choosing and picking up a
            Professional Career; <b>{data.title}</b> is open and has no
            restrictions related to or subject to any territorial limitations or
            other wise and widely assist all Candidates located any where to
            pick a desired Professional Career in their desired location with
            their custom made package or work preferences. <b>{data.title} </b>
            assists its clients in their Staffing Solutions and Services by
            giving them a range of staffing options like temporary staffing,
            contractual staffing and long term staffing. It helps the client to
            recruit people with strength of character and integrity who
            understands the goals, familiar with the nature of business using
            its expertise in the process of identifying and recommending the
            candidates to the clients, simultaneously, adhering to the clients’
            detailed requirements and the candidates availability and
            sensitivity of acceptance in taking up the offer.{" "}
            <b>{data.title} </b>
            also supports its clients on both on and off shore augmentation.
          </p>
          <Row className="pt-5">
            <Col md="6">
              <div
                class="support-card"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/full-time-hire.jpg") + ")",
                }}
              >
                <div class="card-content">
                  <h2>Fulltime hire</h2>
                  <p>
                    Full time hire means a direct job offer to a candidate from
                    the intending client company, usually for permanent roles in
                    the company. The employee that joins the organization
                    through direct hiring is given all company benefits and
                    remuneration. In direct hire, which is also known as direct
                    placement, the staffing agency finds, qualifies and hires
                    permanent staff members on behalf of their client. These are
                    usually full-time positions with benefits, though sometimes
                    they are used to fill part-time positions as well.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div
                class="support-card"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/contract-to-hire.jpg") + ")",
                }}
              >
                <div class="card-content">
                  <h2>Contract to hire</h2>
                  <p>
                    Contract-to-Hire Services Our contract-to-hire services
                    (also sometimes referred to as: “Temp-to-Hire”,
                    “Temp-to-Perm”, or “Right-to-Hire”) provides a period of
                    evaluation to determine if a temporary or contract employee
                    is a long-term fit from both a skill-set and personal
                    perspective. The recruitment and selection process is
                    managed by our team, saving organizations valuable time and
                    resources. In turn, the individual can showcase his or her
                    skills, cultural fit, and work ethic prior to a formal offer
                    of employment. Our clients consider this approach an
                    invaluable “working interview”.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
          <Row className="pt-5">
            <Col md="6">
              <div
                class="support-card"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/offshore-hire.png") + ")",
                }}
              >
                <div class="card-content">
                  <h2>Offshore hire</h2>
                  <p>
                    Our offshore staffing model allows you to choose between
                    “managing your resources by yourself or letting us do it for
                    you,” either way, in this model, our consultants work for
                    you from our office. Recommended for projects with
                    well-defined goals and deliverables, our offshore staffing
                    model optimizes cost while providing state-of-the-art
                    services through our offshore development facilities.
                  </p>
                </div>
              </div>
            </Col>
            <Col md="6">
              <div
                class="support-card"
                style={{
                  backgroundImage:
                    "url(" + require("assets/img/temp-hire.png") + ")",
                }}
              >
                <div class="card-content">
                  <h2>Temp hire</h2>
                  <p>
                    Our Temp-to-Hire Program lets you bring a selected candidate
                    into your work environment for on-the-job performance
                    evaluation. The candidate works on the temporary assignment
                    on our payroll while you determine there’s a good fit. If
                    you decide to hire our associate, we will work with you on a
                    prorated fee structure.
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default Consulting;
