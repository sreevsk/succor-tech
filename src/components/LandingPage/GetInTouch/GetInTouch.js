import React from "react";
import data from "../../../assets/properties/data.json";

import "./GetInTouch.scss";
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

function GetInTouch() {
  return (
    <>
      <div className="get-in-touch-section">
        <div className="section text-center pt-5 pb-4 custom-section">
          <Container className="getintouch-container card p-5">
            <h2 className="m-0 title text-left">Get In Touch!</h2>
            <h3 className="text-left">
              We are looking forward to start a project with you!
            </h3>
            <p className="text-left pt-4">
              Our offshore staffing model allows you to choose between “managing
              your resources by yourself or letting us do it for you,” either
              way, in this model, our consultants work for you from our office.
              Recommended for projects with well-defined goals and deliverables,
              our offshore staffing model optimizes cost while providing
              state-of-the-art services through our offshore development
              facilities.
            </p>
            <Row className="pt-4">
              <Col md="3">
                <div className="info card">
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
                </div>
              </Col>
              <Col md="3">
                <div className="info card">
                  <div className="pt-3 icon icon-info">
                    <i className="nc-icon nc-mobile" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Phone</h4>
                    <p className="description p-3">
                      +1 (214) 937-4595 <br />
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </Col>
              <Col md="3">
                <div className="info card">
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
                </div>
              </Col>
              <Col md="3">
                <div className="info card">
                  <div className="pt-3 icon icon-info">
                    <i className="nc-icon nc-email-85" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Email</h4>
                    <p className="description p-3">
                      hr@nascenttechnologiesinc.com <br />
                      <br />
                    </p>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        <section className="py-4 section-bubble3">
          <div className="container">
            <h1>{data.title}</h1>
            <p className="pt-3">
              Nascent Technologies. is like the virtual bridge between job
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
          </div>
        </section>
      </div>
    </>
  );
}

export default GetInTouch;
