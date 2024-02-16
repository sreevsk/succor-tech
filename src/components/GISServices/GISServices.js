import React from "react";
import "./GISServices.scss";
import data from "../../assets/properties/data.json";
import { Row, Col } from "reactstrap";
import { motion } from "framer-motion";

function GISServices() {
  return (
    <>
      <div className="gis-section">
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
                <h4 className="title mb-2">
                  GIS services
                  <br />
                </h4>
                <h6 className="description pb-1">
                  Empowering data-driven decisions through our Geographic
                  Information System (GIS).
                </h6>
              </div>
            </div>
            <Row className="pb-2">
              <Col className="ml-auto mr-auto">
                <p>
                  Unveiling the world through spatial intelligence. Our
                  Geographic Information System (GIS) empowers data-driven
                  decisions, revealing patterns and insights that shape smarter
                  strategies. Unlock the power of location-based knowledge for
                  precision, efficiency, and a clearer perspective on your
                  environment.
                </p>
                <br />
              </Col>
            </Row>
          </motion.div>
        </motion.div>
      </div>
    </>
  );
}

export default GISServices;
