import React, { useState } from "react";
import "./GISServices.scss";
import services from "../../assets/properties/gis-services-data.json";
import { motion } from "framer-motion";
import {
  Button,
  Card,
  Form,
  FormGroup,
  Label,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";
import CustomScrollTranslate from "components/LandingPage/CustomScrollTransform";
function GISServices() {
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

  const orthoImgTranslate = CustomScrollTranslate(-1, 4.5, 0, 1);
  const mLidarImgTranslate = CustomScrollTranslate(-1, 3.2, 0, 1);

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
          className="profile-content section-bubble1"
        >
          <motion.div
            className="container pt-4"
            initial={{ opacity: 0, scale: 1.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="owner">
              <div className="name">
                <h4 className="font-weight-bolder mb-2">
                  GIS services
                  <br />
                </h4>
                <h6 className="font-weight-normal pb-1">
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

        <div className="section-bubble2">
          <motion.div
            initial={{ y: -150, scale: 0.5 }}
            whileInView={{ y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="container"
          >
            <h4 className="font-weight-bolder mt-0 text-white">GIS</h4>
            <p className="pt-2 font-weight-normal text-white-50">
              Geographic Information System (GIS), is a tool used to capture,
              store, analyse and manage mapping data (also referred to as
              spatial, location based or geographic information) and associated
              attributes which are spatially referenced to the earth.
              Photomapping utilise an array of advanced GIS software and spatial
              applications.
            </p>
            <h6 className="font-weight-normal pb-3 pt-3 text-white-50">
              MORE ADVANCED GIS SERVICES ARE REGULARLY USED BY SEVERAL
              GOVERNMENT AGENCIES, INDUSTRIES AND COMPANIES SUCH AS
            </h6>

            <div className="gis-list">
              {services.gisItems.map((item, index) => (
                <motion.div
                  key={index}
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
                  className="row border-bottom"
                >
                  <motion.div
                    animate={{
                      opacity: isHovered[index] ? 1 : 0.2,
                      paddingLeft: isHovered[index] ? "20px" : "0px",
                    }}
                    className="col-md-1 align-content-center text-center service-icon"
                  >
                    {index + 1}
                  </motion.div>
                  <motion.div
                    animate={{
                      marginLeft: isHovered[index] ? "-30px" : "-80px",
                    }}
                    className="col-md-10 text-container"
                  >
                    <div className="text text-left">
                      <p className="description text-white text-capitalize">
                        <b>{item}</b>
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="section-bubble3">
          <motion.div
            initial={{ y: 150, scale: 1.2 }}
            whileInView={{ y: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="container pt-1"
          >
            <h4 className="font-weight-bolder text-white">
              Digital Photogrammetry
            </h4>
            <p className="pt-3">
              Dharani have state of the art facilities for offering services
              that covers a wide range of photogrammetric service requirements.
              Our services are envisioned to meet the diverse needs of our
              clientele quickly and efficiently and our project methodologies
              are based on the unique set of customer requirements and
              challenges.
            </p>
            <p className="pt-3">
              Photogrammetry allows you to obtain reliable information and
              measurements of physical objects from photographs and use them for
              development of maps, drawings, or 3D models of terrains. Aerial
              images require pre- and post-processing using Photogrammetry
              before they can be used to extract valuable geo-data.
            </p>
            <p className="pt-3">
              DGT has an extensive experience in handling Photogrammetry
              projects on all scales of mapping.
            </p>
            <p className="pt-3">
              High quality aerial photography is the primary foundation for
              Photogrammetry mapping, and we have executed numerous projects
              over varied applications.
            </p>
            <h5 className="font-weight-normal pb-1 pt-3 text-white">
              SERVICES OFFERED INCLUDE
            </h5>

            <div className="gis-list">
              {services.dpItems.map((item, index) => (
                <motion.div
                  key={index}
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
                  className="row custom-card"
                >
                  <motion.div
                    animate={{
                      opacity: isHovered[index] ? 1 : 0.1,
                      paddingLeft: isHovered[index] ? "20px" : "0px",
                      color: isHovered[index] ? "white" : "black",
                    }}
                    style={{ color: "black" }}
                    className="col-md-1 align-content-center text-center service-icon"
                  >
                    {index + 1}
                  </motion.div>
                  <motion.div
                    animate={{
                      marginLeft: isHovered[index] ? "-30px" : "-80px",
                    }}
                    className="col-md-10 text-container"
                  >
                    <div className="text text-left">
                      <p className="description text-capitalize">
                        <b>{item}</b>
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="section-bubble4">
          <motion.div
            initial={{ x: -150, scale: 0.5 }}
            whileInView={{ x: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="container pt-1"
          >
            <h4 className="font-weight-bolder text-white">Ortho Photography</h4>
            <p className="pt-3  text-white">
              Orthophotography is produced through a set of aerial images. Our
              systems execute aerial Lidar Topography with rectified
              orthophotography with direct geo references.
            </p>
            <p className="pt-3 text-white">
              The data is digitally corrected to represent an orthogonal
              projection without defects of perspective, allowing us to generate
              accurate planimetry and maps, as opposed to an aerial photograph.
            </p>
            <p className="pt-3 pb-3 text-white">
              Aerial photographs will always present deformations caused by the
              perspective from the camera and the height or the speed at which
              the camera moves.
            </p>
            <motion.img
              alt="..."
              style={{ scale: orthoImgTranslate, maxWidth: "80%" }}
              className=" img-rounded img-responsive"
              src={require("assets/img/Ortho.png")}
            />
          </motion.div>
        </div>

        <div className="section-bubble5">
          <div className="text-left container text-white pt-1">
            <h4 className="font-weight-bolder">Mobile LiDAR</h4>
            <p className="pt-3 pb-3">
              Mobile LiDAR offers numerous benefits over conventional ground
              surveys and aerial mapping. This non-invasive survey method can be
              used day or night, with the effective acquisition of millions of
              3-D design points per minute.
            </p>

            <motion.img
              style={{ scale: mLidarImgTranslate }}
              alt="..."
              className=" img-rounded img-responsive"
              src={require("assets/img/MobileLidar.png")}
            />
          </div>
        </div>

        <div className="section-bubble6">
          <motion.div
            initial={{ x: 150, scale: 1.2 }}
            whileInView={{ x: 0, scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-left container pt-1"
          >
            <h4 className="font-weight-bolder text-white">UAV</h4>
            <p className="pt-3 pb-3 text-white">
              DGT has added the capability to collect high-resolution imagery
              from a small, Unmanned Aerial Vehicle (UAV). This system is safe,
              efficient and cost-competitive in comparison to traditional
              fixed-wing -based data collection platforms and terrestrial survey
              operations. The collected imagery can be efficiently processed to
              generate digital surface models, topography and imagery data
              products to integrate into both CAD and GIS systems. These images
              can then be transformed into orthomosaics (maps) and 3D elevation
              models with relative accuracy of down to 3 cm / 5 cm.
            </p>

            <div className="gis-list pb-3">
              {services.uavItems.map((item, index) => (
                <motion.div
                  key={index}
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
                  className="row custom-card"
                >
                  <motion.div
                    animate={{
                      opacity: isHovered[index] ? 1 : 0.1,
                      paddingLeft: isHovered[index] ? "20px" : "0px",
                      color: isHovered[index] ? "white" : "black",
                    }}
                    style={{ color: "black" }}
                    className="col-md-1 align-content-center text-center service-icon"
                  >
                    {index + 1}
                  </motion.div>
                  <motion.div
                    animate={{
                      marginLeft: isHovered[index] ? "-30px" : "-80px",
                    }}
                    className="col-md-10 text-container"
                  >
                    <div className="text text-left">
                      <p className="description text-white-50 text-capitalize">
                        <b>{item}</b>
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>
            <img
              alt="..."
              className=" img-rounded img-responsive"
              src={require("assets/img/UAV02.png")}
            />
          </motion.div>
        </div>

        <div className="section-bubble7">
          <div className="text-left container text-white pt-1">
            <h4 className="font-weight-bolder">Aerial LiDAR</h4>
            <p className="pt-3">
              A LiDAR collection system uses a powerful laser sensor comprised
              of a transmitter and a receiver, a geodetic-quality Global
              Positioning System (GPS) receiver, and an Inertial Navigation
              System (INS) unit. The technology resembles that used by radar
              sensors by which a device emits energy (focused light) and then
              measures the time it takes to travel to a target and return to a
              collector and at the same time compensates for the movement of the
              aircraft and the sensor.
            </p>
            <p className="pt-3">
              Aerial LiDAR Scanning for Large-Scale Topographic and As-Built
              Surveying. With this, we can map large-scale topographies and get
              substantial and complex outputs as 3D modelling, etc.
            </p>
            <p className="pt-3 pb-3">
              DGT has well expertise team to provide END to END services with
              cost effective and on time deliveries.
            </p>

            <div className="gis-list pb-3">
              {services.alItems.map((item, index) => (
                <motion.div
                  key={index}
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={() => handleMouseLeave(index)}
                  whileHover={{
                    background:
                      "linear-gradient(rgba(158, 158, 158, 0.4), rgba(158, 158, 158, 0.4))",
                    transition: { duration: 1 },
                  }}
                  initial={{ opacity: 0, scale: 1.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1 }}
                  viewport={{ once: true }}
                  className="row custom-card"
                >
                  <motion.div
                    animate={{
                      opacity: isHovered[index] ? 1 : 0.1,
                      paddingLeft: isHovered[index] ? "20px" : "0px",
                      color: isHovered[index] ? "white" : "black",
                    }}
                    style={{ color: "black" }}
                    className="col-md-1 align-content-center text-center service-icon"
                  >
                    {index + 1}
                  </motion.div>
                  <motion.div
                    animate={{
                      marginLeft: isHovered[index] ? "-30px" : "-80px",
                    }}
                    className="col-md-10 text-container"
                  >
                    <div className="text text-left">
                      <p className="description text-white text-capitalize">
                        <b>{item}</b>
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ))}
            </div>

            <img
              alt="..."
              style={{ maxWidth: "60%" }}
              className=" img-rounded img-responsive"
              src={require("assets/img/AerialLidar_01.png")}
            />
            <br />
            <br />
            <br />
            <img
              alt="..."
              style={{ maxWidth: "60%" }}
              className=" img-rounded img-responsive"
              src={require("assets/img/AerialLidar_05.png")}
            />
          </div>
        </div>

        <Container className="questions-window">
          <Card className="card-register">
            <h3 className="title mx-auto">Any Questions ?</h3>
            <Form className="register-form">
              <label>Name</label>
              <InputGroup className="form-group-no-border">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-user" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Name" type="text" />
              </InputGroup>
              <label>Email</label>
              <InputGroup className="form-group-no-border">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="nc-icon nc-email-85" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Email" type="email" />
              </InputGroup>
              <label>Telephone</label>
              <InputGroup className="form-group-no-border">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-phone" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Telephone" type="numer" />
              </InputGroup>
              <label>Message</label>
              <InputGroup className="form-group-no-border pb-2">
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>
                    <i className="fa fa-envelope" />
                  </InputGroupText>
                </InputGroupAddon>
                <Input placeholder="Message" type="textarea" />
              </InputGroup>
              <FormGroup check>
                <Label check>
                  <Input defaultValue="" type="checkbox" />
                  By using this form you agree with the storage and handling of
                  your data by this website.{" "}
                  <span className="form-check-sign" />
                </Label>
              </FormGroup>
              <Button block className="btn-round" color="info" type="button">
                Inquire
              </Button>
            </Form>
          </Card>
        </Container>
      </div>
    </>
  );
}

export default GISServices;
