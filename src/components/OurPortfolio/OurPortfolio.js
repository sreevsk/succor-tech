import React, { useState } from "react";
import "./OurPortfolio.scss";
import portfolioData from "../../assets/properties/portfolio-data.json";
import { Row, Col } from "reactstrap";
import { motion } from "framer-motion";

function OurPortfolio() {
  const [isHovered, setIsHovered] = useState(
    Array(portfolioData.length).fill(false)
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
      <div className="our-portfolio-section">
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
          className=" profile-content"
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
                  Our Portfolio <br />
                </h4>
                <h6 className="font-weight-normal pb-1">
                  Exploring our creative journey and exceptional work.
                </h6>
              </div>
            </div>
            <Row>
              <Col className="ml-auto mr-auto">
                <p>
                  Discover a showcase of our finest projects, where creativity
                  meets excellence. We take pride in every detail and strive to
                  exceed expectations, delivering solutions that leave a lasting
                  impression. Our portfolio reflects our passion for innovation
                  and our commitment to making a meaningful impact in the world.
                </p>
                <br />
              </Col>
            </Row>
          </motion.div>
        </motion.div>
        <div className="container">
          {portfolioData.companies.map((item, index) => (
            <motion.div
              key={item.name}
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
              className="row pt-5 custom-card cursor-pointer"
            >
              <motion.div
                animate={{
                  opacity: isHovered[index] ? 1 : 0.1,
                  paddingLeft: isHovered[index] ? "20px" : "0px",
                }}
                style={{ display: "grid" }}
                className="col-md-1 align-content-center text-center service-icon"
              >
                <img
                  alt="..."
                  style={{ maxWidth: "200%" }}
                  className=" img-rounded img-responsive"
                  // src={require("assets/img/AerialLidar_01.png")}
                  src={require("assets/img/client-logos/" + item.iconUrl)}
                />
              </motion.div>
              <motion.div
                animate={{
                  marginLeft: isHovered[index] ? "40px" : "-50px",
                }}
                className="col-md-10"
              >
                <div className="text text-left">
                  <h4 className="mt-0">
                    <b>{item.name}</b>
                  </h4>
                  <p className="description pt-3 pb-4">
                    <b>{item.description}</b>
                  </p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </>
  );
}

export default OurPortfolio;
