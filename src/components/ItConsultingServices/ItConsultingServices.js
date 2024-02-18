import React, { useState } from "react";
import "./ItConsultingServices.scss";
import data from "../../assets/properties/data.json";
import services from "../../assets/properties/it-consulting.json";
import { Row, Col } from "reactstrap";
import { motion } from "framer-motion";

function ItConsultingServices() {
  const [isHovered, setIsHovered] = useState(
    Array(services.length).fill(false)
  );
  const handleMouseEnter = (index) => {
    setIsHovered((prevState) => {
      const newState = [...prevState];
      newState[index] = true;
      return newState;
    });
  };

  const handleMouseLeave = (index) => {
    setIsHovered((prevState) => {
      const newState = [...prevState];
      newState[index] = false;
      return newState;
    });
  };
  return (
    <>
      <div className="it-consulting-section">
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
                  IT Consulting services
                  <br />
                </h4>
                <h6 className="font-weight-normal pb-1">
                  Exploring our creative journey and exceptional work.
                </h6>
              </div>
            </div>
            <Row className="pb-2">
              <Col className="ml-auto mr-auto">
                <p>
                  <b>{data.title}</b> understands the growing need of employment
                  and the choices of Candidates when it comes to choosing and
                  picking up a Professional Career; <b>{data.title}</b> is open
                  and has no restrictions related to or subject to any
                  territorial limitations or other wise and widely assist all
                  Candidates located any where to pick a desired Professional
                  Career in their desired location with their custom made
                  package or work preferences. <b>{data.title}</b> assists its
                  clients in their Staffing Solutions and Services by giving
                  them a range of staffing options like temporary staffing,
                  contractual staffing and long term staffing. It helps the
                  client to recruit people with strength of character and
                  integrity who understands the goals, familiar with the nature
                  of business using its expertise in the process of identifying
                  and recommending the candidates to the clients,
                  simultaneously, adhering to the clients’ detailed requirements
                  and the candidates availability and sensitivity of acceptance
                  in taking up the offer. <b>{data.title} </b>also supports its
                  clients on both on and off shore augmentation.
                </p>
                <br />
              </Col>
            </Row>

            {services.map((item, index) => (
              <motion.div
                key={item.title}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                whileHover={{
                  background:
                    "linear-gradient(rgba(158, 158, 158, 0.14), rgba(158, 158, 158, 0.14))",
                  transition: { duration: 1 },
                }}
                initial={{ opacity: 0, scale: 1.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="row pt-5 custom-card"
              >
                <motion.div
                  animate={{
                    opacity: isHovered[index] ? 1 : 0.1,
                    paddingLeft: isHovered[index] ? "20px" : "0px",
                  }}
                  className="col-md-1 align-content-center text-center service-icon"
                >
                  <i className={item.icon} />
                </motion.div>
                <motion.div
                  animate={{
                    marginLeft: isHovered[index] ? "25px" : "-50px",
                  }}
                  className="col-md-10"
                >
                  <div className="text text-left pt-2">
                    <h4 className="mt-0">
                      <b>{item.title}</b>
                    </h4>
                    <p className="description pt-3 pb-4">
                      <b>{item.description}</b>
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default ItConsultingServices;
