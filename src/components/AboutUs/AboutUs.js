import React from "react";
import "./AboutUs.scss";
import data from "../../assets/properties/data.json";
import { Row, Col } from "reactstrap";
import { motion } from "framer-motion";

function AboutUs() {
  return (
    <>
      <div className="about-us-section">
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
          className="section-bubble1 profile-content"
        >
          <motion.div
            className="container"
            initial={{ opacity: 0, scale: 1.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="owner">
              <div className="avatar"></div>
              <div className="name">
                <h4 className="font-weight-bolder mb-2">
                  About Us <br />
                </h4>
                <h6 className="font-weight-normal pb-1">
                  Passionate professionals driving innovation for a better
                  world.
                </h6>
              </div>
            </div>
            <Row>
              <Col className="ml-auto mr-auto">
                <p>
                  <b>{data.title}</b> is like the virtual bridge between job
                  seekers, project developers and clients, providing them with
                  end-to-end solutions; with a team of qualified, experienced
                  and like-minded people with a “Vision and Mission” to achieve
                  a common goal by delivering niche support and services in the
                  field of IT and Non-IT having a back-up team of equally
                  qualified and efficient Developers, Programmers, Strategic
                  Planners who invest their entire knowledge and resources in
                  understanding the ever growing trends and area to area
                  economic development and help create a bridge to satisfy the
                  demands of our Clients globally.
                </p>
                <br />
              </Col>
            </Row>
          </motion.div>
        </motion.div>
        <section className="py-4 section-bubble2">
          <motion.div
            initial={{ opacity: 0, scale: 1.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="container"
          >
            <p className="pt-3 text-white">
              <b>{data.title}</b> understands the business needs and believe
              that every need is Unique and therefore, bear in mind all the
              objectives or our Clients that should be fulfilled in a very
              methodical process, eliminating chances of doubts or failures.
              Immaterial of the size of the Client or Company, we extend all our
              skill sets to build a strong long term relationship with them. In
              other words, NascentTechnologies tends to act as extended arms of
              Clients in their Planning, Projects, etc..
            </p>
            <p className="pt-3 text-white">
              With the kind of team that <b>{data.title} </b>
              has and the capacity to deliver and consider every job assigned to
              us as though it is something that we ourselves wanted to do.
              Proper practices, firm decision making and timely action gives us
              the upper hand to cater to the needs of the clients, in addition
              to our relationship, understanding and support by providing
              various zones of services to them.
            </p>
            <p className="pt-3 text-white">
              <b>{data.title}</b> does understand the dynamic and never ending
              changes taking place in the business scenario globally with the
              life span of technologies rapidly reducing and new technologies
              emerging at an even more rapid pace. This is where our expertise
              and experience plays the role in ensuring that NascentTechnologies
              would be the right asset to the clients.
            </p>
          </motion.div>
        </section>
      </div>
    </>
  );
}

export default AboutUs;
